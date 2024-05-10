# 使用官方的 Node.js 基础镜像
FROM node:20 as build-stage

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 以便利用缓存
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build

# 使用轻量级的 Node.js 镜像作为运行时环境
FROM node:20-slim as production-stage

# 设置工作目录
WORKDIR /app

# 从构建阶段复制依赖
COPY --from=build-stage /app/node_modules ./node_modules

# 从构建阶段复制构建输出
COPY --from=build-stage /app /app

# 暴露端口
EXPOSE 3000

# 启动应用
CMD [ "node", "build/index.js" ]