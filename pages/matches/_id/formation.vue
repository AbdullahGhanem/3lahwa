<template>
    <div class="pt-10">
        <a-row>
            <a-col span="11">
                <a-card shadow>
                    <p slot="title">{{formation_team1.plan}}</p>
                    
                    <a-timeline>
                        <a-timeline-item color="green" 
                            v-for="(player, index) in formation_team1.players"
                            v-if="player.formation_position == 'G'"
                            :key="player.id">

                            <router-link
                                :to="{ name: 'player.show', params: { id: player.id }}"
                                class="text-deep">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'G'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>
                    <a-timeline>
                        <a-timeline-item color="#17233d" 
                            v-for="(player, index) in formation_team1.players"
                            v-if="player.formation_position == 'D'"
                            :key="player.id">
                            <router-link
                                :to="{ name: 'player.show', params: { id: player.id }}"
                                class="text-deep">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'D'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>                

                    <a-timeline>
                        <a-timeline-item color="blue" 
                            v-for="(player, index) in formation_team1.players"
                            v-if="player.formation_position == 'M'"
                            :key="player.id">
                            <router-link class="text-deep"
                                :to="{ name: 'player.show', params: { id: player.id }}">
                                 <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'M'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>

                    <a-timeline>
                        <a-timeline-item color="red" 
                            v-for="(player, index) in formation_team1.players"
                            v-if="player.formation_position == 'F'"
                            :key="player.id">

                            <router-link class="text-deep"
                                :to="{ name: 'player.show', params: { id: player.id }}">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'F'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>
                    <a-spin size="large" fix v-if="formation_spin"></a-spin>
                </a-card>
            </a-col>
            <a-col span="11" offset="2">
                <a-card shadow>
                    <p slot="title">{{formation_team2.plan}}</p>
                    
                    <a-timeline>
                        <a-timeline-item color="green" 
                            v-for="(player, index) in formation_team2.players"
                            v-if="player.formation_position == 'G'"
                            :key="player.id">

                            <router-link
                                :to="{ name: 'player.show', params: { id: player.id }}"
                                class="text-deep">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'G'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>
                    <a-timeline>
                        <a-timeline-item color="#17233d" 
                            v-for="(player, index) in formation_team2.players"
                            v-if="player.formation_position == 'D'"
                            :key="player.id">
                            <router-link
                                :to="{ name: 'player.show', params: { id: player.id }}"
                                class="text-deep">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'D'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>                

                    <a-timeline>
                        <a-timeline-item color="blue" 
                            v-for="(player, index) in formation_team2.players"
                            v-if="player.formation_position == 'M'"
                            :key="player.id">
                            <router-link class="text-deep"
                                :to="{ name: 'player.show', params: { id: player.id }}">
                                 <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'M'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>

                    <a-timeline>
                        <a-timeline-item color="red" 
                            v-for="(player, index) in formation_team2.players"
                            v-if="player.formation_position == 'F'"
                            :key="player.id">

                            <router-link class="text-deep"
                                :to="{ name: 'player.show', params: { id: player.id }}">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'F'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>

                    <a-spin size="large" fix v-if="formation_spin"></a-spin>
                </a-card>
            </a-col>
        </a-row>

        <a-row class="mt-10">
            <a-col span="11">
                <a-card shadow>
                    <p slot="title">substitutes</p>
                    
                    <a-timeline>
                        <a-timeline-item color="green" 
                            v-for="(player, index) in formation_team1.substitutes"
                            v-if="player.substitutes_position == 'G'"
                            :key="player.id">

                            <router-link
                                :to="{ name: 'player.show', params: { id: player.id }}"
                                class="text-deep">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'G'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>
                    <a-timeline>
                        <a-timeline-item color="#17233d" 
                            v-for="(player, index) in formation_team1.substitutes"
                            v-if="player.substitutes_position == 'D'"
                            :key="player.id">
                            <router-link
                                :to="{ name: 'player.show', params: { id: player.id }}"
                                class="text-deep">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'D'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>                

                    <a-timeline>
                        <a-timeline-item color="blue" 
                            v-for="(player, index) in formation_team1.substitutes"
                            v-if="player.substitutes_position == 'M'"
                            :key="player.id">
                            <router-link class="text-deep"
                                :to="{ name: 'player.show', params: { id: player.id }}">
                                 <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'M'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>

                    <a-timeline>
                        <a-timeline-item color="red" 
                            v-for="(player, index) in formation_team1.substitutes"
                            v-if="player.substitutes_position == 'F'"
                            :key="player.id">

                            <router-link class="text-deep"
                                :to="{ name: 'player.show', params: { id: player.id }}">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'F'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>
                    <a-spin size="large" fix v-if="formation_spin"></a-spin>
                </a-card>
            </a-col>
            <a-col span="11" offset="2">
                <a-card shadow>
                    <p slot="title">substitutes</p>
                    
                    <a-timeline>
                        <a-timeline-item color="green" 
                            v-for="(player, index) in formation_team2.substitutes"
                            v-if="player.substitutes_position == 'G'"
                            :key="player.id">

                            <router-link
                                :to="{ name: 'player.show', params: { id: player.id }}"
                                class="text-deep">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'G'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>
                    <a-timeline>
                        <a-timeline-item color="#17233d" 
                            v-for="(player, index) in formation_team2.substitutes"
                            v-if="player.substitutes_position == 'D'"
                            :key="player.id">
                            <router-link
                                :to="{ name: 'player.show', params: { id: player.id }}"
                                class="text-deep">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'D'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>                

                    <a-timeline>
                        <a-timeline-item color="blue" 
                            v-for="(player, index) in formation_team2.substitutes"
                            v-if="player.substitutes_position == 'M'"
                            :key="player.id">
                            <router-link class="text-deep"
                                :to="{ name: 'player.show', params: { id: player.id }}">
                                 <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'M'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>

                    <a-timeline>
                        <a-timeline-item color="red" 
                            v-for="(player, index) in formation_team2.substitutes"
                            v-if="player.substitutes_position == 'F'"
                            :key="player.id">

                            <router-link class="text-deep"
                                :to="{ name: 'player.show', params: { id: player.id }}">
                                <a-avatar :src="player.image" size="small" />
                                {{player.name}}
                                'F'
                            </router-link>
                        </a-timeline-item>
                    </a-timeline>

                    <a-spin size="large" fix v-if="formation_spin"></a-spin>
                </a-card>
            </a-col>
        </a-row>
    </div>
</div>

</div>
</div>
</template>

<script>
    export default {
        props: ["match"],
        head () {
            return {
                title: 'match formation',
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    { hid: 'description', name: 'description', content: 'My custom description' }
                ]
            }
        },
        data: () => ({
            formation_team1: {'plan': 'no data'},
            formation_team2: {'plan': 'no data'},
            formation_spin: false,
        }),
        created() {
            this.getFormation()
        },
        methods: {        
            async getFormation() {
                this.formation_spin = true
                const response = await this.$axios.$get('https://soccer.test/api/matches/' + this.$route.params.id + '/formations')
          
                if (typeof response.data !== 'undefined') {
                    this.formation_team1 = response.data[0]
                    this.formation_team2 = response.data[1]
                    this.formation_spin = false
                }

            }
        }
    };
</script>

<style scoped>

</style>