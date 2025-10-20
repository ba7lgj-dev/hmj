# 黄明俊个人作品集网站实现方案

## 整体信息架构
- 单页应用（SPA）布局，顶部固定导航，锚点跳转至 "关于"、"项目"、"联系" 等模块。
- 使用语义化 HTML5 元素（`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`）提升可访问性。
- CSS 采用 BEM 命名约定与 CSS 自定义属性，支持深浅色主题切换。
- JavaScript 划分为模块：`theme.js`、`i18n.js`、`timeline.js`、`contact.js` 等，保持职责单一。

## 1. “关于”模块（About Section）

### 1.1 个人简介与技能展示
- **内容要点**：
  - 标题：`<h2>` "关于黄明俊 / About Mingjun Huang"。
  - 简介段落突出全栈能力、熟悉的后端（Java/Servlet/JDBC）、前端（HTML5/CSS3/JavaScript/响应式）与工程实践（自研 DI/AOP 框架）。
  - 提供中英文两套文案，通过 `data-i18n="about.summary"` 等属性在前端动态切换。
- **可视化技能组件**：
  - 使用 `skills-grid` 网格布局，卡片内展示图标（SVG/Font Awesome）与技能名称、熟练度描述。
  - 后端、前端、工程理念三类卡片，可通过 `data-category` 控制筛选或动画。
  - 备选：水平进度条（`<div class="progress">`）结合 `aria-valuenow` 增强可访问性。
- **HTML 结构示例**：
  ```html
  <section id="about" class="section section--about">
    <div class="section__header">
      <h2 data-i18n="about.title">关于黄明俊</h2>
      <p class="section__subtitle" data-i18n="about.subtitle">全栈开发工程师</p>
    </div>
    <article class="about__intro" data-i18n="about.summary">
      <!-- 文案由 i18n.js 注入 -->
    </article>
    <div class="skills-grid">
      <div class="skill-card" data-category="backend">
        <svg class="skill-card__icon">...</svg>
        <h3>Java &amp; Servlet</h3>
        <p data-i18n="about.skills.backend"></p>
      </div>
      <!-- 更多技能卡片 -->
    </div>
  </section>
  ```
- **CSS 片段**：
  ```css
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--space-lg);
  }
  .skill-card {
    background: var(--surface);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    box-shadow: var(--shadow-sm);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .skill-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
  ```

### 1.2 专业经历时间线
- 使用垂直时间轴：左侧年份/时间段，右侧项目描述。
- 每个 `timeline-item` 包含标题、时间、技术要点、成果说明，以及可选链接（GitHub / Demo）。
- 结合 AOS.js 或 Intersection Observer 在滚动到视图时触发淡入动画。
- **HTML 结构示例**：
  ```html
  <section class="section section--timeline" aria-labelledby="timeline-title">
    <h2 id="timeline-title" data-i18n="timeline.title">专业经历</h2>
    <ol class="timeline">
      <li class="timeline__item" data-aos="fade-up">
        <div class="timeline__dot"></div>
        <div class="timeline__content">
          <h3>ForWhat 问答论坛</h3>
          <span class="timeline__time" data-i18n="timeline.forwhat.time">2024 年</span>
          <p data-i18n="timeline.forwhat.desc">原生 Servlet 实现，内置模拟 DI/AOP 框架。</p>
          <a href="https://github.com/..." class="link" target="_blank" rel="noopener">GitHub</a>
        </div>
      </li>
      <li class="timeline__item" data-aos="fade-up" data-aos-delay="150">
        <div class="timeline__dot"></div>
        <div class="timeline__content">
          <h3>Examination System</h3>
          <span class="timeline__time" data-i18n="timeline.exam.time">2023 年</span>
          <p data-i18n="timeline.exam.desc">在线考试平台，支持题库、实时评分。</p>
        </div>
      </li>
    </ol>
  </section>
  ```
- CSS 建议：使用 `position: relative` + `::before` 绘制轴线，移动端切换为单列布局。

### 1.3 个人成就与证书展示
- 设计 `achievements` 栅格，卡片包含：缩略图/图标、成就说明、CTA 按钮（查看项目 / 访问 GitHub / 查看证书）。
- 支持 `data-lightbox` 或 Modal 弹窗显示大图/证书详情。
- **HTML 结构示例**：
  ```html
  <section class="section section--achievements" id="achievements">
    <h2 data-i18n="achievements.title">项目成果与证书</h2>
    <div class="card-grid">
      <article class="card">
        <img src="assets/forwhat-thumb.jpg" alt="ForWhat 问答论坛" />
        <div class="card__body">
          <h3>ForWhat 问答论坛</h3>
          <p data-i18n="achievements.forwhat.desc"></p>
          <a href="https://github.com/..." class="button button--ghost" target="_blank">GitHub</a>
        </div>
      </article>
      <article class="card">
        <img src="assets/certificate.jpg" alt="计算机等级证书" />
        <div class="card__body">
          <h3 data-i18n="achievements.cert.title">计算机等级证书</h3>
          <button class="button" data-modal-target="#certificate-modal" data-i18n="achievements.cert.cta">查看详情</button>
        </div>
      </article>
    </div>
  </section>
  ```

## 2. “联系”模块（Contact Section）

