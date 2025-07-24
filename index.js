const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// 정적 파일 서빙 (html, js, css 등)
app.use(express.static(path.join(__dirname)));

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server is now running on port ${port}`);
});
