<template>
    <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
    <v-card><v-img max-height="100" src="https://via.placeholder.com/300"></v-img></v-card>
    
      <v-expansion-panel-header class="headline">Journal Entry {{i}}<v-spacer></v-spacer>Date <v-spacer></v-spacer></v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>