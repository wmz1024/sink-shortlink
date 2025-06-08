<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    正在跳转至 Home.AwA.gs
  </div>
</template>

<script setup>
if (process.client) {
  window.location.href = 'https://home.awa.gs/?ref=awa'
}
</script>
