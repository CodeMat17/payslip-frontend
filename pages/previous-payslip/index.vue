<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-600 text-center px-4 py-8 text-lg font-bold tracking-widest uppercase"
    >
      You are offline. Check your internet connection.
    </div>

    <div class="mt-8 py-8 px-4 flex items-center justify-center">
      <div
        class="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 rounded-t-lg rounded-b-3xl overflow-hidden shadow-2xl"
      >
        <img
          v-if="loggedInUser.previousPslip"
          :src="loggedInUser.previousPslip"
          alt="payslip preview"
        />
        <p
          v-if="!loggedInUser.previousPslip"
          class="text-center py-4 text-lg font-bold tracking-widest text-gray-700"
        >
          Loading...
        </p>
        <div class="flex items-center justify-between px-4 py-4">
          <button
            class="uppercase font-semibold tracking-widest text-lg text-gray-800 rounded-lg py-1 px-4 hover:text-pink-600"
            @click="goBack"
          >
            cancel
          </button>
          <a :href="loggedInUser.previousPslip" download target="_blank"
            ><button
            v-if="loggedInUser.previousPslip"
              class="uppercase font-semibold tracking-widest text-lg text-gray-800 hover:text-gray-400 rounded-lg py-1 px-4"
            >
              download
            </button></a
          >
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