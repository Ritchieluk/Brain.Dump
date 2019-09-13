<template>
    <canvas :id="id" :height="height" :width="width"></canvas>
</template>

<script>
import spiro from "@/spiro";
    export default {
        props: {
            id: {
                required: true,
                type: String,
            },
            height: {
                required: false,
                type: String,
                default: "auto"
            },
            width: {
                required: false,
                type: String,
                default: "auto"
            },
            json: {
                required: true,
                type: Object,
            }
        },
        mounted: function(){
            console.log(this.id);
            let canvas = document.getElementById(this.id);
            spiro.load(this.json, canvas);
        }
    }
</script>

<style lang="scss" scoped>

</style>