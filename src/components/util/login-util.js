
// 로그인 유저 token 반환 함수 
export const getToken = () => {
    return localStorage.getItem('ACCESS_TOKEN');
};

// 로그인 userName 반환 함수 
export const getUserName = () => {
    return localStorage.getItem('LOGIN_USERNAME');
};


// 로그인 상태인지 검증해주는 함수 
export const isLogin = () => {
    return getUserName() !== null;
    // 이게 true 이면 로그인 상태인 것 
};