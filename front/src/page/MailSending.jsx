import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import image from "../images/plane.png"

export default function MailSending() {
  return (
    <Grid container justifyContent='center' alignItems='center' height={window.innerHeight}>
      <Card sx={{ width: 400 , height:350}}>
        <Grid container justifyContent='center' alignItems='center' sx={{ width: 400 , height:350}}>
          <Grid item>
            <CardMedia
              sx={{ height: 100, width: 100 }}
              image={image}
              title="green iguana"
            />
          </Grid>
          <Grid item>
            <CardContent>
              <Typography align="center" gutterBottom variant="h5" component="div">
                メールを送信しました
              </Typography>
              <Typography align="center" variant="body2" color="text.secondary">
                メールアドレス宛にメッセージを送信しました。<br></br>メールより認証を行なってください
              </Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <Link href="/user/login" variant="body2">{"ログインする"}</Link>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}