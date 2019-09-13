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
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
import Menu from "../components/common/Menu";
import Toolbar from "../components/common/Toolbar";
import Footer from "../components/common/Footer";
import JournalOverview from "@/components/user/JournalOverview";

export default {
    data: ()=>({
        drawer:false
    }),
    components: {
        Menu: Menu,
        Toolbar: Toolbar,
        Footer: Footer,
        Overview: JournalOverview
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