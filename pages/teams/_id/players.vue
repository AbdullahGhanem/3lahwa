<template>
    <div >
        <a-row :gutter="16">
            <a-col span="8" v-for="(item, index) in team.players" :key="index">
                <player :item="item"> </player>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import player from "~/components/player";
export default {
    props: ["team"],
    components: {player},
    head () {
        return {
            title: 'team ' +this.team.id + ' players',
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