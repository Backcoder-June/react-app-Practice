import React from "react";
import {Grid, Button, Container, Typography, TextField} from "@mui/material";
import { BASE_URL, USER } from "../../config/host-config";




const Login = () => {
    const API_BASE_URL = BASE_URL + USER; 

    const loginHandler = e => {
        e.preventDefault();
    
        // 이메일, 비번 입력값 
        const $email = document.querySelector('#email');
        const $password = document.querySelector('#password');
    
        // 서버에 로그인 요청
        fetch(`${API_BASE_URL}/signin`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: $email.value,
                password: $password.value
            })
        })
        .then(res => res.json())
        .then(result => {
            if (result.message) { //message 가 있다는 건, 로그인 실패했다는 의미 
                alert(result.message);
            } else {
                // alert('로그인 성공');
                
                // 발급받은 토큰을 저장, 회원정보 저장해서 사용해야 함 
                // cookie는 원하지 않을 때도 지속적으로 보내서 위험요소가 있음
                // =>1. 웹 제공 Localstorage 에 토큰을 저장해서 원할때만 전달 가능 ( 브라우저 종료되도 유지 ) 내장객체 
                // =>2. 웹 제공 sessionStorage에 토큰 저장 ( 브라우저 종료되면 사라짐 )
                // 이때 Role 도 같이 내려주면 됨 

                localStorage.setItem('ACCESS_TOKEN', result.token);
                // 필요한 회원정보만 set 해서 사용 
                localStorage.setItem('LOGIN_USERNAME', result.userName);


            
                 
                window.location.href='/';



            }
        });
    };
    


    
    return (
        <Container component="main" maxWidth="xs" style={{ margin: "300px auto" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={loginHandler}>
                
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="email address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="on your password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            로그인
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Login;