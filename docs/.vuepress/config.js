// 配置
export default {
    // 网站标题
    title: '基于element-plus二次封装组件',
    // 部署的基础路径
    base: '/',
    // 配置网站html的head标签
    head: [],
    // 主题配置
    themeConfig: {
        navbar: [
            {
                text: '首页',
                link: '/'
            }
        ],
        sidebar: [
            // {
            //     text: '介绍',
            //     link: '/intro/',
            // },
            // { text: '快速开始', link: '/getting-started/' },
            // {
            //
            //     children: [
            //
            //         { text: '图标选择器', link: '/g-e-choose-icon/' },
            //         // { text: '表单', link: '/g-e-form/' },
            //         // { text: '弹框表单', link: '/g-e-modal-form/' },
            //         // { text: '表格', link: '/g-e-table/' },
            //     ]
            // }

        ],
        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdatedText: "最近更新时间"
    },
    markdown: {
        lineNumbers: true
    },
    lastUpdated: true,
}
