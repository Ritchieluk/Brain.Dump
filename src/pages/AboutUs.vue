<template>
    <v-container>
        <v-layout>
            <v-flex class='pa-2' md4 v-for="(person, index) in info" :key="index">
                <v-card>
                    <v-card-title class="headline">{{index}}</v-card-title>
                    <v-img class="bordered" :src="person.img"></v-img>
                    <v-card-text>
                        <h2>Major</h2>
                        <p>{{person.major}}</p>
                        <h2>Email</h2>
                        <p>{{person.email}}</p>
                        <p>{{person.about}}</p>
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
</template>

<script>

export default {
    data: ()=>({
        info: {
            "Luke Ritchie": {
                "img": "https://avatars1.githubusercontent.com/u/33823229?s=460&v=4",
                "major": "Computer Science",
                "email": "ritchieluk@gmail.com, ldri225@uky.edu",
                "about": "Luke Ritchie is currently pursuing his bachelors and masters degrees in computer science concurrently at the University of Kentucky. He has interests in natural language processing, machine learning applications, and full stack web development. He is the project leader, UI/UX designer and creator.",
                "linkedin": "https://www.linkedin.com/in/luke-ritchie-798b8b15b/",
                "github": "https://github.com/Ritchieluk"
            },
            "Oscar Skean": {
                "img": "https://media.licdn.com/dms/image/C4D03AQEkNp19ZmIeGg/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=3j2Y36Gm2u_VzncAb9n8POanuTKtiU9Sl6QIZiGJN7Y",
                "major": "Computer Science",
                "email": "ofskean727@gmail.com",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "linkedin": "https://www.linkedin.com/in/oscar-skean-840b25128/",
                "github": "https://github.com/OFSkean"
            },
            "Morgan Martin": {
                "img": "data:image/jpeg;base64,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",
                "major": "Computer Science",
                "email": "mjma254@uky.edu",
                "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "linkedin": "",
                "github": "https://github.com/MorganMartin12"
            }
        }
    }),
    methods: {
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
.bordered {
    border: 15px solid white;
    border-radius: 25px;
}
</style>