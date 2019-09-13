<template>
    <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 7"
      :key="i"
    >
      <v-card>
      <SpirographIcon
      :id="ids[i]"
      :json="json"
      />
      </v-card>
    
      <v-expansion-panel-header class="headline">Journal Entry {{i}}<v-spacer></v-spacer>Date <v-spacer></v-spacer></v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import SpirographIcon from "@/components/SpirographIcon.vue";
import json from "@/assets/1";
    export default {
      data: ()=>({
        json: json,
        ids: ["one", "two", "three", "four", "five", "six", "seven"]
      }),

      components: {
        SpirographIcon: SpirographIcon
      }
    }
</script>

<style lang="scss" scoped>

</style>