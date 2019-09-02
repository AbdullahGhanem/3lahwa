<template>
    <div>
        <match v-for="(match, index) in player.matches"
          :key="index"
          :match="match">
        </match>
    </div>
</template>

<script>
import match from "~/components/match";

export default {
    props: ["player"],
    components: {match},
    head () {
        return {
            title: 'player ' +this.player.id,
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