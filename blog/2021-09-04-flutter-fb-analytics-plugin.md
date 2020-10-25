
---
title: Flutter 플러그인으로 ecommerce 이벤트 보낼 때 생긴 일
author: Dayoung Kang
author_url: https://github.com/alledy
author_image_url: https://avatars.githubusercontent.com/u/46309894?v=4
tags: [flutter, firebase, google-analytics]
---

:::note

이 글은 Flutter 플러그인으로 ecommerce 이벤트를 보내는 방법에 대한 내용이 아닙니다. 제가 겪은 이슈를 공유하는 차원의 글이며 세부적인 구현은 들어있지 않으므로 감안하고 봐주시면 감사하겠습니다🙋🏻‍♀️

:::

## What is Flutter?

[Flutter](https://flutter.dev/)(이하 플러터)는 구글에서 만든 크로스 플랫폼 어플리케이션을 만들 수 있는 SDK이며 하나의 코드베이스에서 안드로이드, iOS 앱, 웹까지 만들 수 있어 개발 생산성을 높여줍니다.

플러터 생태계에는 여러 패키지와 플러그인이 있습니다. 여기서 말하는 플러그인은 패키지 종류의 하나로 Android, iOS와 같은 특정 플랫폼에 기능을 구현하기 위한 목적을 갖고 있습니다. 그래서 플러그인은 타겟 플랫폼의 네이티브 언어와 [Dart](https://dart.dev/)(플러터의 프로그래밍 언어) 코드로 쓰여진 API로 구성돼 있습니다. 플러그인과 관련한 공식 문서는 [여기](https://flutter.dev/docs/development/packages-and-plugins/using-packages)를 참고해보세요. 그리고 플러터 패키지와 플러그인은 [pub.dev](https://pub.dev/) 사이트에서 검색해볼 수 있습니다.

## What's the matter with the plugin?

제가 다니는 회사에서는 플러터 웹뷰로 만들어진 앱이 있었고 그 앱의 사용자 데이터를 `Google Analytics`로 보내서 분석하고자 했습니다. 앱에 구글 애널리틱스를 연결하는 방법은 한 가지가 아니지만, 구글에서 권장하는 방법은 [Firebase SDK를 설치](https://firebase.google.com/docs/analytics)하는 것입니다. 그래서 Firebase SDK를 설치했습니다. 그리고 그 다음엔 어떻게 해야할까요? [안드로이드에 애널리틱스를 연결하는 방법](https://developers.google.com/analytics/devguides/collection/firebase/android/start)과 [iOS에 애널리틱스를 연결하는 방법](https://developers.google.com/analytics/devguides/collection/firebase/ios/start)에 관한 문서가 각각 있습니다. 하지만 플러터는 크로스 플랫폼을 지원하죠. 플러터 앱에는 어떻게 애널리틱스를 연결하면 좋을까요?

위에서 언급한 플러그인이 이 때 필요합니다. 물론 플러그인을 안 쓰고 직접 구현해도 되지만 생산성을 위해서 [firebase_analytics](https://pub.dev/packages/firebase_analytics) 플러그인을 사용했습니다. 만약 플러터 앱에서 커스텀 플랫폼 코드를 직접 쓰는 방법이 궁금하다면 [여기](https://flutter.dev/docs/development/platform-integration/platform-channels)를 참고해보세요.

![image](https://user-images.githubusercontent.com/46309894/132012289-4a26bb51-360e-438e-b67b-64779d16ba78.png)

플러터 앱에서 이 플러그인이 제공하는 Dart API를 사용한다면 우리가 직접 Android와 iOS, Web에 각각 애널리틱스를 적용하는 코드를 구현하지 않아도 되는 것이죠. 각각의 플랫폼 코드가 어떻게 구현되어 있는지 세부 구현은 알지 못하더라도 추상화된 메서드로 한 번에 처리할 수 있는 게 장점입니다.

[logEvent](https://pub.dev/documentation/firebase_analytics/latest/firebase_analytics/FirebaseAnalytics/logEvent.html)라는 플러그인 메서드를 플러터 앱에 구현하는 예시 코드를 보겠습니다. 일부만 있는 예시 코드이므로 세부적인 부분은 신경쓰지 않아도 됩니다.

```dart
Future<void> _sendAnalyticsEvent() async {
  // logEvent 메서드 호출
  await widget.analytics.logEvent(
    name: 'purchase',
    parameters: <String, dynamic>{
      'items': [
        {
          'item_id': 'SKU_123',
          'item_name': 'jeggings',
          'item_category': 'pants',
          'item_variant': 'black',
          'item_brand': 'Google',
          'price': 9.99
        },
        {
          'item_id': 'SKU_456',
          'item_name': 'boots',
          'item_category': 'shoes',
          'item_variant': 'brown',
          'item_brand': 'Google',
          'price': 24.99
        }
      ],
    },
  );
}
```

여기서 호출하고 있는 logEvent 플러그인 메서드는 파이어베이스의 logEvent([iOS - Swift](https://firebase.google.com/docs/reference/swift/firebaseanalytics/api/reference/Classes/Analytics#logevent_:parameters:), [Android - Java](<https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics#logEvent(java.lang.String,%20android.os.Bundle)>)) 메서드를 Dart 코드로 래핑한 것입니다. 내부에서는 사용자가 어떤 플랫폼을 사용하는지에 따라 해당 플랫폼 언어로 구현된 logEvent 메서드를 호출하게 합니다.

회사 코드에서도 저는 위의 예시처럼 사용자의 구매 행동을 기록하기 위해 `purchase` 이벤트를 보냈습니다. 이 purchase 이벤트 명세는 [여기](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event#PURCHASE)에 나와 있습니다. (FYI. 편의를 위해서 더 읽기 쉬운 Android 문서를 링크했지만 [iOS](https://firebase.google.com/docs/reference/swift/firebaseanalytics/api/reference/Constants#analyticseventpurchase)도 패러미터 객체의 key로 쓰고 있는 constant value는 동일합니다.)

저는 이벤트 명세에서 정의된 대로 [items](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Param#ITEMS) 리스트를 보내도록 했습니다. [파이어베이스 문서](https://firebase.google.com/docs/analytics/measure-ecommerce)를 보면 purchase뿐만 아니라 모든 이커머스 이벤트 파라미터에, 각 아이템들의 정보를 담은 리스트인 `items` 필드가 포함되는 것을 알 수 있습니다.

그런데 이상하게 안드로이드에서만 이벤트가 누락되는 이슈가 생겼습니다.

| ![image](https://user-images.githubusercontent.com/46309894/132041048-9329dc40-5e48-4773-ac33-b7b3dd036526.png) |
| :-------------------------------------------------------------------------------------------------------------: |
|                                              _왜 안드로이드만...?_                                              |

| ![image](https://user-images.githubusercontent.com/46309894/132098237-92c57edb-4502-4299-82e6-c237090be73c.png) |
| :-------------------------------------------------------------------------------------------------------------: |
|                             _개발 환경에서 실행한 디버그 뷰에서는 잘 잡히는데...?_                              |