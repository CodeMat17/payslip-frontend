<template>
  <div>
    <div class="fixed z-50 flex-1 w-full">
      <home-header />
    </div>

    <div class="w-full h-screen bg-gray-700 px-4 py-6 flex">
      <div
        class="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between"
      >
        <img
          src="@/assets/svg/transaction.svg"
          class="w-full h-64 px-8 md:px-4 order-first sm:order-last"
        />
        <div class="w-full">
          <div class="mt-8 sm:text-center">
            <div
              class="text-transparent bg-gradient-to-r bg-clip-text from-yellow-500 to-red-500"
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
              <button
                type="button"
                class="block w-full sm:max-w-sm sm:mx-auto bg-yellow-600 text-gray-200 text-2xl font-bold uppercase py-2 hover:bg-yellow-500 hover:text-gray-700 rounded tracking-widest"
              >
                Login
              </button>
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoLogin() {
      this.$router.push("/login");
    },
  },
};
</script>