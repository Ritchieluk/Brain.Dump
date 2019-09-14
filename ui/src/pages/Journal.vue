<template>
    <v-container>
        <v-layout wrap>
            <v-flex md12>
                <v-card>
                    <v-card-title class="headline">New Journal Page</v-card-title>
                </v-card>
            </v-flex>
            <v-flex md12>
                <editor/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import JournalEditor from "@/components/journal/JournalEditor";
export default {
    components: {
        editor: JournalEditor
    }
}
</script>

<style lang="scss" scoped>

</style>