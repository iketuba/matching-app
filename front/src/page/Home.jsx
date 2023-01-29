import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import db from "../firebase.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postData = collection(db, "post");
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

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
            to="/newpost"
            sx={{ display: "flex", width: "15%", margin: "0 auto" }}
          >
            <p>新規投稿作成</p>
          </Button>
        </Box>
      </header>

      <body>
        {posts.map((post) => (
          <div key={post.id}>
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
              <p>タイトル: {post.title}</p>
              <p>説明: {post.description}</p>
              <p>開発言語: {post.lang}</p>
              <p>募集内容: {post.content}</p>
              <p>SNS URL: {post.sns}</p>
            </Box>
          </div>
        ))}
      </body>
    </div>
  );
}

export default Home;
