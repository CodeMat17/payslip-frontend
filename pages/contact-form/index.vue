<template>
  <div>
    <!-- <div
      
      class="mt-8 bg-green-500 py-8 px-4 text-center text-xl font-semibold text-gray-200 tracking-widest"
    >
      Your message has been sent successfully and will be attended to
      accordingly.
    </div> -->
    <div class="mt-8">
      <p class="px-4 py-4 bg-gray-200 text-xl text-gray-700">Contact Form</p>
      <div>
        <form
        method="POST"
          @submit.prevent="sendMsg"
          class="px-4 py-6 space-y-4"
          netlify
          netlify-data="true"
        >
          <div class="">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              placeholder="Enter name"
              aria-describedby="name"
              class="block border-2 rounded-md w-full p-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
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
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              v-model="message"
              type="text"
              rows="4"
              aria-describedby="message"
              class="block border-2 w-full rounded-md p-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </div>
          <div data-netlify-recaptcha="true"></div>
          <br />
          <button
            type="sumbit"
            class="block w-full rounded-md text-gray-300 font-bold text-xl p-3 text-center bg-gray-700 tracking-widest uppercase"
          >
            {{ loading ? "Please wait.." : "Send" }}
          </button>
        </form>
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
      name: "",
      email: "",
      //   staffNo: "",
      // phone: "",
      message: "",
    };
  },
  methods: {
    async sendMsg() {
      this.loading = true;
      try {
        // const response = await this.$axios.$post('/.netlify/functions/contact-mail', {
        const response = await this.$axios.post("/messages", {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        this.$toast.success("Mail Sent");
        this.loading = false;
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (error) {
        this.loading = false;
        this.$toast.error(error);
      }
    },
  },
};
</script>