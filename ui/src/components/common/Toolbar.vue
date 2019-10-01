<template>
    <v-toolbar max-height="64px">
        <v-btn icon @click.stop="$emit('toggle')">
                <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-btn @click.stop="home" icon ><v-icon>mdi-home</v-icon></v-btn>
        <v-toolbar-title class="headline">
            Brain Dump
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon large color="blue darken-3">mdi-brain</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn :to="{name: 'Journal'}" color="blue lighten-3">
                Create a New Journal
            <v-icon class="pa-2">fas fa-book</v-icon>
            </v-btn>
            <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                color="primary"
                dark
                v-on="on"
                >
                Account
                </v-btn>
            </template>
            <v-list>
                <v-list-item :to="{name: 'SignIn'}">
                    <v-list-item-title>Sign In</v-list-item-title>
                </v-list-item>
                <v-list-item :to="{name: 'SignUp'}">
                    <v-list-item-title>Sign Up</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        methods: {
            home: function(){
                this.$router.push({name: "Home"});
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>