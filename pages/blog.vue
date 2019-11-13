<template>
  <div id="blog">
    <div class="container">
      <div class="list">
        <div class="title">
          <nuxt-link to="/list/1">Is page speed a ranking factor? Yes, it always was.</nuxt-link>
        </div>
        <div class="time">2018-01-11T10:00:57.520Z</div>
        <div class="descripition">
          <p>It’s now official that Google is including page speed in their search algorithm. In this article I will explain why page speed is and always was an important ranking factor.</p>
        </div>
      </div>
      <div class="list">
        <div class="title">
          <nuxt-link to="/list/2">Is page speed a ranking factor? Yes, it always was.</nuxt-link>
        </div>
        <div class="time">2018-01-11T10:00:57.520Z</div>
        <div class="descripition">
          <p>It’s now official that Google is including page speed in their search algorithm. In this article I will explain why page speed is and always was an important ranking factor.</p>
        </div>
      </div>
      <div class="list">
        <div class="title">
          <nuxt-link to>Is page speed a ranking factor? Yes, it always was.</nuxt-link>
        </div>
        <div class="time">2018-01-11T10:00:57.520Z</div>
        <div class="descripition">
          <p>It’s now official that Google is including page speed in their search algorithm. In this article I will explain why page speed is and always was an important ranking factor.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* 文章 */
.list {
  width: 750px;
  height: 200px;
  box-shadow: 0 1px 1px #555;
  margin-top: 1rem;
  padding: 1rem;
}
.list:hover {
  box-shadow: 5px 5px 40px 5px #ccc;
}
.list div {
  margin-top: 1rem;
}
/* 标题 */
.title a {
  border-bottom: 1px solid black;
  font-size: 24px;
  font-weight: bolder;
  color: black;
}
/* 发布时间 */
.time {
  font-size: 0.8rem;
  color: #ccc;
}
.descripition {
  font-weight: 100;
  font-family: monospace;
}
</style>