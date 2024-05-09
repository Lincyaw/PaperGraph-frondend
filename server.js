// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// 托管静态文件
app.use(express.static(path.join(__dirname, 'build/client')));
app.use(express.static(path.join(__dirname, 'build/prerendered')));

// 默认路由，如果请求路径没有匹配到任何静态文件，则返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/prerendered', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
