<template>
    <v-container>
        <v-layout wrap>
            <v-flex md12>
                <v-card>
                    <v-card-title class="headline">Profile Page</v-card-title>
                </v-card>
            </v-flex>
            <v-flex md6 class="pa-2">
                <v-card>
                    <v-card-title>Profile Information</v-card-title>
                    <v-img max-width="300" aspect-ratio="1" src="https://via.placeholder.com/300"></v-img>
                </v-card> 
            </v-flex>
            <v-flex md6>
                <Overview/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import JournalOverview from "@/components/user/JournalOverview";

export default {
    components: {
        Overview: JournalOverview
    },
}
</script>

<style lang="scss" scoped>

</style>