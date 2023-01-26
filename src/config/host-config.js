
// 브라우저가 현재 클라이언트 호스트 이름 얻어오기 
const hostname = window.location.hostname; 


//백엔드 호스트 이름 
let backendHost; 

if (hostname === 'localhost') {
    backendHost = 'http://localhost:8080';
} else if (hostname === 'lalal.com') { //앱서버 웹서버 두 URL 연결
    backendHost = 'http://rururu.com';
}


backendHost = 'http://localhost:8080'; 

export const BASE_URL = backendHost;
export const TODO = '/api/todos'; 
export const USER = '/api/auth'; 
