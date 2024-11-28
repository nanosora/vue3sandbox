<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function execLogin() {
    router.push('/menu')
}
</script>

<template>
    <v-btn @click="execLogin">ログイン</v-btn>
</template>