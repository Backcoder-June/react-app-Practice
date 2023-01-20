[[ React ]]

1. nodeJS 설치 

2. create-react-app 설치 (최초1번)
$ npm install -g create-react-app

3. react프로젝트 생성
$ npx create-react-app 프로젝트이름

=> 리액트 파일 구조로 프로젝트가 생성됨 ( boot 처럼 ) 


4. 구조 
- public 
정적 파일들 넣음 (img, favicon, html, txt...)
- index.html 핵심파일 
=> react 앱에 유일한 html 파일 
=> SPA (Single Page Application) 의 첫 뼈대 
=> 이 파일의 <div id=root></div> 이 root 디브 안에 다 들어가는 것 

=> 기본적인 구조는 그대로 유지해서 사용 
( 웬만한거 바꾸지마 ) 



기존 
- 다 만들어진 페이지를 바꿔가며 JSON 데이터만 렌더링 

리액트 
- 싹 다 JSON 으로 짜서 렌더링 


- index.js 
=> index.html 적용 js 
=> const root = ReactDOM.createRoot(document.getElementById('root'));
root 디브 가져다 사용 

=> root.render(
    <App />
);

- 컴포넌트 
<App />  : 이렇게 생긴 태그들, 즉 부품모음을 컴포넌트라 함 


- css 
import './App.css';

해서 적용 


- .js 로 그림을 그림 => js 문법 ( html 하고 유사하지만  js 문법 => 나중에 html로 변환해서 사용 )  
function App() {
  return (
    <h1>hello</h1>
    <h2>im a react leaner. </h2>
  );
}

- src 



package.json 
=> build.gradle 같은 설정파일 
=> 여기에 npm 명령어로 라이브러리 등 설치 


5. 터미널 
npm start
=> 시작 
( 디폴트 3000 port ) 
