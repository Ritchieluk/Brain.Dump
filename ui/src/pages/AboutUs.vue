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
                    <v-flex md4 v-for="(person, index) in info" :key="index">
                        <v-card>
                            <v-card-title class="headline">{{index}}</v-card-title>
                            <v-img :src="person.img"></v-img>
                            <v-card-text>
                                <h2>Major</h2>
                                <p>{{person.major}}</p>
                                <h2>Email</h2>
                                <p>{{person.email}}</p>
                            </v-card-text>
                            <v-btn color="blue darken-2" large icon @click.stop="linkedIn(person.linkedin)">
                                <v-icon >
                                    fab fa-linkedin
                                </v-icon>
                            </v-btn>
                            <v-btn color="purple darken-3" @click.stop="github(person.github)" large icon>
                                <v-icon>fab fa-github</v-icon>
                            </v-btn>
                        </v-card>
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

export default {
    data: ()=>({
        drawer:false,
        info: {
            "Luke Ritchie": {
                "img": "https://avatars1.githubusercontent.com/u/33823229?s=460&v=4",
                "major": "Computer Science",
                "email": "ritchieluk@gmail.com, ldri225@uky.edu",
                "about": "",
                "linkedin": "https://www.linkedin.com/in/luke-ritchie-798b8b15b/",
                "github": ""
            },
            "Oscar Skean": {
                "img": "https://media.licdn.com/dms/image/C4D03AQEkNp19ZmIeGg/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=3j2Y36Gm2u_VzncAb9n8POanuTKtiU9Sl6QIZiGJN7Y",
                "major": "Computer Science",
                "email": "ofskean727@gmail.com",
                "about": "",
                "linkedin": "https://www.linkedin.com/in/oscar-skean-840b25128/",
                "github": "https://github.com/OFSkean"
            },
            "Morgan Martin": {
                "img": "",
                "major": "Computer Science",
                "email": "mjma254@uky.edu",
                "linkedin": "",
                "github": "https://github.com/MorganMartin12"
            }
        }
    }),
    components: {
        Menu: Menu,
        Toolbar: Toolbar,
        Footer: Footer
    },
    methods: {
        checkDrawer: function(value){
            this.drawer=value;
        },
        linkedIn: function(value){
            window.location.href = value;
        },
        github: function(value){
            window.location.href = value;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>