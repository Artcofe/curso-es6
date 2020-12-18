
# 이벤트

## 1. 이벤트의 정의

이벤트란, 사용자와 웹 사이트의 상호작용을 의미합니다.

- 사용자가 회원 가입 버튼이나 구매 버튼을 클릭할 때
- 댓글 입력란을 클릭할 때
- 광고 이미지를 클릭할 때 혹은 어떤 특정 영역이 화면에 노출됐을 때

## 2. 이벤트를 수집하는 이유

이벤트를 수집하는 이유는, 전환이 잘 발생할 수 있도록 사이트를 관리하는데 중요한 데이터로 활용할 수 있기 때문입니다. 또한, GA추적코드를 삽입하는 것만으로는 페이지뷰 이외의 어떠한 히트도 기록할 수 없습니다.

다만, 이벤트 기능이 아무리 유용하다고 해서 모든 이미지와 버튼을 추적하는 것은 아니며, 목표를 달성하기 위해 어떤 이벤트를 수집해야 하는지 분별하는 역량이 필요합니다.

이벤트 추적은 추후에 전환보고서 목표에 사용할 수 있습니다.


## 3. 이벤트 설정 방법

이벤트 정보를 수집하려면 HEAD 영역에 추적 코드를 심어 데이터를 수집하는 것처럼, **이벤트 대상이 되는 버튼이나 이미지에 태그를 달아야 합니다.**
코드 내에서는 데이터 분석을 제대로 하기 위해 기획해야 하는 변수가 아래와 같이 4가지 존재합니다.

- action(**필수**) 

  추적 대상과 사용자의 상호 작용을 의미합니다.
  일반적으로 특정 웹 개체에 대해 측정할 이벤트 또는 상호작용 유형의 이름을 지정하려면 액션 매개변수를 사용합니다. 

  모든 액션이 상위 카테고리와는 별개로 나열됩니다. 이를 통해 보고서의 이벤트 데이터를 다른 방식으로 분류할 수 있습니다. 또한, 순 이벤트는 고유한 액션 이름에 의해 결정됩니다. 그렇기 때문에, 모든 카테고리에서 중복된 액션 이름을 사용할 수 있지만, 순 이벤트 수의 집계 방식에 영향을 줄 수 있습니다.

- category(선택)

  추적 대상의 그룹명을 의미합니다. 일반적으로 특정 카테고리에서 그룹화할 관련 UI 요소에 동일한 카테고리 이름을 여러 번 사용합니다. 

- label(선택)

  이벤트의 추가 정보나 설명을 의미합니다.

- value(선택)

  이벤트에 부여하는 가치를 의미합니다. (보통 실무에서 사용하는 일이 드뭅니다.)

```javascript
<script>    
    gtag('event','click',{
	'event_category':'button',
	'event_label':'nav buttons',
	'value':4});
</script>
```

## 4. 자동으로 수집되는 이벤트

코드를 추가하지 않아도 page_view를 비롯한 많은 이벤트를 수집할 수 있습니다.
[자동으로 수집되는 이벤트 코드](https://support.google.com/analytics/answer/9234069)
[자동으로 수집되는 이벤트 코드2 - 좀 더 향상된 개별 측정](https://support.google.com/analytics/answer/9216061)


## 4. 이벤트 활용법

이벤트 데이터는 *방문 형태 보고서 > 이벤트* 에서 확인이 가능합니다.



### 라벨을 이름으로 사용하기

추가 정보를 입력할 수 있는 '라벨'을 활용합니다. 다만, 데이터를 확인할 때 불편할 수 있습니다.



### 드릴 다운 구조를 완전히 새롭게 설계하기

카테고리, 액션, 라벨이 갖는 사전적 의미는 버리고 드릴 다운되는 순서에 집중합니다.

ex) 카테고리는 사전적으로 분류지만, 그 의미가 아니라 이벤트가 발생한 '위치'를 나타내게 합니다.



## 5. 이벤트 기획안 작성하기

화면에 이벤트를 잡아야 하는 버튼이나 영역을 표시하고 카테고리, 액션, 라벨을 정의합니다.

*세 요소는 역할이 고정되어 있지 않고 얼마든지 유연하게 구성이 가능합니다.*



## 6. 구글 태그 관리자

이벤트 태깅을 통해 필요한 데이터를 수집할 수 있지만, 개발자에게 매번 이벤트 내용을 소스 코드에 넣어 달라고 요청해야 하는 등의 불편함이 발생합니다.
'구글 태그 관리자'는 이러한 과정을 간소화해줍니다.




## 7. 이벤트 생성할 때 주의할 점

- 행동보고서 이벤트도 모두 사이트 목적과 규칙 등을 생각해서 일관성있는 기준으로 운용해야합니다. 그렇지 않으면, 추후에 변경하기 어렵습니다.

- 동일한 이벤트를 지칭할 때 2개의 다른 값으로 사용하지 않도록 해야 합니다. 그렇게 되면, 데이터 값이 나누어져 하나의 데이터 값으로 보기 어렵습니다.

- 대소문자를 섞어쓰지 않도록 해야 합니다. 그렇게 되면, 데이터 값이 나누어져 하나의 데이터 값으로 보기 어렵습니다.

- 측정기준 항목을 바꿔쓰지 않도록 해야 합니다. 그렇게 되면, 데이터 값이 나누어져 하나의 데이터 값으로 보기 어렵습니다.

## 8. 참고

[구글 애널리틱스 고객센터](https://support.google.com/analytics#topic=9143232)
Do it! 사용자의 행동을 분석해 성과를 높이는 구글 애널리틱스