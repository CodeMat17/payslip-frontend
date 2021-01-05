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
            Reset password
          </h3>
        </div>

        <form @submit.prevent="resetPw">
          <div class="">
            <label class="text-gray-500"
              ><span class="text-red-500">*</span>New password</label
            >
            <input
              type="password"
              id="password"
              name="password"
              v-model.trim="$v.password.$model"
              placeholder="Enter new password here"
              autocomplete="given-name"
              aria-describedby="password"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <span
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-red-500"
              >Password is required</span
            >
            <span
              v-if="!$v.password.minLength && $v.password.$dirty"
              class="text-red-500"
              >Password cannot be less than
              {{ $v.password.$params.minLength.min }} characters</span
            >
            <span
              v-if="!$v.password.maxLength && $v.password.$dirty"
              class="text-red-500"
              >Password cannot be more than
              {{ $v.password.$params.maxLength.max }} characters</span
            >
            <br />

            <label class="text-gray-500"
              ><span class="text-red-500">*</span>Confirm new password</label
            >
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              v-model.trim="$v.confirmPassword.$model"
              placeholder="Enter new password here"
              autocomplete="given-name"
              aria-describedby="confirmPassword"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <span
              v-if="!$v.confirmPassword.required && $v.confirmPassword.$dirty"
              class="text-red-500"
              >Confirm password is required</span
            >
            <span
              v-if="!$v.confirmPassword.sameAs && $v.confirmPassword.$dirty"
              class="text-red-500"
              >Your passwords does not match</span
            >
            <br />
            <br />
            <button
              type="submit"
              class="uppercase text-gray-700 text-lg bg-yellow-500 my-4 font-bold tracking-widest py-4 px-2 rounded block w-full focus:outline-none hover:bg-yellow-600 hover:text-gray-300"
            >
              {{ loading ? "Please wait..." : "reset" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
export default {
  middleware: "guest",
  data() {
    return {
      password: "",
      confirmPassword: "",
      loading: false,
    };
  },
  validations: {
    password: {
      required,
      maxLength: maxLength(12),
      minLength: minLength(6),
    },
    confirmPassword: {
      required,
      sameAs: sameAs("password"),
    },
  },
  methods: {
    async resetPw() {
      this.loading = true;
      if (!this.$v.$anyError) {
        await this.$axios
          .post("auth/reset-password", {
            code: "privateCode", // code contained in the reset link of step 3.
            password: this.password,
            passwordConfirmation: this.confirmPassword,
          })
          .then((response) => {
            this.loading = false;
            this.$toast.success("Your password has been reset.");
          })
          .catch((error) => {
            this.loading = false;
            this.$toast.error(error.response);
          });
      } else {
        this.loading = false;
        this.$toast.error("Enter the correct data into the form fields above.");
      }
    },
  },
};
</script>