import { Grid, Typography } from "@mui/material";
import {Card, CardMedia }from "@mui/material";

export default function Header({logo}) {
    return (
        <Grid item xs={12} md={12} lg={12} xl={12}>

<CardMedia src={logo} component="img" alt="logo" sx={{height:160, width:320, margin:'0 auto', marginTop:"1%"}} />

        </Grid>
    );
    }