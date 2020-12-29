<template>
  <div class="w-full bg-gray-600">
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-600 text-center px-4 py-8 text-lg font-bold tracking-widest uppercase"
    >
      You are offline. Check your internet connection.
    </div>
    <div class="w-full mx-auto px-4 py-8 flex">
      <div
        class="w-full sm:max-w-xl mx-auto rounded-lg shadow-xl bg-gray-900 p-4"
      >
        <div
          class="text-yellow-500 font-bold uppercase text-2xl py-4 tracking-widest"
        >
          Register
        </div>
        <form>
          <div class="">
            <!-- v-model.trim="$v.username.$model" -->
            <input
              type="text"
              id="username"
              name="username"
              v-model="username"
              placeholder="Name"
              autocomplete="given-name"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <!-- <span
              v-if="!$v.username.required && $v.username.$dirty"
              class="text-red-500"
              >Name cannot be empty</span
            > -->
            <!-- <span
              v-if="!$v.username.alpha && $v.username.$dirty"
              class="text-red-500"
              >Name cannot be empty</span
            >
            <span
              v-if="!$v.username.minLength && $v.username.$dirty"
              class="text-red-500"
              >Name cannot be less than 3 characters</span
            > -->
            <br />
            <!-- v-model.trim="$v.staffNo.$model" -->
            <input
              type="number"
              id="staffNo"
              name="staffNo"
              v-model="staffNo"
              placeholder="Staff No."
              autocomplete="given-name"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <!-- <span
              v-if="!$v.staffNo.required && $v.staffNo.$dirty"
              class="text-red-500"
              >StaffNo is required</span
            >
            <span
              v-if="!$v.staffNo.between && $v.staffNo.$dirty"
              class="text-red-500"
              >StaffNo is between 100 - 999</span
            > -->
            <br />
            <!-- v-model.trim="$v.email.$model" -->
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
            >
            <span
              v-if="!$v.password.minLength && $v.password.$dirty"
              class="text-red-500"
              >Password cannot be less than
              {{ $v.password.$params.minLength.min }} characters</span
            > -->
            <!-- <span
              v-if="!$v.password.maxLength && $v.password.$dirty"
              class="text-red-500"
              >Password cannot be more than
              {{ $v.password.$params.maxLength.max }} characters</span
            > -->
            <br />
            <!-- v-model.trim="$v.confirmPassword.$model" -->
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              v-model.trim="confirmPassword"
              placeholder="Confirm Password"
              autocomplete="given-name"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <!-- <span
              v-if="!$v.confirmPassword.required && $v.confirmPassword.$dirty"
              class="text-red-500"
              >Confirm password is required</span
            >
            <span
              v-if="!$v.confirmPassword.sameAs && $v.confirmPassword.$dirty"
              class="text-red-500"
              >Your passwords does not match</span
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
              v-else
              type="button"
              @click="register"
              class="uppercase text-gray-700 text-xl bg-yellow-500 mt-2 font-bold tracking-widest py-4 rounded block w-full focus:outline-none hover:bg-yellow-600 hover:text-gray-300"
            >
              Register
            </button>

            <p class="text-gray-400 text-lg mt-4">
              Already registered?
              <n-link to="/login"
                ><span class="text-yellow-500 font-semibold"
                  >login here.</span
                ></n-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>

    <!-- <div v-show="success" class="flex fixed bottom-0 inset-x-0">
      <div class="w-full">
        <div
          class="w-full bg-gray-200 rounded-t-lg border-green-300 border p-3 shadow-lg"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center h-24 justify-center">
              <div class="px-2 flex">
                <img src="@/assets/svg/warning.svg" />
              </div>
              <div class="ml-2 mr-6">
                <span class="font-semibold text-xl text-green-500">{{
                  success
                }}</span>
              </div>
            </div>
            <div class="px-2 flex ml-8">
              <button type="button">
                <svg
                  class="fill-current text-green-600"
                  @click="success = !success"
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
  </div>
</template>

<script>
// import {
//   required,
//   minLength,
//   maxLength,
//   between,
//   alpha,
//   email,
//   sameAs,
// } from "vuelidate/lib/validators";
// import Vue from "vue";
// import Vuelidate from "vuelidate";
// Vue.use(Vuelidate);

export default {
  middleware: "guest",
  data() {
    return {
      staffNo: null,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      // success: null,
      // successMsg: "",
      // error: null,
      // errorMsg: "",
      // formError: null,
      // formErrorMsg: "",
      loading: false,
    };
  },
  //   validations: {
  //     staffNo: {
  //       required,
  //       between: between(100, 999),
  //     },
  //     username: {
  //       required,
  //       alpha,
  //       minLength: minLength(3),
  //     },
  //     email: {
  //       required,
  //       email,
  //     },
  //     password: {
  //       required,
  //       maxLength: maxLength(12),
  //       minLength: minLength(6),
  //     },
  //     confirmPassword: {
  //       required,
  //       sameAs: sameAs("password"),
  //     },
  //   },
  methods: {
    async register() {
      this.loading = true;
      // this.error = null;
      // if (!this.$v.$anyError) {
      this.$toast.show("Registering you ... Please wiat");
      try {
        this.$axios.setToken(false);
        await this.$axios.post("auth/local/register", {
          staffNo: this.staffNo,
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$toast.show({
          type: "success",
          title: "Success",
          message: "Done!. You can login now.",
        });
        this.loading = false;
        // this.success = "Registration successful.";
        this.staffNo = null;
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.$router.push("/login");
        // setTimeout(() => {

        // }, 2000);
      } catch (e) {
        this.loading = false;
         this.$toast.show({
          type: "error",
          title: "Error",
          message: e.response.data.message[0].messages[0].message,
          timeout: 5
        });
        // this.error = e.response.data.message[0].messages[0].message;
      }
      // } else {
      //   this.loading = false;
      //   // this.formError = true;
      //   // this.formErrorMsg = "Wo! put your act together & complete the form.";
      // }
    },
  },
};
</script>