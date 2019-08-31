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
            <v-btn :to="{name: 'Journal'}" color="blue lighten-4">
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
                Dropdown
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                @click=""
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
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