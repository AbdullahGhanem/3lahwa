<template>
  <div class="item">
    <a-card :bordered=false>
      <nuxt-link :to="'/leagues/'+ item.id">
      <a-card-meta
        :title="item.name"
        description="This is the description">
        <a-avatar slot="avatar" shape="square" :size="50" :src="item.logo" />
      </a-card-meta>
      </nuxt-link>
      <a href="">
        <a-icon type="star" theme="outlined" twoToneColor="#454545"/>
      </a>

    </a-card>
  </div>
</template>
<script>
export default {
  props: ["item"],
  methods: {
  }
};
</script>

<style scoped>
  .item{
    padding-top: 10px;
  }
  .ivu-avatar{
    background-color: #eaeaea;
  }
  .item >>> .ant-card-body {
    padding: 10px;
  }
</style>