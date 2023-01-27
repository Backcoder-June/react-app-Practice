import React, { useState } from 'react'
import {Button, Container, Grid, TextField, Typography, Link} from "@mui/material";
import { BASE_URL, USER } from '../../config/host-config';
import { TurnLeftRounded } from '@mui/icons-material';

const Join = () => {

    const API_BASE_URL = `${BASE_URL}${USER}` //BASE_URL + USER 이렇게 해도 같음 

    // message 나 validate 를 변수, boolean 으로 관리하면 공유되서 각각 다 만 들어야 함 
    // => 객체로 관리 {} => message.username / message.password 이렇게 꺼내서 사용 
    // 검증 메세지 저장, 전역 
    const [message, setMessage] = useState({
        username: '', 
        password: '',
        passwordCheck: '',
        email: ''
    }); 

    // validation
    const [validate, setValidate] = useState({
        username: false, 
        password: false,
        passwordCheck: false,
        email: false
    }); 

    // 이 세개를 하나로 합쳐서 {username: {validate : , message: }, password : {...}}
    // 이렇게 크게 묶어서 하나의 객체로 관리할 수 있다. 

    // 입력값 저장 => 저장해두고 fetch 로 보낼 때 사용 ( 그릇 )
    const [userValue, setUserValue] = useState({
        //입력값은 fetch 로 서버로 보낼 데이터니까 서버의 변수명과 일치시켜야 함  
        // 대소문자 구분 필요 
        userName: '',  
        password: '',
        email: ''
    });


    // 닉네임 검증 onChange 핸들러 
    const nameHandler = e => {
        //reEx 
        const nameRegex = /^[가-힣]{2,5}$/; 

        // 검증 시작 
        let msg; 
        // e => onChange 이벤트 객체 => target 대상 의 => value 가져오는 스킬
        if (!e.target.value) { //truthy-falsy 로 '',null 일 때 의미 ( === '')
            msg = '닉네임을 입력해주세요.';
            setValidate({
                ...validate,
                username: false});
        } else if (!nameRegex.test(e.target.value)) {
            msg = '2-5글자의 한글로만 작성가능합니다.';
            setValidate({
                ...validate,
                username: false});
        } else {
            msg = '사용가능한 닉네임 입니다.';
            setValidate({
                ...validate, 
                username: true});
        }
        setMessage({
            ...message,
            username: msg});

        setUserValue({
            ...userValue,
            userName: e.target.value 
        });
    };


    // 비밀번호 검증 onChange 헨들러 
    const passwordHandler = e => {

        // 여기서 변동 일어나면 패스워드확인 초기화 (validate까지)
        document.querySelector('#passwordCheck').value = '';
        document.querySelector('#passwordCheckInfo').textContent =''; 

        setValidate({
            ...validate, 
            passwordCheck: false
        });

        console.log('이후에 체크 tf : ' + validate.passwordCheck);


        
        const pwRegex =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
        // 검증 시작 
        let msg; 
        if (!e.target.value) { //truthy-falsy 로 '',null 일 때 의미 ( === '')
            msg = '비밀번호를 입력해주세요.';
            setValidate({
            ...validate,
            password: false});
        } else if (!pwRegex.test(e.target.value)) {
            msg = '8글자이상의 영문,숫자,특수문자를 포함해 주세요.';
            setValidate({
            ...validate,
            password: false});
        } else {
            msg = '사용가능한 비밀번호 입니다.';
            setValidate({
            ...validate, 
            password: true});
        }
        setMessage({
        ...message, 
        password: msg});
        setUserValue({
            ...userValue,
            userName: e.target.value
        });

        setUserValue({
            ...userValue,
            password: e.target.value
        });
    };

    const passwordCheckHandler = e => {
        let msg = '';

        if (!e.target.value) {
            msg = '비밀번호를 확인해주세요.'; 
            setValidate({
                ...validate, 
                passwordCheck: false
            });
        } else if (e.target.value !== userValue.password) {
            msg = '비밀번호가 일치하지 않습니다'; 
            setValidate({
                ...validate, 
                passwordCheck: false
            }); 
        } else {
            msg = '비밀번호가 일치합니다.'; 
            setValidate({
                ...validate, 
                passwordCheck: true
            });
        }

        setMessage({
            ...message, 
            passwordCheck: msg 
        }); 
    };

    const checkEmail = (email) => {
        fetch(`${API_BASE_URL}/check?email=${email}`)
        .then(res => res.json())
        .then(flag => {
            // console.log(flag);
            let msg; 
            if (flag) {
                msg = '중복된 이메일 입니다.';
                setValidate({
                    ...validate,
                    email: false
                })
            } else { 
                msg = '사용가능한 이메일 입니다.'; 
                setValidate({
                    ...validate, 
                    email: true
                })
            }
            setMessage({
                ...message,
                email: msg
            });
        });
    };


    // 이메일 onChange 검증 헨들러 
    const emailHandler = (e) => {
        const emailRegex = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;

        let msg;
        if (!e.target.value) {
            msg = '이메일은 필수값입니다!';
            setValidate({...validate, email: false});
        } else if (!emailRegex.test(e.target.value)) {
            msg = '이메일 형식이 아닙니다!';
            setValidate({...validate, email: false});
        } else {
            // 이메일은 중복확인 필요해서 fetch 날려야함 
            // 길어지므로 따로 함수로 빼서 적용
            checkEmail(e.target.value);
        }

        setMessage({
            ...message,
            email: msg
            });

        setUserValue({
            ...userValue,
            email: e.target.value
        });
    };

    // validate 모두 통과했는지 확인 
    const isValid = () => {
        // if (validate.username && validate.email && validate.password) {
        //     return true; 
        // }
        // => 이거 확인값이 너무 많아지면 불편. => 객체 반복문을 돌린다 
        // for ( in ) 문   
        for (let key in validate) {
            // let value = validate.key; // map 처럼 key 로 value 뽑아서 사용 
            // 근데 여기선 key 가 변수여서 '' String 처리되므로 이럴 땐 . 이아니라 [] 배열로 뽑아서 사용
            let value = validate[key]; 
            if (!value) {   // for 돌면서 value 가 하나라도 false 걸리면 => return false
                return false; 
            }
        };
        return true;
    };


    const submitHandler = e => {
        e.preventDefault(); //일단 먼저 막고 (바로 가는거)

        //validate 다 통과했는지 확인 하고 풀어주자 
        if (isValid()) {
            alert('모든 입력값이 정상입니다.');

            fetch(`${API_BASE_URL}/signup`, {
                method: 'POST',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify(userValue)
            })
            .then (res => {
                if (res.status === 200) {
                    alert('회원가입을 축하합니다.');
                    // 로그인 페이지로 리다이렉트 필요
                    window.location.href= '/login';
                } else {
                    alert('회원가입 실패. 다시 시도하세요.');
                }
            });
        } else {
            alert('올바르지 않은 입력값이 존재합니다.');
        }
    }


    return (
<Container component="main" maxWidth="xs" style={{ marginTop: "180px" }}>
    <form noValidate onSubmit={submitHandler}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography component="h1" variant="h5">
                    계정 생성
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField  // mui-material 기능 (input 태그)
                    autoComplete="fname"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="닉네임"
                    autoFocus
                    onChange={nameHandler}
                />
                <span style={
                        validate.username 
                        ? {color: 'green'}
                        : {color: 'red'}
                    }>{message.username}</span>
                
            </Grid>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="이메일 주소"
                    name="email"
                    autoComplete="email"
                    onChange={emailHandler}
                />
                  <span style={
                        validate.email 
                        ? {color: 'green'}
                        : {color: 'red'}
                    }>{message.email}</span>
                
            </Grid>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="패스워드"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={passwordHandler}
                />
                    <span style={
                        validate.password 
                        ? {color: 'green'}
                        : {color: 'red'}
                    }>{message.password}</span>
                
            </Grid>
           
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="passwordCheck"
                    label="패스워드 확인"
                    type="password"
                    id="passwordCheck"
                    autoComplete="check-password"
                    onChange={passwordCheckHandler}
                />
                    <span id='passwordCheckInfo' style={
                        validate.passwordCheck 
                        ? {color: 'green'}
                        : {color: 'red'}
                    }>{message.passwordCheck}</span>
            </Grid>



            <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" color="primary"  style={{marginBottom: '20px'}}>
                    계정 생성
                </Button>
            </Grid>
        </Grid>
        <Grid container justify="flex-end">
            <Grid item>
                <Link href="/login" variant="body2">
                    이미 계정이 있습니까? 로그인 하세요.
                </Link>
            </Grid>
        </Grid>
    </form>
</Container>
    )
}

export default Join