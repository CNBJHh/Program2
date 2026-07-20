<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61dafb?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-5.4-646cff?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Recharts-2.12-22b5bf" alt="Recharts">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

<h1 align="center">🏯 如意 Admin</h1>
<p align="center"><strong>如意国风科技蓝 · 玻璃拟态 · 粒子网络 · 3D 交互</strong></p>
<p align="center">AI 驱动的现代化后台管理系统 — 前后端分离，开箱即用的通用模板</p>

---

## ✨ 设计理念

以 **如意国风科技蓝** 为主题，融合 2025-2026 年最前沿的 UI 设计趋势：

| 技术 | 说明 |
|------|------|
| 🧊 **Glassmorphism** | 全站毛玻璃拟态 — `backdrop-filter` 模糊 + 半透明层叠，营造纵深层次感 |
| 🌌 **粒子网络背景** | Canvas 实时渲染 70+ 粒子 + 近距离连线，打造"活神经网络"科技氛围 |
| 🎯 **3D 卡片倾斜** | `perspective` + `rotateX/Y` 鼠标跟随，物理感卡片交互 |
| 💡 **光标聚光灯** | 径向渐变跟随鼠标，卡片表面动态高光 |
| ✨ **微交互动画** | shimmer 光泽扫过 / float 悬浮 / pulse-glow 脉冲 / stagger 错峰入场 |
| 🎨 **Design Tokens** | 70+ CSS 自定义属性，换主题只需改一个文件 |

---

## 🖥️ 预览

```
┌──────────────────────────────────────────────────────────────┐
│  🏯 如意 Admin · 智能管理平台          🔄 刷新  2026-07-14  │  ← 玻璃 Header
├────────────┬─────────────────────────────────────────────────┤
│ 📊 仪表盘   │                                                 │
│ 🖥️ 主机管理 │   ┌─────────┬─────────┬─────────┬─────────┐    │
│ 📈 监控指标 │   │ 主机总数 │ 正常运行 │ 告警主机 │ CPU使用 │    │  ← 3D 倾斜卡片
│ ⚠️ 告警中心 │   │  156 台 │  148 台 │   3 台  │  44.3%  │    │
│ 📋 日志审计 │   └─────────┴─────────┴─────────┴─────────┘    │
│ ⚙️ 系统设置 │                                                 │
│            │   ┌──────────────────┐ ┌──────────────────┐    │
│  祥云装饰   │   │  CPU 趋势 (面积) │ │ 内存分布 (柱状)  │    │  ← 玻璃图表面板
│            │   └──────────────────┘ └──────────────────┘    │
│            │   ┌──────────────────────────────────────────┐ │
│            │   │          最近告警记录 (表格)              │ │
│            │   └──────────────────────────────────────────┘ │
└────────────┴─────────────────────────────────────────────────┘
      ↑ 粒子网络背景 Canvas ↑
```

---

## 🚀 快速开始

```bash
# 1. 进入前端目录
cd RuyiGinReactAdmin/frontend

# 2. 安装依赖
npm install

# 3. 启动开发服务器 (自动打开浏览器)
npm run dev

# 4. 生产构建
npm run build
```

浏览器访问 **http://localhost:3000**

---

## 📁 项目结构

```
RuyiGinReactAdmin/
├── frontend/                     # 前端项目 (React + Vite)
│   ├── index.html                # 入口 HTML
│   ├── package.json              # 依赖配置
│   ├── vite.config.js            # Vite 配置
│   └── src/
│       ├── main.jsx              # React 挂载入口
│       ├── App.jsx               # 根组件 (布局 + 粒子背景)
│       │
│       ├── config/               # ⚙️ 全局配置
│       │   └── index.js          # 应用名/主题/布局/API 开关
│       │
│       ├── styles/               # 🎨 主题系统
│       │   ├── tokens.css        # Design Tokens (颜色/间距/圆角/阴影)
│       │   ├── reset.css         # CSS Reset
│       │   ├── glassmorphism.css # 玻璃拟态工具类
│       │   ├── animations.css    # 关键帧动画库
│       │   └── layout.css        # 布局系统 (定高Header+定宽Sidebar)
│       │
│       ├── core/                 # 🧩 框架核心 (零依赖复用)
│       │   ├── EventBus.js       # 发布-订阅事件总线
│       │   ├── Logger.js         # 分级日志系统
│       │   └── request.js        # HTTP 请求封装
│       │
│       ├── hooks/                # 🪝 通用 Hooks
│       │   ├── useTilt.js        # 3D 卡片倾斜
│       │   ├── useSpotlight.js   # 光标聚光灯
│       │   └── useClock.js       # 实时时钟
│       │
│       ├── components/           # 🧱 组件库
│       │   ├── ui/               # 原子组件
│       │   │   ├── GlassCard.jsx     # 玻璃拟态卡片
│       │   │   ├── TiltCard.jsx      # 3D 倾斜卡片
│       │   │   ├── SpotlightCard.jsx # 光标聚光灯卡片
│       │   │   ├── GlassButton.jsx   # 玻璃按钮
│       │   │   ├── Badge.jsx         # 状态标签
│       │   │   ├── ProgressBar.jsx   # 进度条
│       │   │   └── Skeleton.jsx      # 加载骨架屏
│       │   ├── layout/           # 布局组件
│       │   │   ├── AppLayout.jsx     # 主布局容器
│       │   │   ├── Header.jsx        # 顶部导航栏 (玻璃+金色底线)
│       │   │   └── Sidebar.jsx       # 左侧菜单 (玻璃+祥云装饰)
│       │   └── dashboard/        # 业务组件
│       │       ├── ParticleBg.jsx    # 粒子网络背景
│       │       ├── StatCard.jsx      # KPI 统计卡片
│       │       ├── CpuChart.jsx      # CPU 趋势图 (面积图)
│       │       ├── MemoryChart.jsx   # 内存分布图 (柱状图)
│       │       └── AlertTable.jsx    # 告警记录表格
│       │
│       ├── mock/                 # 📦 Mock 数据层
│       │   └── dashboard.js      # 仪表盘模拟数据
│       │
│       └── pages/                # 📄 页面
│           └── Dashboard.jsx     # 仪表盘首页
│
└── backend/                      # 后端项目 (Gin — 规划中)
```

