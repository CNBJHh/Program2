# 如意 Admin

一个基于 React + Vite 的现代化后台管理系统前端模板，强调“国风科技蓝”视觉语言、玻璃拟态界面和高交互体验，适合作为中后台产品的展示型原型或二次开发起点。

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61dafb?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.4-646cff?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Recharts-2.12-22b5bf" alt="Recharts" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

<p align="center">
  <a href="https://github.com/CNBJHh/Program2">GitHub 仓库</a> ·
  <a href="http://localhost:3000">本地预览</a>
</p>

---

## 项目简介

本项目以“如意国风科技蓝”为视觉主题，融合了以下几个典型特点：

- 玻璃拟态（Glassmorphism）界面风格
- 粒子网络背景与动态视觉效果
- 3D 卡片倾斜与光标聚光灯互动
- 仪表盘、统计卡片、趋势图表与告警列表等常见中后台内容
- 可扩展为真实后端接口接入的管理系统模板

它适用于你想快速搭建一个“看起来高级、结构清晰、后续可继续扩展”的后台管理系统原型。

---

## 功能特点

### 1. 视觉体验
- 深色主题下的玻璃拟态布局
- 统一的 Design Token 体系
- 细腻的微交互动画与动效反馈

### 2. 页面内容
- 控制台仪表盘展示
- CPU、内存、磁盘等监控数据卡片
- 柱状图、面积图和告警表格
- 侧边栏导航与顶部布局结构

### 3. 工程化结构
- React 组件拆分清晰
- Vite 提供快速开发与热更新
- 样式、状态、数据层和页面结构相对独立

---

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 前端框架 | React 18 |
| 构建工具 | Vite 5 |
| 图表库 | Recharts |
| 图标库 | Lucide React |
| 样式方案 | CSS Variables + CSS Modules 风格的组件样式 |
| 数据模拟 | Mock 数据层 |
| 目标后端 | Gin（Go）接口预留 |

---

## 快速开始

### 安装依赖

```bash
cd RuyiGinReactAdmin-main/frontend
npm install
```

### 启动开发服务器

```bash
npm run dev -- --host 0.0.0.0
```

启动后访问：

- http://localhost:3000

### 构建生产版本

```bash
npm run build
```

---

## 项目结构

```text
RuyiGinReactAdmin-main/
├── README.md
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── components/
│       │   ├── dashboard/
│       │   ├── layout/
│       │   └── ui/
│       ├── config/
│       ├── core/
│       ├── hooks/
│       ├── mock/
│       ├── pages/
│       └── styles/
```

---

## 主题与样式定制

样式相关变量集中在 [frontend/src/styles/tokens.css](frontend/src/styles/tokens.css)，你可以轻松调整主题色、玻璃透明度、边框、间距和圆角。

配置项可在 [frontend/src/config/index.js](frontend/src/config/index.js) 中查看，包含主题模式、动画开关和数据源配置。

---

## 二次开发建议

如果你想把它改成自己的产品，可以按以下顺序进行：

1. 修改主题配置，替换成自己的品牌色和视觉风格。
2. 替换 Mock 数据层，连上真实接口。
3. 在页面和组件目录中继续扩展业务模块。
4. 将现有布局组件作为基础模板，快速搭建新的管理页面。

---

## 近期更新

本项目已经包含以下内容：

- 新增仪表盘监控卡片
- 增加磁盘平均使用率展示
- 优化图标语义与网格布局
- 提供可复用的布局与 UI 组件体系

---

## 未来规划

- 接入真实 Gin 后端接口
- 增加亮色主题支持
- 完善移动端响应式体验
- 增加更多业务页面与权限管理能力

---

## License

MIT © 2026

---

<p align="center">
  <sub>Built with ❤️ using React + Vite + Recharts</sub>
</p>
