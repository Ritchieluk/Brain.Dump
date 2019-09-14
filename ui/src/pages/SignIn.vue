<template>
    <v-container>
        <v-layout align-center justify-center wrap>
            <v-flex md8>
                <v-card>
                    <v-card-title class="headline">Sign In Page</v-card-title>
                </v-card>
            </v-flex>
            <v-flex md6>
                <LoginForm/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
    components: {
        LoginForm
    }
}
</script>

<style lang="scss" scoped>

</style>