### 2.1 联系表单
- 表单字段：姓名(`name`)、邮箱(`email`)、留言(`message`)；使用 HTML5 校验与自定义提示。
- 提交后调用 `fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })`，在无后端时模拟成功响应，显示 Snackbar/Alert。
- **HTML**：
  ```html
  <section id="contact" class="section section--contact">
    <h2 data-i18n="contact.title">联系我</h2>
    <form class="contact-form" novalidate>
      <label>
        <span data-i18n="contact.form.name">姓名</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span data-i18n="contact.form.email">邮箱</span>
        <input type="email" name="email" required />
        <span class="input-hint" data-i18n="contact.form.emailHint">请输入有效邮箱</span>
      </label>
      <label class="contact-form__full">
        <span data-i18n="contact.form.message">留言</span>
        <textarea name="message" rows="5" required></textarea>
      </label>
      <button type="submit" class="button" data-i18n="contact.form.submit">发送</button>
      <p class="form-feedback" hidden data-i18n="contact.form.success">感谢留言！我会尽快回复。</p>
    </form>
  </section>
  ```
- **JavaScript（`contact.js`）**：
  ```js
  const form = document.querySelector('.contact-form');
  const feedback = form.querySelector('.form-feedback');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('is-invalid');
      return;
    }
    const formData = Object.fromEntries(new FormData(form));
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      feedback.hidden = false;
      form.reset();
    } catch (error) {
      console.error(error);
    }
  });
  ```

### 2.2 社交媒体链接
- 使用 `social-links` 列表，SVG 图标与文本组合，`aria-label` 提供无障碍说明。
- 加入 hover 动效（颜色变化、轻微放大）。
- **HTML**：
  ```html
  <ul class="social-links">
    <li><a href="https://github.com/mingjun" aria-label="GitHub"><svg>...</svg></a></li>
    <li><a href="https://www.linkedin.com/in/mingjun" aria-label="LinkedIn"><svg>...</svg></a></li>
    <li><a href="mailto:hello@mingjun.dev" aria-label="Email"><svg>...</svg></a></li>
  </ul>
  ```

### 2.3 地图集成
- 若使用交互式地图：加载 Google Maps/高德脚本，容器 `#map` 设置固定高度，并在 `contact.js` 中初始化。
- 隐私友好方案：提供静态地图图片 + 文本说明，例如：
  ```html
  <figure class="location">
    <img src="assets/guangzhou-map.png" alt="中国·广州" loading="lazy" />
    <figcaption data-i18n="contact.location.caption">中国 · 广州</figcaption>
  </figure>
  ```

## 3. 项目整体优化建议

### 3.1 页面过渡动画
- 全局使用 `scroll-behavior: smooth;`，模块进入时通过 AOS.js（或自定义 `IntersectionObserver` + `classList.add('is-visible')`）触发淡入、滑动动画。
- 路由切换（若使用 SPA 框架）可引入 `framer-motion` 或 CSS `transition`。

### 3.2 移动端响应式优化
- 设置 `meta viewport`，使用 `clamp()` 定义排版字号。
- 导航栏移动端采用汉堡菜单；时间轴在 `<768px` 切换为单列卡片式；表单元素使用 `min-height` 与 `touch-action` 优化触控体验。
- 使用 CSS Grid/Flexbox 自适应布局，确保图片与文字比例合理。

### 3.3 深色/浅色模式切换
- 使用 CSS 自定义属性：
  ```css
  :root {
    --color-bg: #ffffff;
    --color-text: #1f2933;
    --surface: #f7f9fc;
  }
  :root[data-theme='dark'] {
    --color-bg: #0f172a;
    --color-text: #e2e8f0;
    --surface: #1e293b;
  }
  body {
    background: var(--color-bg);
    color: var(--color-text);
  }
  ```
- 在 `theme.js` 中：
  ```js
  const toggle = document.querySelector('#theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = defaultTheme;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
  ```

### 3.4 多语言支持（中/英）
- 建立 `i18n/zh.json` 与 `i18n/en.json`，键值对应页面文本。
- `i18n.js` 实现：
  ```js
  const languageToggle = document.querySelector('#lang-toggle');
  const translations = {};

  async function loadLanguage(lang) {
    if (!translations[lang]) {
      const response = await fetch(`/i18n/${lang}.json`);
      translations[lang] = await response.json();
    }
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = translations[lang][key] || key;
    });
    localStorage.setItem('lang', lang);
  }

  languageToggle.addEventListener('change', (event) => {
    loadLanguage(event.target.value);
  });

  loadLanguage(localStorage.getItem('lang') || 'zh');
  ```
- 确保按钮、表单标签、CTA 等文本均通过 `data-i18n` 控制，便于扩展更多语言。

## 前端代码结构建议
```
project-root/
├─ index.html
├─ assets/
│  ├─ images/
│  └─ icons/
├─ styles/
│  ├─ base.css          # 重置、排版、CSS 变量
│  ├─ layout.css        # 布局与响应式规则
│  ├─ components.css    # 组件（卡片、时间轴、按钮等）
│  └─ themes.css        # 深浅色主题
├─ scripts/
│  ├─ main.js           # 入口，初始化动画、事件
│  ├─ theme.js          # 主题切换逻辑
│  ├─ i18n.js           # 多语言加载
│  ├─ timeline.js       # 时间轴动画逻辑
│  └─ contact.js        # 表单提交、地图初始化
├─ i18n/
│  ├─ zh.json
│  └─ en.json
└─ components/
   ├─ header.html
   ├─ about.html
   ├─ contact.html
   └─ footer.html
```

- 使用构建工具（如 Vite）整合模块与资源；开发环境启用模块热替换（HMR）。
- 代码质量：引入 ESLint + Stylelint + Prettier，保证风格一致。
- 可加入单元测试（Jest）或端到端测试（Playwright）验证交互逻辑。

此方案可直接作为前端实现蓝图，同时保留后端接口对接扩展空间。
