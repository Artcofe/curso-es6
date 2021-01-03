---
slug: how-to-collect-data
title: Google Analytics는 어떻게 데이터를 수집하는가?
author: Junhee Lee
author_url: https://github.com/jhlee910609
tags: [GoogleAnalytics, GA]
---

## 1. GA의 기본적인 데이터 수집 방식

한 웹 사이트에 대한 데이터 수집은 웹 사이트 페이지에 삽입되는 GA에서 제공하는 javascript tracking 코드로부터 시작됩니다. 이는 모든 사용자의 interaction을 추적합니다. 여기서 말하는 사용자의 interaction은 페이지 로드처럼 간단할 수도 있고, 버튼 클릭, 링크 등 조금 더 구체적인 사용자의 행동일 수도 있습니다.

GA tracking 코드에서는 웹 사이트의 도메인을 보고서의 'site'로 지정하며, tracking code가 웹 사이트에 설치되어 있으면 GA가 웹 사이트와 관련 하위 도메인을 위한 쿠키를 브