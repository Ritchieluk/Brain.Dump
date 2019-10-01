<template>
    <v-footer height="auto">
        <v-container align-content-center justify-center wrap >
            <v-row justify="center" class="pa-2" md12 >
                Brain Dump is a journal storage site that provides additional insight into your moods and emotions
            </v-row>
            <v-row justify="center" class="pa-2" md12  xs12>
                {{dateLine}}
            </v-row>
            <v-row justify="center" class="pa-2" md12>
                <v-btn outlined :to="{name: 'AboutUs'}">About Us</v-btn>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    data: ()=>({
        date: new Date().getFullYear()
    }),
    computed: {
        dateLine: function(){
            return `${this.date} - Luke Ritchie, Oscar Skean, Morgan Martin`;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>