# 快速开始

#### 安装组件库
```bash
npm i test-component-zl
```


#### 引用组件库
> 在main.js 中引用组件库

```javascript
// 全部引入
import 'test-component-zl/dist/css/index.css';
import TCOM from 'test-component-zl';
Vue.use(TCOM);

// 按需引用
import 'test-component-zl/dist/css/demo.css';
import { Demo } from 'test-component-zl';
Vue.use(Demo);

```