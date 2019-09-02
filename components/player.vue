<template>
    <div class="item">
        <a-card :bordered=false>
            <nuxt-link :to="'/players/'+ item.id">
                <a-card-meta
                :title="item.name"
                :description="item.position">
                <a-avatar slot="avatar" :size="50" :src="item.image" />
            </a-card-meta>
        </nuxt-link>
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