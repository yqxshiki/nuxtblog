<template>
  <div>
    <footer>
      <div class="keep">
        <!-- 这里是底部栏，自己添加想要的信息 -->
        <span>关于yqxshiki个人网站</span>
        <a href="http://beian.miit.gov.cn/" target="_blank">
          <span>鄂ICP备19027794号</span>
        </a>
        <div style="width:300px;margin:0 auto; padding:20px 0;">
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011602000714"
            style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
          >
            <img src="../static/beian.png" style="float:left;" />
            <p
              style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"
            >鄂公网安备 42011602000714号</p>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
/* 底部 */
footer {
  width: 100%;
  background: rgb(53, 77, 77);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
footer::before {
  background: #000
    linear-gradient(
      to left,
      #4cd964,
      #5ac8fa,
      #007aff,
      #34aadc,
      #5856d6,
      #ff2d55
    );
  content: "";
  height: 8px;
  position: absolute;
  top: -2%;
  width: 100%;
}
.keep {
  color: #000;
  margin-top: 40px;
  margin-left: 40px;
}
.keep a {
  color: #000;
}
.keep a :hover {
  color: aqua;
  border-bottom: 1px solid aqua;
}
</style>