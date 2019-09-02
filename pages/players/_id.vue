<template>
    <div class="page">
        <div class="cover" style="background-image: url(&quot;http://demo.interface.club/limitless/assets/images/bg.png&quot;);">
            <h3 class="title">
                <a-skeleton :loading="player.length == 0" active :title="{width: 220}" :paragraph="false" />
                {{ player.name}}
            </h3> 
            <a href="#" >
                <a-avatar :src="player.image" :size="110"  />
            </a>
        </div>
        <a-menu mode="horizontal" :active-name="$nuxt.$route.name">
            <a-menu-item :name="tab.route_name" v-for="tab in tabs" :key="tab.name">
                <nuxt-link :to="'/players/'+$route.params.id +tab.to">
                    <i :class="tab.icon"></i>
                    {{ tab.name}}
                </nuxt-link>
            </a-menu-item>
        </a-menu>

        <nuxt-child :player="player"/>

    </div>
</template>

<script>
    export default {
        data: () => ({
            player: []
        }),
        created() {
            this.getPlayer()
        },
        computed: {
            tabs() {
                return [
                    {
                        icon: "fontball-game-tv",
                        name: "matches",
                        route_name: 'players-id',
                        to: "/"
                    }
                ];
            }
        },
        methods: {
            async getPlayer() {

                const response = await this.$axios.$get('https://soccer.test/api/players/'+this.$route.params.id , {
                    params: {
                        include: 'team,country,matches',
                    }
                });
                this.player = response.data
            },
        }
    };
</script>

<style scoped>
.page {
    padding-top: 10px;
}
.page >>> .ant-skeleton {
    display: inline-block;
    width: auto;
}
.cover {
    background-color: #888;
    border-color: #888;
    color: #fff;
    background-size: contain;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    padding: 20px;
    text-align: center;
}  
.title {
    margin-bottom: 15px !important;
    font-weight: 500;
    color: #fff;
    text-shadow: 2px 2px 4px #221f1f;
}
</style>