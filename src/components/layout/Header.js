import React from 'react';
import {AppBar, Toolbar, Grid, Typography, Button} from "@mui/material";
import { Link } from 'react-router-dom';
import '../layout/Header.css';
import { isLogin, getUserName } from '../util/login-util';

const Header = () => {

    const logoutHandler = e => {
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('LOGIN_USERNAME');
        window.location.href = '/login';
    }



  return (
<AppBar position="fixed" style={{background: 'orange'}}>
    <Toolbar>
        <Grid justify="space-between" container>
            <Grid item flex={9}>
                <div style={
                    {
                        display:'flex',
                        alignItems: 'center'
                    }
                }>
                    <Typography variant="h6">{isLogin() ? `${getUserName()}님`
                     : 'Guest님'}의 할일</Typography>
                    
                </div>
            </Grid>

            <Grid item>
                <div className='headerbtn-group'>
                {/* a 링크로 사용하면 => 화면 재요청되서 깜빡임 
                => react-dom 에 구현되있는 Link 태그를 이용 ( 저장된걸 이용 하는 개념 ) */}
                {/* <a href='/login'>로그인</a>
                <a href='/join'>회원가입</a> */}
                {isLogin() ?
                (
                    <Button className='logout-btn' onClick={logoutHandler}>로그아웃</Button>
                )
                
                : 
                (
                <>
                <Link to='/login'>로그인</Link>
                <Link to='/join'>회원가입</Link>
                </>
                )
                }




                </div>
            </Grid>



            <Grid item>

                
            </Grid>
        </Grid>
    </Toolbar>
</AppBar>
  )
}

export default Header