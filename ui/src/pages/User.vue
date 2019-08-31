<template>
    <v-app>
        <Menu
        :display="drawer"
        @input="checkDrawer"
        />
        <Toolbar
        @toggle="drawer=!drawer"/>
        <v-content>
             <v-container>
                <v-layout>
                    <v-flex>
                        <v-card>
                            <v-card-title class="headline">Profile Page</v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
import Menu from "../components/Menu";
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";

export default {
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

<style lang="scss" scoped>

</style>