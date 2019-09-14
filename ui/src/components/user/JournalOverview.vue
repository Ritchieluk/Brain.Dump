<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 4"
      :key="i"
    >
      <v-card>
        <SpirographIcon
        :id="ids[i]"
        :json="jsons[i]"
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
import json1 from "@/assets/1";
import json2 from "@/assets/2";
import json3 from "@/assets/3";
import json4 from "@/assets/4";

    export default {
      data: ()=>({
        jsons: [json1, json2, json3, json4],
        ids: ["one", "two", "three", "four", "five", "six", "seven"]
      }),

      components: {
        SpirographIcon: SpirographIcon
      }
    }
</script>

<style lang="scss" scoped>

</style>