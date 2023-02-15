## 快速开始

### 版本
`g-element-plus-components`目前还处于快速开发迭代中。

### 安装
```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install g-element-plus-components --save

# Yarn
$ yarn add g-element-plus-components

# pnpm
$ pnpm install g-element-plus-components
```

### 用法
- 全局引入
  - 在`main.ts`中全局引入
    ```js
      import gUI from 'g-element-plus-components';
      import 'g-element-plus-components/style.css';
    
      const app = createApp(App);
      app.use(ElementPlus).use(gUI)
      app.mount('#app')
    ```
    
- 按需引入
  - 在`main.ts`中单个引入即可
    ```js
      import GChooseArea from 'g-element-plus-components/choose-area'
      import 'g-element-plus-components/choose-area/style.css'
    
      const app = createApp(App);
      app.use(ElementPlus).use(GChooseArea)
      app.mount('#app')
    ```
