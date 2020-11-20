### 项目结构

```
├── config                  // webpack配置文档，除非需要更改webpack配置才需改动这里
│   ├── lib                         // webpack工具库，仅供webpack使用 
│   ├── common.confi.js             // webpack通用配置文件 
│   ├── development.config.js       // webpack开发环境配置文件
│   ├── index.js                    // webpack入口文件 
│   ├── production.cofnig.js        // webpack生产环境配置文件
├── src                    // 所有业务代码都在此文件夹内编写
│   ├── assets                      // 静态资源
│   ├── components                  // 全局公共组件 
│   ├── configs                     // 全局公共配置
│   ├── pages                       // 存放项目中的页面文件
│   ├── routes                      // 路由文件
│   ├── store                       // rematch配置文件
│   ├── styles                      // 全局统一样式文件
│   ├── templates                   // index.html
│   ├── utils                       // 全局公共工具方法
│   ├── index.js                    // 该react项目入口文件
├── package.json  
├── README.md
```
