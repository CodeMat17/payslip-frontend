<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-600 text-center px-4 py-2 text-lg font-bold tracking-widest uppercase"
    >
      You are offline. Check your internet connection.
    </div>
    <div v-if="isBot" class="px-4">
      <div
        class="mt-16 max-w-2xl mx-auto text-center tracking-widest bg-red-300 text-red-700 font-semibold text-lg rounded-lg p-4"
      >
        Hmmmm! You have proven to be a bot! I've destroyed the form from the
        page, and acted like you successfully sent the form.
      </div>
    </div>

    <div v-else>
      <div
        v-if="mailSent"
        class="mt-32 max-w-lg mx-auto text-center tracking-widest bg-green-300 py-6 rounded-lg"
      >
        <p class="text-2xl text-green-700">Mail submitted!</p>
        <button
          @click="$router.back()"
          class="mt-6 uppercase bg-green-700 text-green-300 font-semibold px-4 py-2 rounded-lg hover:bg-green-200 hover:text-green-700 hover:font-bold focus:outline-none focus:bg-green-100"
        >
          go back
        </button>
      </div>
      <div v-else class="mt-8 max-w-2xl mx-auto">
        <p
          class="mx-4 px-4 py-4 bg-gray-200 text-xl text-gray-700 font-bold tracking-widest rounded-t-lg"
        >
          Contact Form
        </p>
        <div>
          <form @submit.prevent="sendMsg" class="px-4 py-6 space-y-4">
            <div class="">
              <label for="name"
                >Name<span class="text-red-500 font-bold">*</span></label
              >
              <input
                required
                type="text"
                name="name"
                id="name"
                v-model="name"
                placeholder="Enter name"
                aria-describedby="name"
                class="block border-2 rounded-md w-full p-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
            </div>
            <div class="hidden">
              <label class="sr-only"
                >Don’t fill this out if you're human:
              </label>
              <input
                v-model="bot"
                name="bot-field"
                placeholder="This field is only for the robots."
                class="block w-full py-3 transition ease-in-out duration-150"
              />
            </div>
            <div>
              <label for="staffNo"
                >Staff No.<span class="text-red-500 font-bold">*</span></label
              >
              <input
                required
                type="number"
                name="staffNo"
                id="staffNo"
                v-model="staffNo"
                placeholder="Enter your staffNo."
                aria-describedby="staffNo"
                class="block border-2 rounded-md w-full p-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
            </div>
            <div>
              <label for="phoneNo"
                >Phone No.<span class="text-red-500 font-bold">*</span></label
              >
              <input
                required
                type="number"
                name="phoneNo"
                id="phoneNo"
                v-model="phoneNo"
                placeholder="Enter your phone No."
                aria-describedby="phoneNo"
                class="block border-2 rounded-md w-full p-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
            </div>
            <div>
              <label for="email"
                >Email<span class="text-red-500 font-bold">*</span></label
              >
              <input
                required
                type="email"
                name="email"
                id="email"
                v-model="email"
                placeholder="Enter email"
                aria-describedby="email"
                class="block border-2 rounded-md w-full p-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
            </div>
            <div>
              <label for="message"
                >Message<span class="text-red-500 font-bold">*</span></label
              >
              <textarea
                required
                name="message"
                id="message"
                v-model="message"
                type="text"
                rows="4"
                aria-describedby="message"
                class="block border-2 w-full rounded-md p-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
            </div>
            <button
              type="sumbit"
              class="block w-full rounded-md text-gray-300 font-bold text-xl p-3 text-center bg-gray-700 tracking-widest uppercase"
            >
              {{ loading ? "Please wait..." : "Send" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      loading: false,
      mailSent: false,
      isBot: false,
      name: "",
      bot: null,
      email: "",
      staffNo: "",
      phoneNo: "",
      message: "",
    };
  },
  methods: {
    sendMsg() {
      this.loading = true;
      /* This is where I check if the bot field has a value.
         Only bots will fill this out. */
      if (this.bot != null) {
        this.isBot = true;
      } else {
        // Otherwise the form will try to go through.
        this.$axios
          .post("/messages", {
            name: this.name,
            email: this.email,
            staffNo: this.staffNo,
            phoneNo: this.phoneNo,
            message: this.message,
          })
          .then((response) => {
            this.loading = false;
            this.name = "";
            this.email = "";
            this.staffNo = "";
            this.phoneNo = "";
            this.message = "";
            this.$toast.success("Mail Sent");
            this.mailSent = true;
          })
          .catch((error) => {
            this.loading = false;
            this.$toast.error(error);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>