---

## 🎨 主题定制

所有视觉属性集中在 [src/styles/tokens.css](frontend/src/styles/tokens.css)，修改 CSS 变量即可换肤：

```css
:root {
  /* 品牌色 — 改为你的主色 */
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;

  /* 玻璃拟态 — 调整透明度/模糊度 */
  --glass-bg: rgba(18, 25, 50, 0.45);
  --glass-blur: 18px;
  --glass-border: rgba(255, 255, 255, 0.08);

  /* 布局 — 调整尺寸 */
  --header-height: 64px;
  --sidebar-width: 252px;
}
```

在 [src/config/index.js](frontend/src/config/index.js) 中一键开关特效：

```js
theme: {
  mode: 'dark',           // 'dark' | 'light'
  glassmorphism: true,    // 玻璃拟态
  particles: true,        // 粒子背景
  animations: true,       // 微动画
},
api: {
  mockEnabled: true,      // true = Mock 数据, false = 真实 API
},
```

---

## 🔄 二次开发指南

本项目设计为**通用后台管理系统模板**，复制到新项目后只需三步：

### 第 1 步：修改配置

编辑 `src/config/index.js`，修改应用名称和主题偏好。

### 第 2 步：替换 Mock → 真实 API

Mock 数据层与真实 API 结构一致。切换时：

```js
// src/mock/dashboard.js (删除此文件)
// ↓ 替换为
// src/core/request.js 中调用真实 Gin 后端
import { api } from '../core/request'
export const fetchStats = () => api.get('/stats')
```

### 第 3 步：添加新页面

```jsx
// src/pages/HostManage.jsx
import { AppLayout } from '../components/layout'
export default function HostManage() { ... }

// 在 Sidebar.jsx 中添加菜单项即可
```

### 复用清单

| 目录 | 复用方式 |
|------|----------|
| `styles/` | 直接复制 → 改 `tokens.css` 中的品牌色 |
| `core/` | 零修改复用，框架无关 |
| `hooks/` | 零修改复用 |
| `components/ui/` | 零修改复用 |
| `components/layout/` | 改 `config/index.js` 中的布局参数 |
| `components/dashboard/` | 按需保留或替换为业务组件 |

---

## 🛠️ 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 框架 | React 18 | 函数组件 + Hooks |
| 构建 | Vite 5 | 极速 HMR |
| 图表 | Recharts 2 | 声明式 React 图表 |
| 图标 | Lucide React | 轻量开源图标集 |
| 样式 | CSS Custom Properties | Design Token 体系 |
| 特效 | Canvas API | 粒子网络背景 |
| 后端 | Gin (Go) | 规划中，接口已预留 |

---

## 🗺️ 路线图

- [x] Glassmorphism 玻璃拟态主题系统
- [x] Canvas 粒子网络动态背景
- [x] 3D 卡片倾斜 + 光标聚光灯
- [x] Design Token 体系 (70+ CSS 变量)
- [x] 组件库拆分 (ui / layout / dashboard)
- [x] EventBus + Logger + Request 核心框架
- [x] Mock 数据层 (与真实 API 结构一致)
- [x] 新增磁盘平均使用率监控卡片（布局由 5 列自适应调整为 6 列，且图标更语义化）
- [ ] Gin 后端 API 实现
- [ ] 亮色主题 (Light Mode)
- [ ] 响应式移动端适配
- [ ] 国际化 i18n
- [ ] 单元测试 + E2E 测试

---

## 🔧 本地修改记录

为了完善前端系统监控指标，本项目在前端页面进行了如下优化：
- **新增磁盘监控卡片**：在仪表盘中新增了“磁盘平均使用率”卡片，并调整 Mock 数据层提供 `avgDisk` 及其趋势数据。
- **图标语义化优化**：将原“内存平均使用率”卡片的图标更换为更符合语义的 `Database` 图标，将 `HardDrive` 图标应用于新增加的“磁盘平均使用率”卡片。
- **自适应 Grid 布局**：在 Loading 骨架屏以及正常渲染状态下，将统计卡片的网格布局由 5 列调整为 6 列，卡片在顶部均匀排布。


---

## 📄 License

MIT © 2026

---

<p align="center">
  <sub>Built with ❤️ using React + Vite + Recharts</sub>
</p>
