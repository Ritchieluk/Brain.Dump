<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title class="headline">Home Page</v-card-title>
                </v-card>
            </v-flex>
            
            <v-flex>
                <div>
                        <canvas id="canvasPen" height="884" width="829" style="left:136px;top:-92px;position:absolute;z-index:20"></canvas> 
                </div>
            </v-flex>         
        </v-layout>
    </v-container>
</template>

<script>
import json from "../assets/1";
import spiro from "../spiro";

export default {
    data: ()=>({
        json: json
    }),
    created: function() {
        let i = spiro.load(json, "canvasPen");
        console.log(i);
    }
}
</script>

<style lang="scss" scoped>

</style>