<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[() => !!email || 'This field is required']"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :rules="[() => !!password || 'This field is required']"
            label="Password"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text>Cancel</v-btn>
          <div class="flex-grow-1"></div>
          <!-- TODO: Implement error checking and form reset -->
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  class="my-0"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>