<template>
  <section class="py-30">
    <div class="container flex flex-col gap-4 items-start">
      Greetings
      <h2>Hello {{ useUserStore().$state.user.name }}</h2>

      <button class="py-2 px-4 bg-red-500 text-white" solid @click="changeName">
        change name
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const changeName = () => useUserStore().$state.user.name = 'John Doe'
</script>
