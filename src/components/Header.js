import { Grid, Typography } from "@mui/material";
import {Card, CardMedia }from "@mui/material";

export default function Header({logo, highScore}) {
    return (
        <Grid item xs={12} md={12} lg={12} xl={12}>
            <CardMedia src={logo} component="img" alt="logo" sx={{height:{xs:80, md:160}, width:{xs:160, md:320}, margin:'0 auto', marginTop:"1%"}} />
            <Typography variant="h4" sx={{textAlign:'center', fontWeight:'bolder', marginTop:'1%'}}>High Score: {highScore}</Typography>
        </Grid>
    );
    }