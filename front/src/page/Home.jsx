import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <Box
          sx={{
            border: 5,
            borderColor: "#a9ceec",
            backgroundColor: "#a9ceec",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <p style={{ textAlign: "center", color: "black", fontSize: "30px" }}>
            チーム開発マッチング掲示板
          </p>
          <Button
            variant="contained"
            component={Link}
            to="/profile"
            sx={{ display: "flex"}}
            size="small"
          >
            <p>新規投稿作成</p>
          </Button>
        </Box>
      </header>

      <body>
        <br></br>
        <Box
          sx={{
            border: 5,
            borderColor: "primary.main",
            borderRadius: 2,
            width: "80%",
            margin: "0 auto",
          }}
        >
          <p>タイトル: タイトル</p>
          <p>説明: 説明</p>
          <p>使用言語: Python</p>
          <p>時期: 時期</p>
          <p>募集内容: 募集内容</p>
          <p>SNS URL: </p>
        </Box>
      </body>
    </div>
  );
}

export default Home;
