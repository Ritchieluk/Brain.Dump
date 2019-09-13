<template>
    <v-container>
        <v-layout>
            <v-flex md6>
                <v-card>
                    <v-card-title class="headline">Home Page</v-card-title>
                </v-card>
            </v-flex>
            
            <v-flex md6>
                <v-card>
                    <canvas id="canvasPen" height="auto" width="auto"></canvas>
                </v-card>
            </v-flex>         
        </v-layout>
    </v-container>
</template>

<script>
import json from "../assets/1";
import spiro from "../spiro";

export default {
   mounted: function() {
        let canvas = document.getElementById("canvasPen");
        let i = spiro.load(json, canvas);
        console.log(i);
    }
}
</script>

<style>

</style>