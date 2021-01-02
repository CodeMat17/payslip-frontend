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
            Login
          </h3>
        </div>

        <form>
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
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <span
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-red-500"
              >Email is required</span
            >
            <br />
            <label class="text-gray-500"
              ><span class="text-red-500">*</span>Password</label
            >
            <input
              type="password"
              id="password"
              name="password"
              v-model.trim="$v.password.$model"
              placeholder="Enter your password here"
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
              login
            </button>
            <span class="text-red-400 tracking-wide text-xs">Remember to LOGOUT when you are done.</span>

            <p class="text-gray-400 text-lg mt-4">
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
    <div
      v-if="errorModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    >
      <div class="relative w-auto mx-4 max-w-2xl">
        <div
          class="pt-4 rounded-lg overflow-hidden bg-white w-full shadow-2xl flex flex-col"
        >
          <div class="text-2xl text-red-500 font-bold text-center px-4">
            Error
          </div>
          <span class="tracking-widest px-4">{{ errorMsg }}</span>
          <button
            @click="errorModal = false"
            class="bg-red-500 text-white py-2 mt-4 font-bold tracking-widest text-lg"
          >
            OK
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="errorModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>
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
      errorModal: false,
      errorMsg: "",
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
          await this.$auth.loginWith("local", {
            data: {
              identifier: this.email,
              password: this.password,
            },
          });
          this.loading = false;
          this.$router.push("/payslip");
          this.email = "";
          this.password = "";
        } catch (e) {
          this.loading = false;
          // put modal here
          this.errorModal = true;
          this.errorMsg = e.response.data.message[0].messages[0].message;
        }
      } else {
        this.loading = false;
        this.errorModal = true;
        this.errorMsg = "Enter the correct data into the form fields above.";
      }
    },
  },
};
</script>