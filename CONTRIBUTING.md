# Contributing to Web-Analytics-Handbook

## Develop Environment
- [yarn](https://classic.yarnpkg.com/en/docs/getting-started) -v.1.22.10
- [vscode](https://code.visualstudio.com/)
- [vscode plugin - eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Installation

1. 이 저장소를 [Fork](https://help.github.com/articles/fork-a-repo/) 한 후
   로컬 기기에 [clone](https://help.github.com/articles/cloning-a-repository/) 합니다.
2. 브랜치 생성:
   ```
   git checkout -b MY_BRANCH_NAME
   ```
3. 의존성 설치:
   ```
   yarn install
   ```
4. 라이브러리 개발 서버 띄우기:
   ```
   yarn start
   ```
5. 그 외 여러가지 명령어들을 사용해볼 수 있습니다.
   ```
   # 빌드
   yarn build
   ```

## Commit message

커밋 메세지는 제목과 본문을 포함해야합니다.

제목은 해당 커밋에 대한 주요 내용을 간략하게 기록합니다. 

본문은 커밋에서 수정된 상세내역을 작성합니다. 생략 가능하며, `어떻게`보단 `무엇을`, `왜` 해결했는지 적어주시는 것이 좋습니