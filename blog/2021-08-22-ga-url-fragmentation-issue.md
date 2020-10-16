---
slug: url-fragmentation
title: GA URL fragmentation Issue
author: YoungChang Lee
author_url: https://github.com/p-iknow
author_image_url: https://avatars.githubusercontent.com/u/35516239?v=4
tags: [google-analytics, url-fragmentation]
---

## URL fragmentation 이슈란?
운영중인 사이트의 특정 페이지에서 Query String를 쓰고 있다면, 사용자는 `www.yoursite.com` 과 `www.yoursite.com?WEB_BNNR_ID=123` URI로  모두 접근할 수 있다.  아마도 GA 분석시 2 URI 모두 하나의 페이지 값으로 기록될 것을 기대 하겠지만 GA 에서는 아래와 같이 기록된다.  이것이 바로 URL fragmentation 이슈이다.

![url-fragmentation-issue](https://user-images.githubusercontent.com/35516239/130347429-d05e9139-866d-4acf-8c08-41142cf16ae4.png)

 `www.yoursite.com` 과 `www.yoursite.com?WEB_BNNR_ID=123` 두 URL 모두 같은 페이지를 의미하기  때문에 운영 중인 보기(View)에서는 두 페이지의 측정기준(Dimension)을 통합 하는 것이 유용하다. 여러 요청 URI 가 동일 사용자 경험을 나타낸다면 GA 에서 이들을 단일 페이지로 통합해야 한다.

Query String 이외에 trailing slash 로 인한 fragmentation 이슈도 있다. `www.yoursite.com/page-name/` 과  `www.yoursite.com/page-name` 로 같은 페이지 접속이 가능할 때 두 URL 이 각각 다른 페이지 값으로 기록된다.   참고로 `www.