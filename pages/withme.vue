<template>
  <div id="withme">
    <div class="wrap">
      <h2>关于我</h2>
      <h4>基本信息</h4>
      <ul>
        <li>姓名：余彪</li>
        <li>
          邮箱:
          <a href="#">yiqixingyb@yeah.net</a>
        </li>
        <li>
          QQ:
          <a href="#">1023942883</a>
        </li>
        <li>教育经历: 武汉晴川学院，本科 软件工程(2016-2020)</li>
        <li>兴趣：旅游 前端 音乐 电子书</li>
      </ul>
      <h4>社交圈</h4>
      <ul>
        <li>
          <a href="https://www.yqxshiki.com/" target="_blank">个人博客</a>
        </li>
        <li>
          <a href="https://github.com/yqxshiki" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://juejin.im/user/5d39bb2b5188254bc1109e5b" target="_blank">掘金</a>
        </li>
        <li>
          <a href="https://blog.csdn.net/weixin_44233842" target="_blank">CSDN</a>
        </li>
      </ul>
      <h4>个人作品</h4>
      <p>Vue 后台管理系统：</p>
      <p>
        <a href="https://yqxshiki.gitee.io/yqx-vue-admin-webapp/#/login">vue-admin-webapp</a>
      </p>
      <p>Vue 仿网易云:</p>
      <p>
        <a href="http://49.232.96.54:3030/">vue-music</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "sidebar",
  transition: "withme"
};
</script>
<style scoped>
#withme {
  width: 100%;
  background: #eee;
  margin-top: -1rem;
}
.wrap {
  margin-left: 2rem;
}
a {
  color: #0593d3;
  border-bottom: 1px solid #0593d3;
}
ul li {
  list-style: circle;
  padding: 1rem;
}
h2 {
  text-align: center;
  word-break: break-word;
  font-weight: 400;
}
h4 {
  border-bottom: 1px dotted #eee;
}
p {
  padding-top: 1rem;
  padding-left: 1rem;
}
</style>
