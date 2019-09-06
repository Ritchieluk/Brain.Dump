<template>
    <v-footer height="auto">
        <v-layout align-center justify-center row >
            <v-flex class="pa-2" md4 text-xs-center>Brain Dump is a journal storage site that provides additional insight into your moods and emotions</v-flex>
            <v-flex class="pa-2" md4 py-3 text-xs-center xs12>
                &copy; {{ new Date().getFullYear()}} - <strong>Luke Ritchie, Morgan Martin, Oscar Skean</strong>
            </v-flex>
            <v-flex class="pa-2" md4>
                <v-btn :to="{name: 'AboutUs'}">About Us</v-btn>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>