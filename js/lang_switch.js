// 中英文 UI 切换脚本
(function() {
  // 中英文对照表
  const translations = {
    'Home': '首页',
    'Archives': '归档',
    'Tags': '标签',
    'Categories': '分类',
    'About': '关于',
    'Search': '搜索',
    'Follow Me': '关注我',
    'Recent Posts': '最新文章',
    'Categories': '分类',
    'Tags': '标签',
    'Archives': '归档',
    'Author': '作者',
    'Read More': '阅读更多',
    'Previous': '上一页',
    'Next': '下一页',
    'Table Of Contents': '目录',
    'Blog': '博客',
    'Post': '文章',
    'Page': '页面',
    'Comment': '评论',
    'Comments': '评论',
    'Share': '分享',
    'Updated': '更新于',
    'Created': '发表于',
    'Word Count': '字数统计',
    'Reading Time': '阅读时长',
    'Views': '阅读量',
    'Top': '返回顶部',
    'Newest Comments': '最新评论',
    'Website Info': '网站资讯',
    'Article Count': '文章数',
    'Site UV': '访客数',
    'Site PV': '访问量',
    'Last Push': '最后更新'
  };

  // 获取当前语言（默认中文）
  let currentLang = localStorage.getItem('siteLanguage') || 'zh';

  // 切换语言函数
  function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('siteLanguage', currentLang);
    translatePage();
    updateButton();
  }

  // 翻译页面
  function translatePage() {
    if (currentLang === 'en') {
      // 中文转英文
      Object.entries(translations).forEach(([en, zh]) => {
        replaceText(zh, en);
      });
    } else {
      // 英文转中文
      Object.entries(translations).forEach(([en, zh]) => {
        replaceText(en, zh);
      });
    }
  }

  // 替换文本
  function replaceText(from, to) {
    const elements = document.querySelectorAll('*:not(script):not(style):not(code):not(pre)');
    elements.forEach(el => {
      if (el.childNodes.length > 0) {
        el.childNodes.forEach(node => {
          if (node.nodeType === 3 && node.textContent.trim()) {
            node.textContent = node.textContent.replace(new RegExp(from, 'g'), to);
          }
        });
      }
    });
  }

  // 更新按钮文字
  function updateButton() {
    const btn = document.querySelector('#translateLink');
    if (btn) {
      btn.textContent = currentLang === 'zh' ? 'EN' : '中';
    }
  }

  // 等待页面加载完成
  document.addEventListener('DOMContentLoaded', function() {
    // 应用保存的语言设置
    if (currentLang === 'en') {
      translatePage();
    }
    updateButton();

    // 监听翻译按钮点击
    const translateBtn = document.querySelector('#translateLink');
    if (translateBtn) {
      translateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toggleLanguage();
      });
    }
  });
})();
