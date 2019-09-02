<template>
    <div>
        <match v-for="(match, index) in league.matches"
          :key="index"
          :match="match">
        </match>
    </div>
</template>

<script>
import match from "~/components/match";

export default {
    props: ["league"],
    components: {match},
    head () {
        return {
            title: 'league ' +this.league.id,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
};
</script>

<style scoped>

</style>