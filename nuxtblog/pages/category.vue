<template>
  <div id="category">
      <div class="container"></div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      categories: []
    };
  },
  methods: {
    //   获取类别
    async getcategory() {
      const res = await this.axios.get("/rest/categories/category");
      this.categories = res.data.slice(6, res.data.length);
    }
  },
  created() {
    this.getcategory();
  }
};
</script>
<style scoped>
#blog {
  margin-top: -2rem;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
}
</style>