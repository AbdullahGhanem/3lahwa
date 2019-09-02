<template>
    <div>
        <match v-for="(match, index) in team.matches"
          :key="index"
          :match="match">
        </match>
    </div>
</template>

<script>
import match from "~/components/match";

export default {
    props: ["team"],
    components: {match},
    head () {
        return {
            title: 'team ' +this.team.id,
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