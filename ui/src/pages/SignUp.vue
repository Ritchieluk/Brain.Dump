<template>
    <v-container>
        <v-layout align-center justify-center wrap>
            <v-flex md8>
                <v-card>
                    <v-card-title class="headline">Sign Up Page</v-card-title>
                </v-card>
            </v-flex>
            <v-flex md6>
                <SignUpForm/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import SignUpForm from "@/components/SignUpForm";
export default {
    components: {
        SignUpForm
    }
}
</script>

<style lang="scss" scoped>

</style>