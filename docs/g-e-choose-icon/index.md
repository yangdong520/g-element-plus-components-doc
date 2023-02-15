## 图标选择器
用户点击按钮，弹出框显示所有图标，点击图标可以复制图标组件标签。

### 基本用法
<div style="padding: 1em; margin: 1em; border: 1px solid #eee">
    <g-e-choose-icon title="选择标题" v-model:visible="visible" type="primary">
      选择图标
    </g-e-choose-icon>
</div>

### 代码示例
<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false)
</script>

- 图标插件依赖`@element-plus/icons-vue`
  ```shell
     pnpm install @element-plus/icons-vue
  ```
- 示例
  ```js
      <g-e-choose-icon title="选择图标" v-model:visible="visible" type="primary">选择图标</g-e-choose-icon>
      <script lang="ts" setup>
          import { ref } from 'vue';
      
          const visible = ref(false)
      </script>
  ```
