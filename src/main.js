import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router/index';

import Bus from '@/Bus';
import Common from '@/common/common';
import DevData from '@/common/devData';
import Utils from '@/utils/index';
import mdParser from '@/utils/mdParser';

import '@/styles/main.scss';
import '@/styles/media.scss';

Vue.prototype.$Bus = Bus;
Vue.prototype.$Common = Common; // 全局变量
Vue.prototype.$Utils = Utils; // 通用 js 函数

// 引入博客和新闻的 md 文件
const blogFiles = require.context('@/docs/blog/', true, /\.md$/);
const blogs = [];
blogFiles.keys().forEach((key) => { // 将合法的 md 文件对象添加到数组中
  const blogItem = mdParser(blogFiles(key));
  if (blogItem != null) {
    blogs.push(blogItem);
  }
});
const newsFiles = require.context('@/docs/news/', true, /\.md$/);
const news = [];
newsFiles.keys().forEach((key) => {
  const newsItem = mdParser(newsFiles(key));
  if (newsItem != null) {
    news.push(newsItem);
  }
});
blogs.sort(Utils.getSortFun('desc', 'date')); // 根据 date 属性从新到旧排列数组
news.sort(Utils.getSortFun('desc', 'date'));
for (let i = 0; i < blogs.length; i++) { // 为排序好的数组中的对象添加 id 信息
  blogs[i].id = blogs.length - i;
}
for (let i = 0; i < news.length; i++) {
  news[i].id = news.length - i;
}
Vue.prototype.$Blogs = blogs;
Vue.prototype.$News = news;

// 引入开发者模式和数据
if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$DevMode = true;
  Vue.prototype.$DevData = DevData;
} else {
  Vue.prototype.$DevMode = false;
  Vue.prototype.$DevData = null;
}

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
