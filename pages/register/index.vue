<template>
  <div class="w-full bg-gray-600">
    <div
      v-if="$nuxt.isOffline"
      class="w-full bg-red-300 text-red-600 text-center px-4 py-2 text-lg font-bold tracking-widest uppercase"
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
        <form @submit.prevent="register">
          <div class="">
            <label class="text-gray-500"
              ><span class="text-red-500">*</span>Name</label
            >
            <input
              type="text"
              id="username"
              name="username"
              v-model.trim="$v.username.$model"
              placeholder="Enter your name"
              autocomplete="given-name"
              aria-describedby="username"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <span
              v-if="!$v.username.required && $v.username.$dirty"
              class="text-red-500"
              >Name cannot be empty</span
            >
            <span
              v-if="!$v.username.minLength && $v.username.$dirty"
              class="text-red-500"
              >Name cannot be less than 3 characters</span
            >
            <br />

            <label class="text-gray-500"
              ><span class="text-red-500">*</span>Staff No.</label
            >
            <input
              type="number"
              id="staffNo"
              name="staffNo"
              v-model.trim="$v.staffNo.$model"
              placeholder="Enter your staff No. here"
              autocomplete="given-name"
              aria-describedby="staffNo"
              class="rounded block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <span
              v-if="!$v.staffNo.required && $v.staffNo.$dirty"
              class="text-red-500"
              >StaffNo is required</span
            >
            <span
              v-if="!$v.staffNo.between && $v.staffNo.$dirty"
              class="text-red-500"
              >StaffNo is between 100 - 999</span
            >
            <br />

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
              ><span class="text-red-500">*</span>Confirm password</label
            >
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              v-model.trim="$v.confirmPassword.$model"
              placeholder="Confirm your password here"
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

            <button
              type="button"
              @click="openModal"
              class="uppercase text-gray-700 text-xl bg-yellow-500 mt-2 font-bold tracking-widest py-4 rounded block w-full focus:outline-none hover:bg-yellow-600 hover:text-gray-300"
            >
              {{ loading ? "Please wait..." : "register" }}
            </button>

            <p class="text-gray-400 text-sm mt-4">
              Already registered?
              <n-link to="/login"
                ><span class="text-yellow-500 font-semibold"
                  >login here.</span
                ></n-link
              >
            </p>
          </div>
          <div
            v-if="toggleModal"
            class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
          >
            <div class="relative w-auto mx-4 max-w-2xl">
              <div
                class="pt-4 rounded-lg overflow-hidden bg-white w-full shadow-2xl flex flex-col border border-pink-600"
              >
                <div class="text-2xl text-gray-700 font-bold text-center px-4">
                  Please confirm your information
                </div>
                <p class="tracking-widest px-4 mt-4">Name: {{ username }}</p>
                <p class="tracking-widest px-4">Staff No: {{ staffNo }}</p>

                <p class="tracking-widest px-4 mb-4">Email: {{ email }}</p>
                <div
                  class="w-full py-4 block flex justify-between items-center px-4 bg-pink-600"
                >
                  <button
                    type="button"
                    @click="closeModal"
                    class="text-white font-bold tracking-widest text-lg hover:text-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="text-white font-bold tracking-widest text-lg hover:text-gray-500 focus:outline-none"
                  >
                    Yes, I confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="toggleModal"
            class="absolute inset-0 z-40 opacity-25 bg-black"
          ></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  between,
  alpha,
  email,
  sameAs,
} from "vuelidate/lib/validators";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

export default {
  middleware: "guest",
  data() {
    return {
      staffNo: null,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      loading: false,
      toggleModal: false,
      confirmModal: false,
      fillFields: false,
    };
  },
  validations: {
    staffNo: {
      required,
      between: between(100, 999),
    },
    username: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      email,
    },
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
    openModal() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.toggleModal = true;
      } else {
        this.$toast.error("All fields are *REQUIRED*. Fill them please.");
      }
    },
    async register() {
      this.loading = true;
      this.toggleModal = false;
      try {
        this.$axios.setToken(false);
        await this.$axios.post("auth/local/register", {
          staffNo: this.staffNo,
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$toast.success("Registration successful. You can login now.");
        this.loading = false;
        this.$router.push("/login");
        this.staffNo = null;
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      } catch (e) {
        this.loading = false;
        this.$toast.error(e.response.data.message[0].messages[0].message);
      }
    },
    closeModal() {
      this.toggleModal = false;
    },
  },
};
</script>