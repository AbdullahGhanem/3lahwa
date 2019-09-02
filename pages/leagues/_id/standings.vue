<template>
    <div class="pt-10">
        <a-table :columns="columns" :dataSource="standings" :rowKey="r => r.id">
            <span slot="team" slot-scope="team">
                <router-link :to="{ name: 'team.show', params: { id: team.id }}" class="text-deep">
                    <a-avatar :src="team.logo" size="small" />
                    {{team.name}}
                </router-link>
            </span>  

            <span slot="last" slot-scope="last">
                <a-badge :count="i.type" v-for="(i, index) in strToArray(last)" :key="index" :numberStyle= "{backgroundColor: i.color} "/>

            </span>
        </a-table>

    </div>
</template>

<script>
const columns = [
    {
        title: 'Pos',
        key: 'position',
        dataIndex: 'position',
    }, 
    {
        title: 'Team',
        key: 'team',
        dataIndex: 'team',
        scopedSlots: { customRender: 'team' },
    }, 
    {
        title: 'MP',
        key: 'overall.gp',
        dataIndex: 'overall.gp',
    }, 
    {
        title: 'W',
        key: 'overall.w',
        dataIndex: 'overall.w',
    }, 
    {
        title: 'D',
        key: 'overall.d',
        dataIndex: 'overall.d',
    }, 
    {
        title: 'L',
        key: 'overall.l',
        dataIndex: 'overall.l',
    }, 
    {
        title: 'GF',
        key: 'overall.gs',
        dataIndex: 'overall.gs',
    }, 
    {
        title: 'GA',
        key: 'overall.ga',
        dataIndex: 'overall.ga',
    }, 
    {
        title: 'GD',
        key: 'total.gd',
        dataIndex: 'total.gd',
    }, 
    {
        title: 'Pts',
        key: 'total.p',
        dataIndex: 'total.p',
    }, 
    {
        title: 'last',
        key: 'recent_form',
        dataIndex: 'recent_form',
        scopedSlots: { customRender: 'last' },
    }
];
export default {
    props: ["league"],
    head () {
        return {
            title: 'league ' +this.league.id + ' standings',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    data: () => ({
        standings: [],
        columns,
    }),
    created() {
        this.getTops()
    },
    methods: {
        async getTops() {
            const response = await this.$axios.$get('https://soccer.test/api/leagues/'+this.$route.params.id+'/standings')
            this.standings = response.data
        },         
        strToArray(str) {
            let colors = {
                'W': 'green',
                'L': 'red',
                'D': 'gray',
            }
    
            return str.split("").map(x => (
                {
                    'type': x,
                    'color': colors[x],
                }
            ))
        }, 
    }
};
</script>

<style scoped>

</style>