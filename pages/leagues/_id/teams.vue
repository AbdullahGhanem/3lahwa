<template>
    <div >
        <a-row :gutter="16">
            <a-col span="8" v-for="(item, index) in league.teams" :key="index">
                <team :item="item"> </team>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import team from "~/components/team";
export default {
    props: ["league"],
    components: {team},
    head () {
        return {
            title: 'league ' +this.league.id + ' teams',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    data: () => ({

    }),
    methods: {

    }
};
</script>

<style scoped>

</style>