<template>
    <div class="page">    
        <a-input-search placeholder="input search text" @search="onSearch" enterButton/>
        <a-row :gutter="16">
            <a-col span="8" v-for="(item, index) in items" :key="index">
                <league :item="item"  v-if="item.name"/>
            </a-col>
        </a-row>

        <infinite-loading @infinite="infiniteHandler" spinner="waveDots" ref="infiniteLoading"></infinite-loading>

    </div>
</template>

<script>

import league from "~/components/league";
import collection from "~/mixins/collection";

export default {
    components: {
        league,
    },
    mixins: [collection],
    head () {
        return {
            title: 'leagues',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    data: () => ({
    }),
    methods: {
        async infiniteHandler($state) {
            if (this.current_page <= this.last_page) {
                const response = await this.$axios.$get("https://soccer.test/api/leagues", {
                    params: {
                        page: this.current_page,
                        include: "country",
                        "filter[by_search]": this.keyword,
                        sort: this.sort_by,
                        default: this.defaultx
                    }
                });
                this.items = this.items.concat(response.data);
                this.last_page = response.meta.last_page;
                $state.loaded();
                if (this.current_page == response.meta.last_page) {
                    $state.complete();
                } else {
                    this.current_page = response.meta.current_page + 1;
                }

            }
        },
        onSearch(){

        }
    }
};
</script>

<style>
.page {
    padding-top: 10px;
}
.media-body {
    width: 0px;
}
</style>
