<template>
    <div class="page">
        <div v-if="match" class="cover" style="background-image: url(&quot;http://demo.interface.club/limitless/assets/images/bg.png&quot;);">
            <h3 class="title" v-if="match.league">
                <a-avatar :src="match.league.logo" :size="60"  shape="square" />
                {{ match.league.name}}
            </h3> 
            <a-divider dashed />
            <a-row type="flex" justify="center" v-if="match.team1"  align="middle">
                <a-col :xs="10" :sm="10" :md="5" :lg="9" class="frist_team">
                    <nuxt-link :to="{ name: 'teams-id', params: { id: match.team1.id }}">
                        <h3 class="title"> 
                            {{match.team1.name}}
                            <a-avatar :src="match.team1.logo" :size="64" />
                        </h3>
                    </nuxt-link>
                </a-col>

                <a-col :xs="1" :sm="1" :md="1" :lg="1" class="text-center">
                    <div class="score" v-text="match.score1"></div>
                </a-col>

                <a-col :xs="10" :sm="10" :md="1" :lg="2" class="text-center">
                    <span class="status">{{ match.status }}</span>
                </a-col>

                <a-col :xs="1" :sm="1" :md="1" :lg="1" class="text-center ">
                    <div class="score" v-text="match.score2"></div>
                </a-col>

                <a-col :xs="10" :sm="10" :md="5" :lg="9" class="text-left pt-10">
                    <nuxt-link :to="{ name: 'teams-id', params: { id: match.team2.id }}">
                        <h3 class="title"> 
                            <a-avatar :src="match.team2.logo"  :size="64"/>
                            {{match.team2.name}} 
                        </h3>
                    </nuxt-link>
                </a-col>
            </a-row>
        </div>

        <a-menu mode="horizontal" :active-name="$nuxt.$route.name">
            <a-menu-item :name="tab.route_name" v-for="tab in tabs" :key="tab.name">
                <nuxt-link :to="'/matches/'+$route.params.id +tab.to">
                    <i :class="tab.icon"></i>
                    {{ tab.name}}
                </nuxt-link>
            </a-menu-item>
        </a-menu>

        <nuxt-child :match="match"/>

    </div>
</template>

<script>
export default {
    data: () => ({
        match: []
    }),
    created() {
        this.getMatch()
    },
    computed: {
        tabs() {
            return [
                {
                    icon: "fontball-game-tv",
                    name: "matches",
                    route_name: 'matches-id',
                    to: "/"
                },                
                {
                    icon: "fontball-list",
                    name: "formation",
                    route_name: 'matches-id',
                    to: "/formation"
                },
            ];
        }
    },
    methods: {
        async getMatch() {
            const response = await this.$axios.$get('https://soccer.test/api/matches/'+this.$route.params.id , {
                params: {
                    include: "team1.players,team2.players,league.translations,team1.translations,team2.translations,channels,events.player,events.assist,events.team",
                }
            });
            this.match = response.data
        },
    }
};
</script>

<style scoped>
.page >>> .ant-skeleton {
    display: inline-block;
    width: auto;
}
</style>