<template>
  <div class="bg-gray-400">
    <!-- <div
      
      class="mt-8 bg-green-500 py-8 px-4 text-center text-xl font-semibold text-gray-200 tracking-widest"
    >
      Your message has been sent successfully and will be attended to
      accordingly.
    </div> -->
    <form @submit.prevent="sendMsg" class="grid grid-cols-1 gap-y-6 py-8">
     
      <div class="px-4">
        <label for="full_name" class="sr-only">Full name*</label>
        <div class="relative rounded-lg shadow-sm">
          <input
            v-model="form.name"
            required
            name="name"
            id="full_name"
            class="block w-full py-3 px-4 transition ease-in-out duration-150"
            placeholder="Full name"
          />
        </div>
      </div>
      <div class="px-4">
        <label for="email" class="sr-only">Email*</label>
        <div class="relative rounded-md shadow-sm">
          <input
            v-model="form.email"
            required
            name="emaiL"
            id="email"
            type="email"
            class="block w-full py-3 px-4 transition ease-in-out duration-150"
            placeholder="Email"
          />
        </div>
      </div>
      <!-- <div class="px-4">
        <label for="phone" class="sr-only">*Phone</label>
        <div class="relative rounded-md shadow-sm">
          <input
            v-model="form.phone"
            required
            name="phone"
            id="phone"
            class="form-input block w-full py-3 px-4 transition ease-in-out duration-150"
            placeholder="Phone No."
          />
        </div>
      </div> -->
      <!-- <div class="px-4">
        <label for="staffNo" class="sr-only">*StaffNo</label>
        <div class="relative rounded-md shadow-sm">
          <input
            v-model="staffNo"
            required
            name="staffNo"
            id="staffNo"
            class="block w-full py-3 px-4 transition ease-in-out duration-150"
            placeholder="Staff No."
          />
        </div>
      </div> -->
      <div class="px-4">
        <label for="message" class="sr-only">Message</label>
        <div class="relative rounded-md shadow-sm">
          <textarea
            required
            v-model="form.message"
            name="message"
            id="message"
            rows="4"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Message*"
          ></textarea>
        </div>
      </div>
      <div class="p-4">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="submit"
            class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            {{ loading ? "Sending Message..." : "Submit" }}
          </button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      loading: false,
      toastNote: false,
     
      form: {
        name: "",
        email: "",
        //   staffNo: "",
        // phone: "",
        message: "",
      },
    };
  },
  methods: {
    async sendMsg() {
      this.loading = true;
      try {
        const response = await this.$axios.$post(
          "/.netlify/functions/contact-mail",
          {
            name: this.form.name,
            email: this.form.email,
            // phone: this.form.phone,
            message: this.form.message,
          }
        );
        this.loading = false;
        this.$toast.success(response);
        this.form.name = "";
        this.form.email = "";
        // this.form.phone = '';
        this.form.message = "";
      } catch (error) {
        this.loading = false;
        this.$toast.error(error);
      }
    },
  },
};
</script>