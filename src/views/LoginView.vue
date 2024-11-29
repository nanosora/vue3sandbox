<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const showpwd = ref(false)

function execLogin() {
    router.push('/home')
}
</script>

<template>
    <v-card class="mx-auto" elevation="1" max-width="500">
        <v-text-field label="user name" clearable></v-text-field>
        <v-text-field label="password" clearable :type="showpwd ? 'text' : 'password'"
            :append-inner-icon="showpwd ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="showpwd = !showpwd"></v-text-field>
        <v-btn class="text-none" color="grey-lighten-3" size="x-large" variant="flat" block
            @click="execLogin">ログイン</v-btn>
        <v-card-text>
            ※バリデーションとか何も組み込んでいないので、ログインボタン押下でhomeに画面遷移します。
        </v-card-text>
    </v-card>
</template>