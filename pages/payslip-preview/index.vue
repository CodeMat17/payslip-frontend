<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-600 text-center px-4 py-8 text-lg font-bold tracking-widest uppercase"
    >
      You are offline. Check your internet connection.
    </div>
    <div class="w-full py-6 bg-gray-200">
      <div class="flex justify-end px-4 md:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto">
        <div
          @click="goBack"
          class="w-12 h-12 flex justify-center border-2 border-gray-900 items-center text-center bg-white rounded-full animate-pulse"
        >
          <img :src="require('@/assets/svg/arrow-left.png')" />
        </div>
      </div>
      <div class="mt-4 w-full p-2 md:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto">
        <div class="p-2 bg-gray-100 rounded-lg">
          <div class="p-2 mx-auto">
            PAYSLIP
            <br />

            {{ loggedInUser.email }}
            <br />
<!-- https://res.cloudinary.com/mctony17/image/upload/v1609448777/p-slip.webp -->
            <div>
              <img :url="loggedInUser.p-slip" />
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
};
</script>