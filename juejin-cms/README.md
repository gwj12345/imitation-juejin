# juejin-cms

> 基于strapi的掘金网站cms系统

## 项目展示

![](/public/pic1.png)

![](/public/pic2.png)

![](/public/pic3.png)

## API地址

API列表地址：

https://www.apifox.cn/apidoc/shared-9dcac461-8bac-4097-be04-8621d6595a70/api-61735713

关系数据的返回：[参考](https://blog.csdn.net/m173net/article/details/121796800)

```javascript
GET /api/article-infos?populate=author.name,author.address
```

服务器部署与跨越访问配置

`\config\middlewares.js`

API访问地址：

http://win.gwj1314.cn:1337/

## 登录

管理员账号
邮箱：demo@qq.com
密码：m123456M

## 项目启动

node 版本 >= 16

```
npm install
npm run develop
```

### 参考资料

掘金小册《SSR 实战：官网开发指南》实战篇数据层 [CMS demo](https://github.com/czm1290433700/nextjs-cms)

为方便还原课程配置内容，.tmp及.cache等数据缓存信息一并提交，正常项目使用可在 .gitignore 中忽略该两项的变更





