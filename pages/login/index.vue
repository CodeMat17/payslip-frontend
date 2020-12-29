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
              >You must be a subscriber to have the information you seek. Contact admin for more
              info.</span
            >
          </p>
        </div>

        <!-- v-model.trim="$v.email.$model" -->
        <form>
          <div class="">
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              placeholder="Email"
              autocomplete="given-name"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <!-- <span
              v-if="!$v.email.required && $v.email.$dirty"
              class="text-red-500"
              >Email is required</span
            >
            <span v-if="!$v.email.email && $v.email.$dirty" class="text-red-500"
              >Enter a valid email</span
            > -->
            <br />

            <!-- v-model.trim="$v.password.$model" -->
            <input
              type="password"
              id="password"
              name="password"
              v-model="password"
              placeholder="Password"
              autocomplete="given-name"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <!-- <span
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-red-500"
              >Password is required</span
            > -->
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

            <p class="text-gray-400 text-lg mt-4">
              Forgot password?
              <n-link to="/"
                ><span class="text-yellow-500 font-semibold"
                  >Click here.</span
                ></n-link
              >
            </p>
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

    <!-- <div v-show="error" class="flex fixed bottom-0 inset-x-0">
      <div class="w-full">
        <div
          class="w-full bg-gray-200 rounded-t-lg border-red-300 border p-3 shadow-lg"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center h-24 justify-center">
              <div class="px-2 flex">
                <img src="@/assets/svg/warning.svg" />
              </div>
              <div class="ml-2 mr-6">
                <span class="font-semibold text-xl text-red-500">{{
                  error
                }}</span>
              </div>
            </div>
            <div class="px-2 flex ml-8">
              <button type="button">
                <svg
                  class="fill-current text-red-600"
                  @click="error = !error"
                  style="width: 24px; height: 24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div v-show="loginError" class="flex fixed bottom-0 inset-x-0">
      <div class="w-full">
        <div
          class="w-full bg-gray-200 rounded-t-lg border-red-300 border p-3 shadow-lg"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center h-24 justify-center">
              <div class="px-2 flex">
                <img src="@/assets/svg/warning.svg" />
              </div>
              <div class="ml-2 mr-6">
                <span class="font-semibold text-xl text-red-500">{{
                  loginErrorMsg
                }}</span>
              </div>
            </div>
            <div class="px-2 flex ml-8">
              <button type="button">
                <svg
                  class="fill-current text-red-600"
                  @click="loginError = !loginError"
                  style="width: 24px; height: 24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { required, email } from "vuelidate/lib/validators";
// import Vue from "vue";
// import Vuelidate from "vuelidate";
// Vue.use(Vuelidate);
export default {
  middleware: "guest",
  data() {
    return {
      email: "matthewnfvcb@gmail.com",
      password: "mmmmmm",
      // error: null,
      // errorMsg: null,
      // loginError: null,
      // loginErrorMsg: "",
      loading: false,
    };
  },
  //   validations: {
  //     email: {
  //       required,
  //       email,
  //     },
  //     password: {
  //       required,
  //     },
  //   },
  methods: {
    async login() {
      this.loading = true;
      // this.error = null;
      // if (!this.$v.$anyError) {
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
        this.email = "";
        this.password = "";
        this.loading = false;
        this.$router.push("/payslip");
      } catch (e) {
        this.loading = false;
        this.$toast.show({
          type: "danger",
          title: "Error",
          message: e.response.data.message[0].messages[0].message,
          timeout: 5,
        });
        // this.error = e.response.data.message[0].messages[0].message;
      }
      // } else {
      //   this.loading = false;
      //   // this.loginError = true;
      //   // this.loginErrorMsg =
      //   //   "Wo! better get you parameters right. Better dont be a SPY because we are watching";
      //   // setTimeout(() => {
      //   //   this.$router.push("/login"), 2000;
      //   // });
      //   this.$router.push("/login");
      // }
    },
  },
};
</script>