---
slug: url-fragmentation
title: GA URL fragmentation Issue
author: YoungChang Lee
author_url: https://github.com/p-iknow
author_image_url: https://avatars.githubusercontent.com/u/35516239?v=4
tags: [google-analytics, url-fragmentation]
---

## URL fragmentation 이슈란?
운영중인 사이트의 특정 페이지에서 Query String를 쓰고 있다면, 사용자는 `www.yoursite.com` 과 `www.yoursite.com?WEB_BNNR_ID=123` URI로  모두 접근할 수 있다.  아마도 GA 분석시 2 URI 모두 하나의 페이지 값으로 기록될 것을 기대 하겠지만 GA 에서는 아래와 같이 기록된다.  이것이 바로 URL fragmenta