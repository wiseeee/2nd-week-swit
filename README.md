![enter image description here](https://user-images.githubusercontent.com/24728385/148955263-b3a0e063-6950-46f2-82e9-1fcabc24e19e.jpeg)

<h1 align="middle">[과제] Swit</h1>

1. React, Redux 구현
2. 메신저 삭제, 답장, 추가 기능 구현

# 🔗 배포
[https://infallible-panini-19ee47.netlify.app/](https://infallible-panini-19ee47.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4cdb7c60-5f99-420f-9f10-5420389e3332/deploy-status)](https://app.netlify.com/sites/infallible-panini-19ee47/deploys)


# ⚙️ 설치 및 시작하는 법

```
$ git clone https://github.com/pre-onboarding-course-team-6/2nd-week-ateam-ventures

$ cd 2nd-week-ateam-ventures

$ npm install

$ npm run start
```

# 🏹 과제 구현 목록 및 담당

## [22_01 민무길](https://github.com/gilmujjang)

1. 메신저 삭제, 답장 기능 구현
2. 메신저 리스트 기능 구현
3. 코드 리펙토링

## [22_01 정민형](https://github.com/minbr0ther)

1. Redux 초기 세팅
2. 입력창 기능 구현
3. CSS 스타일 담당

## [22_01 김선명](https://github.com/BGM-109)

1. 입력창 기능 구현
2. CSS 스타일 담당

## [22_01 이현명](https://github.com/wiseeee)

1. 메신저 삭제, 답장 기능 구현
2. 메신저 리스트 기능 구현

# 👺 이슈 해결
### eslint & redux 충돌
- redux 초기 세팅하는데 협업을 위해 설정해둔 eslint와 충둘되어 오류 메세지가 떳다. eslint와 redux의 매개변수가 다른 순서로 사용되어 충돌되었던 것이다.
이 문제를 해결 하려면 action 매개변수의 기본값을 설정 했어야 했다.
- [해결방안 url](https://stackoverflow.com/questions/62259351/react-redux-error-default-parameters-should-be-last-default-param-last)
### useSelector 에러
- combineReducers를 사용하면, state.{사용하는 리듀서}.{state 내부접근} 순으로 해야하는데 state.{state 내부접근} 이렇게 접근해서 오류가 있었다.
```
const name = useSelector((state) => state.logInReducer.user.name);
```
### npm run start시 iframe 강제생성 오류
- package.json에 코드 추가
```
"resolutions": {
    "react-error-overlay": "6.0.9"
  },
"devDependencies": {
    "react-error-overlay": "6.0.9"
  },
"scripts": {
    "preinstall": "npx npm-force-resolutions"
  }
```
### onSubmit 새로고침 되는 현상
- button 말고 form에 onSubmit 속성 달아줘야 refresh 현상 없어짐
```
<form onSubmit={onSubmit}>
```

# 🏗 프로젝트 구조

```
src
 ┣ actions
 ┃ ┗ types.js
 ┣ components
 ┃ ┣ ChannelToolbar
 ┃ ┃ ┗ index.jsx
 ┃ ┣ Input
 ┃ ┃ ┗ index.jsx
 ┃ ┣ Message
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ styled.js
 ┃ ┗ MessageList
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ styled.js
 ┣ reducers
 ┃ ┣ index.js
 ┃ ┗ reducer.js
 ┣ styles
 ┃ ┣ globalStyles.js
 ┃ ┗ styled.js
 ┣ App.jsx
 ┣ index.jsx
 ┗ store.js

```

## ✅ Git - Commit Message Convention [🔗](https://webruden.tistory.com/486)

- feat : 새로운 기능 추가 (a new feature)
- fix : 버그 수정 (a bug fix)
- docs : 문서 수정 (changes to documentation)
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 (formatting, missing semi colons, etc; no code change)
- refactor : 코드 리펙토링 (refactoring production code)
- test : 테스트 코드, 리펙토링 테스트 코드 추가 (adding tests, refactoring test; no production code change)
- chore : 빌드 업무 수정, 패키지 매니저 수정 (updating build tasks, package manager configs, etc; no production code change)

## 👨‍👨‍👦‍👦 팀구성원 소개

| [<img src="https://github.com/minbr0ther.png" width="100px">](https://github.com/minbr0ther) | [<img src="https://github.com/BGM-109.png" width="100px">](https://github.com/BGM-109) | [<img src="https://github.com/wiseeee.png" width="100px">](https://github.com/wiseeee) | [<img src="https://github.com/gilmujjang.png" width="100px">](https://github.com/gilmujjang) |
| :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
|                        [22_01 정민형](https://github.com/minbr0ther)                         |                       [22_01 김선명](https://github.com/BGM-109)                       |                       [22_01 이현명](https://github.com/wiseeee)                       |                        [22_01 민무길](https://github.com/gilmujjang)                         |
