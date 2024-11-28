<script setup>
</script>

<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-app-bar title="App bar"></v-app-bar>

      <!-- <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer> -->

      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>
</style>
