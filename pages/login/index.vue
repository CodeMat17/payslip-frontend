<template>
  <div class="w-full h-screen bg-gray-600">
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-600 text-center px-4 py-8 text-lg font-bold tracking-widest uppercase"
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
            Login
          </h3>
          <p class="text-red-500 text-sm">
            *<span class="text-gray-500"
              >You must be a subscriber to have the information you seek.
              Contact admin for more info.</span
            >
          </p>
        </div>

        <form>
          <div class="">
            <input
              type="email"
              id="email"
              name="email"
              v-model.trim="$v.email.$model"
              placeholder="Email"
              autocomplete="given-name"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <span
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-red-500"
              >Email is required</span
            >
            <br />

            <input
              type="password"
              id="password"
              name="password"
              v-model.trim="$v.password.$model"
              placeholder="Password"
              autocomplete="given-name"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <span
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-red-500"
              >Password is required</span
            >
            <br />
            <button
              v-if="loading"
              type="button"
              class="uppercase text-gray-700 text-xl bg-yellow-500 mt-6 font-bold tracking-widest py-4 rounded block w-full focus:outline-none hover:bg-yellow-600 hover:text-gray-300"
            >
              <img
                src="@/assets/svg/loading.svg"
                class="mx-auto animate-spin"
              />
            </button>
            <button
              type="button"
              v-else
              @click="login"
              class="uppercase text-gray-700 text-xl bg-yellow-500 mt-6 font-bold tracking-widest py-4 rounded block w-full focus:outline-none hover:bg-yellow-600 hover:text-gray-300"
            >
              submit
            </button>

            <p class="text-gray-400 text-lg">
              Have no account?
              <n-link to="/register"
                ><span class="text-yellow-500 font-semibold"
                  >Register here.</span
                ></n-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
export default {
  middleware: "guest",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },
  methods: {
    async login() {
      this.loading = true;
      if (!this.$v.$anyError) {
        try {
          this.$toast.show("Logging in ... Please wait.");
          await this.$auth.loginWith("local", {
            data: {
              identifier: this.email,
              password: this.password,
            },
          });
          this.$toast.show({
            type: "success",
            title: "Success",
            message: "You are logged in.",
          });          
          this.loading = false;
          this.$router.push("/payslip");
          this.email = "";
          this.password = "";
        } catch (e) {
          this.loading = false;
          this.$toast.show({
            type: "danger",
            title: "Error",
            message: e.response.data.message[0].messages[0].message,
            timeout: 5,
          });
        }
      } else {
        this.loading = false;
        this.$toast.show({
          type: "danger",
          title: "Error",
          message: "All fields are REQUIRED. See the red line(s)",
          timeout: 5,
        });
      }
    },
  },
};
</script>