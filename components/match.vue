<template>
    <div class="match">
        <a-card  class="mt-10" >
            <a-row type="flex" justify="center">
                <a-col :xs="10" :sm="10" :md="5" :lg="5" class="frist_team">
                    <nuxt-link :to="{ name: 'teams-id', params: { id: match.team1.id }}">
                        {{match.team1.name}}
                        <a-avatar :src="match.team1.logo"  />
                    </nuxt-link>
                </a-col>

                <a-col :xs="1" :sm="1" :md="1" :lg="1" class="text-center">
                    <div class="score" v-text="match.score1"></div>
                </a-col>

                <a-col :xs="10" :sm="10" :md="1" :lg="1" class="text-center">
                    <span class="status">{{ match.status }}</span>
                </a-col>

                <a-col :xs="1" :sm="1" :md="1" :lg="1" class="text-center ">
                    <div class="score" v-text="match.score2"></div>
                </a-col>

                <a-col :xs="10" :sm="10" :md="5" :lg="5" class="text-left pt-10">

                    <nuxt-link :to="{ name: 'teams-id', params: { id: match.team2.id }}">
                        <a-avatar :src="match.team2.logo"  />
                        {{match.team2.name}}
                    </nuxt-link>
                </a-col>

                <a-col :xs="10" :sm="10" :md="4" :lg="4" class="text-left pt-10">

                    <Tooltip v-if="match.league" :content="match.league.name" placement="top">
                        <router-link class="text-deep" :to="{ name: 'league.show', params: { id: match.league.id }}">
                            <a-avatar :src="match.league.logo" size="small" />
                        </router-link>
                    </Tooltip>
                    {{ dateFormat(match.play_at) }}
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>

<script>
    export default {
        props: ["match"],
        data() {
            return {
            };
        },
        methods: {
        }
    };
</script>
<style scoped>
.score{
    display: inline-block;
    font-weight: 500;
    padding: 2px 5px 1px 5px;
    line-height: 1.5384616;
    border: 1px solid transparent;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 0.1px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
}
.status{
    border-color: #4CAF50;
    display: inline-block;
    font-weight: 500;
    padding: 2px 5px 1px 5px;
    line-height: 1.5384616;
    border: 1px solid transparent;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 0.1px;
    border-radius: 2px;
    background-color: #4CAF50;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
}
.mt-10 {
    margin-top: 10px;
}

.frist_team {
    text-align: right;
    margin-right: 20px
}
.match >>> .ant-card-body {
    padding: 10px;
}
</style>
