<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'

import DropzoneBackground from '../components/DropzoneBackground.vue'
import Sidebar from '../components/Sidebar.vue'
import useDragAndDrop from '../components/useDnD'

const { onConnect, addEdges } = useVueFlow()

const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()

const nodes = ref([])

onConnect(addEdges)
</script>

<template>
    <v-card-text>
        Vue Flow のテスト
    </v-card-text>
    <v-container height="600px">
        <v-card-text>
            ※Backspaceキー押下で、追加したnode、edgeを削除できます。
        </v-card-text>
        <div class="dnd-flow" @drop="onDrop">
            <VueFlow :nodes="nodes" @dragover="onDragOver" @dragleave="onDragLeave">
                <DropzoneBackground :style="{
            backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
            transition: 'background-color 0.2s ease',
        }">
                    <p v-if="isDragOver">Drop here</p>
                </DropzoneBackground>
            </VueFlow>

            <Sidebar />
        </div>
    </v-container>
</template>

<style>
/* import the required styles */
@import "@vue-flow/core/dist/style.css";

/* import the default theme (optional) */
@import "@vue-flow/core/dist/theme-default.css";


.vue-flow__minimap {
    transform: scale(75%);
    transform-origin: bottom right;
}

.dnd-flow {
    flex-direction: column;
    display: flex;
    height: 100%
}

.dnd-flow aside {
    color: #fff;
    font-weight: 700;
    border-right: 1px solid #eee;
    padding: 15px 10px;
    font-size: 12px;
    background: #10b981bf;
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .3);
    box-shadow: 0 5px 10px #0000004d
}

.dnd-flow aside .nodes>* {
    margin-bottom: 10px;
    cursor: grab;
    font-weight: 500;
    -webkit-box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, .25);
    box-shadow: 5px 5px 10px 2px #00000040
}

.dnd-flow aside .description {
    margin-bottom: 10px
}

.dnd-flow .vue-flow-wrapper {
    flex-grow: 1;
    height: 100%
}

@media screen and (min-width: 640px) {
    .dnd-flow {
        flex-direction: row
    }

    .dnd-flow aside {
        min-width: 25%
    }


}

@media screen and (max-width: 639px) {
    .dnd-flow aside .nodes {
        display: flex;
        flex-direction: row;
        gap: 5px
    }
}

.dropzone-background {
    position: relative;
    height: 100%;
    width: 100%
}

.dropzone-background .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    pointer-events: none
}
</style>