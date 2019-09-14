<template>
  <v-card>
    <v-toolbar
      flat
      color="blue lighten-1"
    >
      <v-toolbar-title>Compose a new Journal Entry</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn 
      outlined 
      left 
      @click="submitJournal">
          Submit
          <v-icon class="pa-1">
              mdi-send
          </v-icon>
      </v-btn>
    </v-toolbar>
    <v-form>
      <v-text-field
        label="Title"
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-text-field
        label="Date"
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        v-model="title"
        label="Entry"
        counter
        maxlength="1200"
        full-width
        single-line
        height="600"
      ></v-textarea>
    </v-form>
  </v-card>
</template>

<script>
export default {
    methods: {
        submitJournal: function(){
            // TODO: send contents to API to be interpreted
            
            // switch user to full page where animation will play
            // TODO: This journalViewer page should be 1-many related
            this.$router.push({name: 'JournalView'});
        }
    }
}
</script>

<style lang="scss" scoped>

</style>