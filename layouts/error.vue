<template>
  <div>
    <div v-if="error.statusCode === 404"
      class="w-full h-screen flex flex-col justify-center items-center tracking-widest"
      :style="{
        'background-image': `url(${require('@/assets/svg/error.svg')})`,
      }"
    >
          <h1 class="text-6xl font-black text-red-600">404</h1>

      <h1 class="text-6xl font-semibold text-red-600">Nsogbu!</h1>
            <h1 class="text-2xl font-semibold text-red-600">Page not found</h1>

      <n-link
        to="/"
        class="mt-12 font-semibold text-2xl border border-gray-500 rounded-md px-4 py-2 bg-gray-500 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
        >Return to Home</n-link
      >
    </div>

   <div v-else
      class="w-full h-screen flex flex-col justify-center items-center tracking-widest"
      :style="{
        'background-image': `url(${require('@/assets/svg/error.svg')})`,
      }"
    >
          <h1 class="text-6xl font-black text-red-600">505</h1>

      <h1 class="text-6xl font-semibold text-red-600">Nsogbu!</h1>
            <h1 class="text-2xl font-semibold text-red-600">A error occured</h1>

      <n-link
        to="/"
        class="mt-12 font-semibold text-2xl border border-gray-500 rounded-md px-4 py-2 bg-gray-500 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
        >Return to Home</n-link
      >
    </div>
  </div>
</template>

<script>
export default {
     props: ['error'],
    layout: 'error'
};
</script>

<style>
</style>