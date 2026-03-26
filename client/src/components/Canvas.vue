<template>
  <v-stage ref="stage" class="konva-canvas" :config="stageSize">
    <v-layer ref="layer">

    </v-layer>
  </v-stage>
</template>

<script setup>
import { onMounted } from 'vue';

const stageSize = {
  width: 800,
  height: 800
};


onMounted(() => {

});
</script>


<style scoped>
.konva-canvas {
  background: white;
}
</style>
