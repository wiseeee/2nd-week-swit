<h1 align="middle">메신저</h1>


# 🔗 배포
[https://infallible-panini-19ee47.netlify.app/](https://infallible-panini-19ee47.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4cdb7c60-5f99-420f-9f10-5420389e3332/deploy-status)](https://app.netlify.com/sites/infallible-panini-19ee47/deploys)

<br/>

# 기술스택

<img alt="react" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img alt="redux" src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">

<img alt="styled-components" src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img alt="eslint" src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img alt="prettier" src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">


<br/>



# 🏹 구현 목록

### redux 세팅
  - 초기 상태 - 메세지 5개 보여주기
  - 메세지 리스트, 접속자

### 메신저 기능
  - 사용자 처음 사용할 때 로그인 prompt로 사용자 이름 받기
    <img src="https://user-images.githubusercontent.com/82519641/157753851-5aa08ef0-7734-4ac4-b47e-8ffad03fe9a1.png" width="200px">
  - 내가 보낸 메세지 삭제 가능
  - 상대방의 메세지 회신 클릭시 input box에 상대방이름, 메세지 추가
    <img src="https://user-images.githubusercontent.com/82519641/157754243-360904c6-1c85-42ee-bb01-3a36fd06282d.png" width="500px">


<br/>

# 🏗 프로젝트 구조

```
📦src
 ┣ 📂actions             // 액셔 타입 정의
 ┃ ┗ 📜types.js
 ┣ 📂components
 ┃ ┣ 📂ChannelToolbar    // 상단바 header
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂Input             // 입력창 컴포넌트
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂Message           // 메세지 컴포넌트
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┗ 📂MessageList       // 메세지 리스트 컴포넌트
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styled.js
 ┣ 📂reducers            // 리듀서
 ┃ ┣ 📜index.js
 ┃ ┣ 📜initState.js
 ┃ ┗ 📜reducer.js
 ┣ 📂styles
 ┃ ┣ 📜globalStyles.js
 ┃ ┗ 📜styled.js
 ┣ 📜App.jsx
 ┣ 📜index.jsx
 ┗ 📜store.js

```
<br/>

# ⚙️ 설치 및 시작하는 법

```
$ git clone https://github.com/pre-onboarding-course-team-6/2nd-week-swit

$ cd 2nd-week-swit

$ npm install

$ npm run start
```
<br/>

## ✅ Git - Commit Message Convention [🔗](https://webruden.tistory.com/486)

- feat : 새로운 기능 추가 (a new feature)
- fix : 버그 수정 (a bug fix)
- docs : 문서 수정 (changes to documentation)
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 (formatting, missing semi colons, etc; no code change)
- refactor : 코드 리펙토링 (refactoring production code)
- test : 테스트 코드, 리펙토링 테스트 코드 추가 (adding tests, refactoring test; no production code change)
- chore : 빌드 업무 수정, 패키지 매니저 수정 (updating build tasks, package manager configs, etc; no production code change)
<br/>

