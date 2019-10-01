<template>
    <v-container>
        <v-parallax dark src="https://d33wubrfki0l68.cloudfront.net/d46384682b16ecdf7207de18c28f02d92e24f32f/22ea1/img/portfolio/2016/spirographs/spirographs_detail_2.png">
            <v-layout align-content-center justify-center row wrap>
                <v-flex class="pa-4" md12>
                    <v-card>
                        <v-card-title class="headline">Home Page</v-card-title>
                    </v-card>
                </v-flex>
                <v-flex class="pa-4" md12>
                    <v-card>
                        <v-card-title class="headline">This Page will be used for new users</v-card-title>
                    </v-card>
                </v-flex>
                <v-flex class="pa-4" md12>
                    <v-card>
                        <v-card-title class="headline">It might Display some example journals</v-card-title>
                    </v-card>
                </v-flex>
                <v-flex class="pa-4" md12>
                    <v-card>
                        <v-card-title class="headline">Our Tutorial Information</v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-parallax>
        <v-layout align-center justify-center row wrap>
            <v-flex md12 class="pa-4">
                <v-card>
                    <v-card-title>But it should also display info about what a Brain Dump is</v-card-title>
                </v-card>
            </v-flex>
            <v-flex md12 class="pa-4">
                <v-card>
                    <v-card-title>Why they're important</v-card-title>
                </v-card>
            </v-flex>
            <v-flex md12 class="pa-4">
                <v-card>
                    <v-card-title>Who made this</v-card-title>
                </v-card>
            </v-flex>
            <v-flex md12 class="pa-4">
                <v-card>
                    <v-card-title>and how it was made</v-card-title>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import json from "../assets/2";
import SpirographIcon from "@/components/SpirographIcon";

export default {
    data: ()=>({
        json: json
    }),
    components: {
        SpirographIcon: SpirographIcon
    }
}
</script>

<style>

</style>