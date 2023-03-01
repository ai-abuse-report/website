<template>
  <Layout>
    <template #home-hero-image>
      <img src="/img/logo.svg">
    </template>
    <template #doc-after>
      <div>评论</div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

