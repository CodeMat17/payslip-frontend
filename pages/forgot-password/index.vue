<template>
  <div class="w-full h-screen bg-gray-600">
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-600 text-center px-4 py-2 text-lg font-bold tracking-widest uppercase"
    >
      You are offline. Check your internet connection.
    </div>

    <div class="w-full mx-auto px-4 pt-16 flex">
      <div
        class="w-full sm:max-w-xl mx-auto rounded-lg shadow-xl bg-gray-900 p-4"
      >
        <div class="py-4">
          <h3
            class="text-yellow-500 font-bold uppercase text-2xl tracking-widest"
          >
            Forgot password?
          </h3>
        </div>

        <form @submit.prevent="forgotPw">
          <div class="">
            <label class="text-gray-500"
              ><span class="text-red-500">*</span>Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              v-model.trim="$v.email.$model"
              placeholder="Enter your email here"
              autocomplete="given-name"
              aria-describedby="email"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <span
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-red-500"
              >Email is required</span
            >
            <span v-if="!$v.email.email && $v.email.$dirty" class="text-red-500"
              >Enter a valid email</span
            >
            <br />
            <button
              type="submit"
              class="uppercase text-gray-700 text-lg bg-yellow-500 my-4 font-bold tracking-widest py-4 px-2 rounded block w-full focus:outline-none hover:bg-yellow-600 hover:text-gray-300"
            >
              {{ loading ? "Please wait..." : "submit" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
export default {
  middleware: "guest",
  data() {
    return {
      email: "",
      loading: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    async forgotPw() {
      this.loading = true;
      if (!this.$v.$anyError) {
        await this.$axios
          .post("auth/forgot-password", {
            email: this.email,
          })
          .then((response) => {
            this.loading = false;
            this.email = "";
            this.$toast.success("Email received, check your inbox.");
          })
          .catch((error) => {
            this.loading = false;
            this.$toast.error('Error... maybe an invalid email or poor internet.');
          });
      } else {
        this.loading = false;
        this.$toast.error("Enter the correct data into the form fields above.");
      }
    },
  },
};
</script>