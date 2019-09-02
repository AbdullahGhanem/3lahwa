<template>
    <div class="pt-10">
        <div v-if="match.events">
            <!-- //events -->
            <div class="timeline timeline-center">
                <div class="timeline-container">
                    <div class="timeline-row" v-show="match.status == 'FT' ">
                        <div class="timeline-icon">
                            <div class="bg-danger">
                                <i class="fontball-whistle-1" style="font-size: 20px"></i>
                            </div>
                        </div>
                    </div>
                    <div class="timeline-date text-muted" v-show="match.status == 'FT' ">
                        match ended
                    </div>

                    <!-- penalaties -->
                    <div class="timeline-row post-even pt-15" v-if="match.events.some(e => e.type === 'pen. goal')">
                    <div class="timeline-icon">
                        <div class="bg-danger-400">
                            <i class="fontball-penalty" style="font-size: 20px"></i>
                        </div>
                    </div>

                    <div class="timeline-time" dir="rtl">
                        <a-timeline id="dddd">
                            <a-timeline-item
                            :color="(event.type == 'pen. goal') ? 'green' :'red'"
                            v-for="(event, index) in match.events"
                            :key="event.id"
                            v-if="event.type.includes('pen.') && event.team_id == match.team1_id"
                            >{{ event.player_name }}</a-timeline-item>
                        </a-timeline>
                    </div>

                    <div class="timeline-content">
                        <a-timeline>
                            <a-timeline-item
                            :color="(event.type == 'pen. goal') ? 'green' :'red'"
                            v-for="(event, index) in match.events"
                            :key="event.id"
                            v-if="event.type.includes('pen.') && event.team_id == match.team2_id">
                            {{ (event.player_name.length) ? event.player_name :'(pen.)' }}
                        </a-timeline-item>
                    </a-timeline>
                </div>
            </div>

            <!-- events -->
            <div v-for="(event, index) in match.events" :key="event.id" class="timeline-row" :class="(event.team_id == match.team1_id)? 'post-even': '' " v-if="!event.type.includes('pen.')" >
            <div class="timeline-icon">
                <a @click.prevent="openAddVideo(event)">
                    <div :class="eventColor(event.type)">
                        <i :class="eventIcon(event.type)" style="font-size: 20px"></i>
                    </div>
                </a>
            </div>
            <div class="timeline-time">
                <a href="#">
                    <div style="display: inline;">
                        <b>{{event.minute }}</b>
                        <div
                        v-show="event.extra_min"
                        style="display: inline;"
                        >{{' (+' + event.extra_min + ') '}}</div>
                        {{ event.type }}
                    </div>
                </a>
                <div class="text-muted">
       
                    <div  v-if="event.player != null" style="display: inline;">
                        <a-avatar :src="event.player.image" size="small" />
                        {{ event.player_name }}
                    </div>
                    <div class="text-deep" style="display: inline;" v-else>
                        {{ event.player_name }}
                    </div>
 
                    <div style="display: inline;" class="pl-10 text-danger" v-if="event.assist_name || event.type == 'subst'" >
                        <a-avatar :src="event.assist.image" size="small" />
                        {{ event.assist_name }}
                    </div>
                    <div class="pl-10 text-danger" style="display: inline;" v-else>{{ event.assist_name }}</div>
                </div>
            </div>
        </div>
        <!-- /messages -->

        <div class="timeline-date text-muted">start match</div>
        <div class="timeline-row">
            <div class="timeline-icon">
                <div class="bg-success">
                    <i class="fontball-whistle-1" style="font-size: 20px"></i>
                </div>
            </div>
        </div>
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
            title: 'match ' + this.match.id,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    methods: {
        eventColor(type) {
            if (type == "goal") {
                return "bg-success";
            } else if (type == "yellowcard") {
                return "bg-orange-400";
            } else if (type == "redcard" || type == "yellowred") {
                return "bg-danger";
            } else if (type == "subst") {
                return "bg-primary";
            } else if (type == "pen miss") {
                return "bg-slate-800";
            } else {
                return "bg-primary";
            }
        },
        eventIcon(type) {
            if (type == "goal") {
                return "fontball-goal-ball-2";
            } else if (type == "yellowcard") {
                return "fontball-yellow-card";
            } else if (type == "redcard" || type == "yellowred") {
                return "fontball-red-card";
            } else if (type == "subst") {
                return "fontball-change";
            } else if (type == "pen miss") {
                return "fontball-penalty";
            }
        }
    }
};
</script>

<style scoped>

</style>