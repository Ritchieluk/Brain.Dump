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
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
import Menu from "../components/common/Menu";
import Toolbar from "../components/common/Toolbar";
import Footer from "../components/common/Footer";
import json from "../assets/1";
import spiro from "../spiro";

export default {
    data: ()=>({
        drawer:false,
        json: json
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
    },
    created: function() {
        let i = spiro.load(json, "canvasPen");
        console.log(i);
    }
}
</script>

<style lang="scss" scoped>

</style>