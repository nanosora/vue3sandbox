<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, reactive, computed } from 'vue'

const router = useRouter()
const route = useRoute()

const drawer = ref(false)

function execLogout() {
  router.push('/')
}

const menuList = ref(
  [{ title: "Home", value: "/home" }, { title: "Vue Flow Test", value: "/first" }]
)

const isLogin = computed(() => {
  return route.name === "login"
})
</script>

<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-app-bar>
        <template v-slot:prepend v-if="!isLogin">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>{{ route.meta.title }}</v-app-bar-title>

        <template v-slot:append v-if="!isLogin">
          <v-btn icon="mdi-logout" @click="execLogout"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-item v-for="item in menuList" :title="item.title" :value="item.value"
            @click="router.push(item.value)"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped></style>
