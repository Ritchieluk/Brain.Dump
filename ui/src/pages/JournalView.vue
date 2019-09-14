<template>
    <v-container>
        <v-layout>
            <v-flex md6 class="pa-2">
                <v-card class="ma-2">
                    <v-card-title class="headline">Journal Contents</v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>
                </v-card>
                <v-card class="ma-2">
                    <v-card-title class="headline">
                        Journal Info
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex md6 class="pa-2">
                <v-card height="300">
                    <SpirographIcon
                    id="canvas"
                    :json="json"
                    :height="300"/>
                </v-card>
                
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import SpirographIcon from "@/components/SpirographIcon";
import json from "@/assets/2";
export default {
    data: ()=>({
        json: json
    }),
    components: {
        SpirographIcon: SpirographIcon
    }
}
</script>

<style lang="scss" scoped>

</style>