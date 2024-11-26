<template>
  <div class="">
    <MainLayout>
      <template #main>
        <HomeMain />
      </template>
      </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import HomeMain from '@/components/Home/HomeMain.vue'
</script>

<style scoped></style>
