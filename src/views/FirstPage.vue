<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'

const { updateEdge, addEdges } = useVueFlow()

const nodes = ref([])
const nodeId = ref(0)

function addNodes() {
    nodeId.value++
    nodes.value.push({
        id: nodeId.value,
        data: {
            label: "node " + nodeId.value
        },
        position: { x: 50, y: 50 }
    })
}

const edges = ref([])

function onEdgeUpdate({ edge, connection }) {
    updateEdge(edge, connection)
}

function onConnect(params) {
    addEdges([params])
}

function onEdgeUpdateStart(edge) {
    console.log('start update', edge)
}

function onEdgeUpdateEnd(edge) {
    console.log('end update', edge)
}

</script>

<template>
    <v-card-text>
        Vue Flow のテスト
    </v-card-text>
    <v-btn @click="addNodes">node 追加</v-btn>
    <v-card-text>※追加したnode、edgeはBackspaceキーで削除できます</v-card-text>
    <v-container height="600px" width="800px">
        <VueFlow :nodes="nodes" :edges="edges" fit-view-on-init @edge-update="onEdgeUpdate" @connect="onConnect"
            @edge-update-start="onEdgeUpdateStart" @edge-update-end="onEdgeUpdateEnd">
            <Background />
        </VueFlow>
    </v-container>
</template>

<style>
/* import the required styles */
@import "@vue-flow/core/dist/style.css";

/* import the default theme (optional) */
@import "@vue-flow/core/dist/theme-default.css";
</style>