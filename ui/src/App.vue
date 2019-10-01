<template>
    <v-app>
        <Menu
        :display="drawer"
        @input="checkDrawer"
        />
        <Toolbar
        @toggle="drawer=!drawer"/>
        <v-content>
            <router-view></router-view>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
import Menu from "./components/common/Menu";
import Toolbar from "./components/common/Toolbar";
import Footer from "./components/common/Footer";
export default {
  name: 'app',
    data: ()=>({
        drawer:false
    }),
    components: {
        Menu: Menu,
        Toolbar: Toolbar,
        Footer: Footer
    },
    methods: {
        checkDrawer: function(value){
            this.drawer=value;
        }
    }
}
</script>

<style>

</style>
