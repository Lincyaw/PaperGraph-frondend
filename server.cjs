const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// 托管构建文件夹
app.use(express.static(path.join(__dirname, 'build')));

// 默认路由，如果请求路径没有匹配到任何静态文件，则返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
