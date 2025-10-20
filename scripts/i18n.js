(function () {
  const translations = {
    zh: {
      'nav.brand': '黄明俊',
      'nav.about': '关于',
      'nav.timeline': '经历',
      'nav.achievements': '成果',
      'nav.contact': '联系',
      'hero.eyebrow': '全栈开发工程师',
      'hero.title': '你好，我是黄明俊',
      'hero.subtitle': '专注构建稳定、可维护的 Web 应用，拥有原生 Java Web 框架自研与在线考试系统实践经验。',
      'hero.ctaPrimary': '立即联系',
      'hero.ctaSecondary': '查看项目',
      'hero.badgeLabel': '技术关键词',
      'about.title': '关于黄明俊',
      'about.subtitle': '全栈开发工程师',
      'about.summary': '<p>我是一名注重工程质量的全栈开发工程师，擅长以 Java 生态构建稳健的后端服务，也能通过现代前端技术打造友好易用的用户界面。曾独立自研模拟依赖注入与面向切面编程框架，为原生 Servlet 项目提供模块化与横切关注点治理能力。</p><p>对于系统架构、代码可维护性与交付效率保持持续关注，并乐于在实践中探索自动化测试、性能调优与 DevOps 工具链。</p>',
      'about.skills.backend': '熟悉 Java、Servlet、JDBC 等后端技术栈，具备自研框架能力，能够独立构建高内聚、低耦合的业务模块。',
      'about.skills.frontend': '掌握 HTML5、CSS3、现代 JavaScript，关注响应式布局与可访问性，能快速实现高质量交互。',
      'about.skills.engineering': '倡导模块化设计、持续集成与代码可维护性，乐于使用工程化工具优化团队协作流程。',
      'timeline.title': '专业经历',
      'timeline.subtitle': '持续探索全栈解决方案',
      'timeline.forwhat.time': '2024 年',
      'timeline.forwhat.desc': '原生 Servlet 构建问答论坛，自研模拟 DI/AOP 框架，实现灵活的业务扩展。',
      'timeline.forwhat.link': '查看代码',
      'timeline.exam.time': '2023 年',
      'timeline.exam.desc': '搭建在线考试平台，覆盖题库管理、考试监控与实时评分等完整流程。',
      'timeline.exam.link': '了解更多',
      'achievements.title': '项目成果与证书',
      'achievements.subtitle': '项目沉淀与专业认证',
      'achievements.forwhat.desc': '构建从账号体系到问答互动的完整站点，并引入自研框架提升可维护性。',
      'achievements.forwhat.cta': '查看 GitHub',
      'achievements.contact': '预约演示',
      'achievements.exam.desc': '提供题库管理、考试监考、实时评分等功能，支持多角色协作。',
      'achievements.exam.cta': '项目仓库',
      'achievements.cert.title': '专业认证',
      'achievements.cert.desc': '获得计算机等级考试、后端开发训练营等权威证书，持续精进专业能力。',
      'achievements.cert.cta': '查看证书',
      'contact.title': '联系我',
      'contact.subtitle': '欢迎通过以下方式与我沟通合作机会。',
      'contact.location': '中国 · 广州',
      'contact.form.name': '姓名',
      'contact.form.nameError': '请填写姓名。',
      'contact.form.email': '邮箱',
      'contact.form.emailError': '请输入有效邮箱。',
      'contact.form.message': '留言',
      'contact.form.messageError': '请填写留言内容。',
      'contact.form.submit': '发送',
      'contact.form.success': '感谢留言！我会尽快回复。',
      'footer.owner': '黄明俊',
      'footer.rights': '保留所有权利。',
      'footer.backToTop': '返回顶部',
      'modal.certificate.title': '专业证书',
      'modal.certificate.body': '完成多项在线课程与企业级培训，涵盖高并发 Java Web 开发、数据库调优与前端工程化实践。',
      'modal.certificate.link': '查看认证详情',
    },
    en: {
      'nav.brand': 'Mingjun Huang',
      'nav.about': 'About',
      'nav.timeline': 'Timeline',
      'nav.achievements': 'Work',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Full-stack Engineer',
      'hero.title': "Hi, I'm Mingjun Huang",
      'hero.subtitle': 'Full-stack engineer focused on building reliable, maintainable web apps with hands-on experience in custom Java frameworks and online examination platforms.',
      'hero.ctaPrimary': 'Contact Now',
      'hero.ctaSecondary': 'See Projects',
      'hero.badgeLabel': 'Tech Highlights',
      'about.title': 'About Mingjun Huang',
      'about.subtitle': 'Full-stack Engineer',
      'about.summary': '<p>I build end-to-end web experiences with a focus on engineering quality. On the backend I leverage the Java ecosystem and have authored a custom dependency injection and AOP framework on top of raw Servlets. On the frontend I craft accessible, user-friendly interfaces with modern HTML, CSS, and JavaScript.</p><p>I constantly refine architecture, maintainability, and delivery velocity through automation, testing, and DevOps tooling.</p>',
      'about.skills.backend': 'Experienced with Java, Servlets, and JDBC. Comfortable designing modular backend services and extending core frameworks when needed.',
      'about.skills.frontend': 'Proficient in HTML5, CSS3, and modern JavaScript with an emphasis on responsive layouts and accessibility.',
      'about.skills.engineering': 'Advocate for modular design, CI pipelines, and maintainable code. Enjoy optimizing collaboration through engineering tooling.',
      'timeline.title': 'Professional Timeline',
      'timeline.subtitle': 'Always exploring full-stack solutions',
      'timeline.forwhat.time': '2024',
      'timeline.forwhat.desc': 'Built a Q&A forum with raw Servlets plus a custom DI/AOP layer for modular business logic.',
      'timeline.forwhat.link': 'View Repo',
      'timeline.exam.time': '2023',
      'timeline.exam.desc': 'Delivered an online examination system covering question banks, proctoring, and real-time scoring.',
      'timeline.exam.link': 'Project Details',
      'achievements.title': 'Projects & Certifications',
      'achievements.subtitle': 'Shipped work and professional milestones',
      'achievements.forwhat.desc': 'Implemented a production-ready forum from authentication to interactive Q&A with a self-built framework.',
      'achievements.forwhat.cta': 'View GitHub',
      'achievements.contact': 'Book a Demo',
      'achievements.exam.desc': 'Supports roles for admins, teachers, and students with complete exam lifecycles.',
      'achievements.exam.cta': 'Repository',
      'achievements.cert.title': 'Certifications',
      'achievements.cert.desc': 'Earned certifications in computer science and backend engineering bootcamps to deepen expertise.',
      'achievements.cert.cta': 'View Certificate',
      'contact.title': 'Contact',
      'contact.subtitle': 'Let’s talk about collaboration or new opportunities.',
      'contact.location': 'Guangzhou, China',
      'contact.form.name': 'Name',
      'contact.form.nameError': 'Please provide your name.',
      'contact.form.email': 'Email',
      'contact.form.emailError': 'Enter a valid email address.',
      'contact.form.message': 'Message',
      'contact.form.messageError': 'Leave a short message.',
      'contact.form.submit': 'Send',
      'contact.form.success': 'Thank you! I will reply soon.',
      'footer.owner': 'Mingjun Huang',
      'footer.rights': 'All rights reserved.',
      'footer.backToTop': 'Back to top',
      'modal.certificate.title': 'Professional Certificates',
      'modal.certificate.body': 'Completed multiple courses and enterprise training covering high-concurrency Java, database optimization, and front-end engineering.',
      'modal.certificate.link': 'Open Credentials',
    },
  };

  const defaultLang = localStorage.getItem('hmj-lang') || document.documentElement.lang || 'zh';
  let currentLang = ['zh', 'en'].includes(defaultLang) ? defaultLang : 'zh';

  function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.dataset.i18n;
      const translation = translations[lang][key];
      if (translation !== undefined) {
        if (/<[a-z][\s\S]*>/i.test(translation)) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('hmj-lang', lang);
  }

  function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    applyTranslations(currentLang);
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleLanguage);
    }
  });
})();
