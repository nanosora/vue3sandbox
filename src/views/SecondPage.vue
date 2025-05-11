<script setup>
    const records = [{
        sid: 1,
        f1: 'aaaa1',
        f2: 'bbbb1'
    }];
    function onClickRecord(rec) {
      alert(JSON.stringify(rec));
    }
</script>

<template>
    <v-card-text>
        Cheetah-Grid のテスト
    </v-card-text>
    <v-card-text>
        ★vue-cheetah-grid
    </v-card-text>
    <div style="height:380px;">
        <c-grid :data="records" :frozen-col-count="1">
        <!-- define checkbox -->
        <c-grid-check-column field="check" width="50"> </c-grid-check-column>
        <c-grid-column field="sid" width="85"> ID </c-grid-column>
        <!-- multiple headers -->
        <c-grid-column-group caption="Field">
        <c-grid-input-column field="f1" width="20%" min-width="150">
            Field1
        </c-grid-input-column>
        <c-grid-input-column field="f2" width="20%" min-width="150">
            Field2
        </c-grid-input-column>
        </c-grid-column-group>
        <!-- define button -->
        <c-grid-button-column caption="SHOW REC" width="120" @click="onClickRecord">
        </c-grid-button-column>
        </c-grid>
    </div>
</template>