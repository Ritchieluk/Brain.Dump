<template>
    <v-list>
        <v-list-item
        :to="{name: 'Home'}">
            <v-list-item-action>
                <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                Home
            </v-list-item-content>
        </v-list-item>
        <v-list-item
        :to="{name: 'User'}">
            <v-list-item-action>
                <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                Profile
            </v-list-item-content>
        </v-list-item>
        <v-list-item
        :to="{name: 'Journal'}">
            <v-list-item-action>
                <v-icon>fas fa-book</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                New Journal
            </v-list-item-content>
        </v-list-item>
        <v-list-item @click="github">
            <v-list-item-action>
                <v-icon>fab fa-github</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                Github
            </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'AboutUs'}">
            <v-list-item-action>
                <v-icon>fas fa-address-card</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                About Us
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    methods: {
        github: function(){
            window.location.href = "https://github.com/Ritchieluk/Brain.Dump";
        }
    }
}
</script>

<style>

</style>