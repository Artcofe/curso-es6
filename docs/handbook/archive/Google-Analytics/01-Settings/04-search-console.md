---
slug: google-search-console
title: 구글 서치 콘솔
author: chanheeis
author_url: https://github.com/chanheeis
author_image_url: https://avatars.githubusercontent.com/u/53820773
tags: [GoogleAnalytics, GA, Search Console]
---

# Google Search Console (구글 서치 콘솔)

## 1. Google Search Console (이하 서치 콘솔)의 정의

서치 콘솔은 구글의 웹마스터 도구로, 구글 검색 엔진이 사이트를 색인할 수 있도록 사이트맵을 등록하고, SEO를 위한 관리 기능을 제공하는 서비스입니다.

## 2. GA와 서치 콘솔을 연동해야 하는 이유

구글 검색 엔진은 referer정보를 암호화하기 때문에, GA만으로는 구글 검색 키워드를 수집할 수 없습니다. 따라서, 구글 검색 엔진으로부터 유입되는 키워드 정보를 수집하려면 서치 콘솔을 연동하여야 합니다.

> **referer**
>
> referer는 현재 사이트에 진입하기 직전의 사이트 정보를 의미합니다.

## 3. GA와 서치 콘솔 연동

현재 GA4 속성은 서치 콘솔과의 연동이 불가능합니다. 서치 콘솔과 연동하려면 Universal Analytics 속성을 새로 추가하는 과정이 필요합니다.

1. 현재 버전 (21.10 기준)의 GA는 속성 생성 시 GA4가 default로 되어 있습니다.
2. UA 속성을 새로 생성하기 위해, 먼저 관리자 화면으로 이동하세요.
   ![UA_step_1](https://user-images.githubusercontent.com/5382077