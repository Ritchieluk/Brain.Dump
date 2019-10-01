<template>
    <v-navigation-drawer
    v-model="drawer"
    temporary
    clipped
    app
    >
        <v-toolbar>
            <v-toolbar-title>
                Quick Navigation
            </v-toolbar-title>
        </v-toolbar>
        <Directory/>
    </v-navigation-drawer>
</template>

<script>
import Directory from "./Directory";

export default {
    data: ()=>({
        drawer: null
    }),
    components: {
        Directory: Directory
    },
    props: {
        display: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    watch: {
        display: function(){
            this.drawer=this.display;
        },
        drawer: function(){
            this.$emit('input', this.drawer);
        }
    }
}
</script>

<style>

</style>
