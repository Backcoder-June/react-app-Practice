import React from 'react';
import {AppBar, Toolbar, Grid, Typography, Button} from "@mui/material";

const Header = () => {
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
                    <Typography variant="h6">오늘의 할일</Typography>
                    
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