<template>
    <div>
        <div class="day" v-for="(day, index) in days" :key="day.day">
            <h3>
                ___ {{$moment.unix(day.day).utcOffset(120).format("LL")}} ___
            </h3>
            <div class="league" v-for="(league, index) in day.leagues" :key="league.id">
                {{ league.name}}

                <a-avatar slot="avatar" shape="square" :size="50" :src="league.logo" />

                <match v-for="(match, index) in league.matches"
                :key="index"
                :match="match">
            </match>
        </div>
    </div>
    <infinite-loading @infinite="infiniteHandler" spinner="waveDots" ref="infiniteLoading"></infinite-loading>

</div>

</template>

<script>

    import match from "~/components/match";

    export default {
        components: {
            match,
        },
        head () {
            return {
                title: 'home',
                meta: [
// hid is used as unique identifier. Do not use `vmid` for it as it will not work
{ hid: 'description', name: 'description', content: 'My custom description' }
]
}
},  
data: () => ({
    days: [],
    current: 0,
    last: 1,
}),
methods: {
    async infiniteHandler($state) {
        if (this.current <= this.last) {
            const response = await this.$axios.$get("https://soccer.test/api/days/1567209600", {
                params: {
                    lang: 'en',
                    timezone: 'Africa/Cairo'
                }
            });
            this.days = this.days.concat(response.data);
            this.current = this.$moment.unix(this.current).add(1, 'days');
            $state.loaded();
            if (this.current == this.$moment.unix(this.current).add(1, 'days')) {
                $state.complete();
            } else {
                this.current = this.$moment.unix(this.current).add(1, 'days') + 1;
            }

        }
    },
}
}
</script>

<style>
.day{
    text-align: center;
}
</style>
