import { defineConfig } from "vitepress";

// const i18n: ThemeConfig['i18n'] = {
// } TODO

export default defineConfig({
    title: 'XXX网站',
    description: '一些描述',
    cleanUrls: true,
    locales: {
        root: {
            label: '简体中文'
        },
        en: {
            label: 'English',
            link: '/en/'

            // other locale specific properties...
        }
    },
    themeConfig: {
        socialLinks: [{
          icon: "github", link: "https://github.com/"
        }],
        siteTitle: "XXX",
        logo: '/img/logo.svg',
        nav: [
            { text: '首页', link: '/' },
            { text: '文章',
                items: [
                    { text: '事件', link: '/article/event/' },
                    { text: '博客', link: '/article/blog/' },
                    { text: '科技', link: '/article/technology/' }
                ]
            },
            { text: '关于', link: '/about' }
        ],
        footer: {
            copyright: '版权 © ${new Date().getFullYear()} 此网站'
        }
    }
})
