<template>
    <div class="pt-10">
        <a-table :columns="columns" :dataSource="topscorers" :rowKey="r => r.id">
            <span slot="player" slot-scope="player, record">
                <div >
                    <div class="parent">
                        <a-avatar :src="player.image" :size="50" />
                    </div>
                    <div class="child">
                        <div>
                            <h4 class="no-margin">{{player.name}}</h4>
                        </div>
                        <a-avatar :src="record.team.logo" size="small" />
                        {{record.team.name}}
                    </div>
                </div>
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
        title: 'Player',
        key: 'player',
        dataIndex: 'player',
        scopedSlots: { customRender: 'player' },
    }, 
    {
        title: 'Goals',
        key: 'goals',
        dataIndex: 'goals',
    }, 
    {
        title: 'Penalty',
        key: 'penalty',
        dataIndex: 'penalty',
    }, 
];
export default {
    props: ["league"],
    head () {
        return {
            title: 'league ' +this.league.id + ' topscorers',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    data: () => ({
        topscorers: [],
        columns,
    }),
    created() {
        this.getTops()
    },
    methods: {
        async getTops() {
            const response = await this.$axios.$get('https://soccer.test/api/leagues/'+this.$route.params.id+'/topscorers')
            this.topscorers = response.data
        },
    }
};
</script>

<style scoped>
    .parent{
      margin-right: 10px;
      float: left;
    }
    .child {
      float: left;
      margin-top: 5px;
    }
    .pt-10 >>> .ant-table-tbody > tr > td {
        padding: 10px 10px;
    }
</style> 