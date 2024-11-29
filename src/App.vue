<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, reactive, computed } from 'vue'

const router = useRouter()
const route = useRoute()

const drawer = ref(false)

function execLogout() {
  drawer.value = false
  router.push('/')
}

const menuList = ref(
  [
    { title: "Home", name: "home", value: "/home", icon: "mdi-home" },
    { title: "Vue Flow Test", name: "first", value: "/first", icon: "mdi-vuejs" },
    { title: "CheaterGrid Test", name: "second", value: "/second", icon: "mdi-vuejs" }
  ]
)

const isLogin = computed(() => {
  return route.name === "login"
})

</script>

<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar>
        <template v-slot:prepend v-if="!isLogin">
          <v-tooltip text="メニュー" location="bottom">
            <template v-slot:activator="{ props }">
              <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-bind="props"></v-app-bar-nav-icon>
            </template>
          </v-tooltip>
        </template>

        <v-app-bar-title>{{ route.meta.title }}</v-app-bar-title>

        <template v-slot:append v-if="!isLogin">
          <v-tooltip text="ログアウト" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-logout" v-bind="props" @click="execLogout"></v-btn>
            </template>
          </v-tooltip>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-item v-for="item in menuList" :title="item.title" :value="item.value"
            @click="router.push(item.value)" :active="route.name === item.name" :prepend-icon="item.icon"></v-list-item>
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
