<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="px-4 py-2 bg-red-200 text-center text-red-700"
    >
      You are offline. Check your internet connection.
    </div>
    <div class="fixed z-50 flex-1 w-full">
      <home-header />
    </div>

    <div class="w-full h-screen bg-gray-700 px-4 py-6 flex">
      <div
        class="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between"
      >
        <img
          :src="require('@/assets/svg/transaction.svg')"
          class="w-full h-64 px-8 md:px-4 order-first sm:order-last"
        />
        <div class="w-full">
          <div class="mt-6 sm:text-center">
            <div
              class="text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 via-red-500 to-pink-500"
            >
              <p class="font-bold text-6xl tracking-widest">Payslip</p>
              <div class="animate-pulse">
                <p
                  class="font-bold text-gray-100 text-xl pl-1 tracking-widest leading-none"
                >
                  vault
                </p>
              </div>
            </div>
          </div>
          <div class="mt-16 w-full">
            <n-link to="/login">
              <p
                class="text-center uppercase w-full py-4 bg-yellow-600 sm:max-w-sm sm:mx-auto rounded-lg text-2xl text-gray-300 hover:bg-yellow-500 hover:text-gray-700 font-bold tracking-widest"
              >
                Login
              </p>
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>