<template>
    <v-app>
        <Menu
        :display="drawer"
        @input="checkDrawer"
        />
        <Toolbar
        @toggle="drawer=!drawer"/>
        <v-content>
            
        </v-content>
    </v-app>
</template>

<script>
import Menu from "../components/Menu";
import Toolbar from "../components/Toolbar";
export default {
    data: ()=>({
        drawer:false
    }),
    components: {
        Menu: Menu,
        Toolbar: Toolbar
    },
    methods: {
        checkDrawer: function(value){
            this.drawer=value;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>