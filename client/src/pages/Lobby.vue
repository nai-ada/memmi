<script setup>
import Canvas from "@/components/Canvas.vue";
import ToolBar from "@/components/ToolBar.vue";
import InfoBar from "@/components/InfoBar.vue";
</script>

<template>
  <InfoBar></InfoBar>

  <div class="lobby-layout">
    <aside class="toolbar">
      <ToolBar></ToolBar>
    </aside>

    <main class="canvas-area">
      <Canvas></Canvas>
    </main>
  </div>
</template>

<style scoped>
.lobby-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.toolbar {
  width: 200px;
  flex-shrink: 0;
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid #e0e0e0;
}

.canvas-area {
  position: relative;
  overflow: hidden;
}
</style>
