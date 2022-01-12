const express = require("express");
const app = express();

app.post("/post", (req, res) =>{
    console.log("Connected to React");
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
  });