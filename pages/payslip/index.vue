<template>
  <div class="w-full bg-gray-100">
    <div class="">
      <Navbar />
    </div>

    <div
      v-if="$nuxt.isOffline"
      class="bg-red-300 text-red-600 text-center px-4 py-8 text-lg font-bold tracking-widest uppercase"
    >
      You are offline. Check your internet connection.
    </div>
    <div id="home" class="bg-gray-700 px-4 py-3">
      <div class="md:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto">
        <p class="text-gray-500 tracking-widest font-semibold text-xl">
          Welcome!
        </p>
        <p
          class="text-yellow-500 font-bold tracking-widest text-xl md:text-2xl truncate"
        >
          {{ loggedInUser.username }}
        </p>
        <div v-if="loggedInUser.totalNetEarnings" class="mt-12">
          <p
            class="text-center text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 via-red-500 to-pink-500 uppercase tracking-widest font-bold text-xl md:text-2xl"
          >
            Employee Data
          </p>
          <div
            class="my-1 flex items-center justify-between font-semibold md:text-xl"
          >
            <div class="text-gray-500 space-y-2">
              <p>Date of First Appt:</p>
              <p>GL:</p>
              <p>Step:</p>
              <p>File No:</p>
              <p>IPPIS No:</p>
              <p>PFA Name:</p>
              <p>Pension PIN:</p>
            </div>
            <div class="ml-2 text-gray-300 space-y-2 text-right">
              <p>{{ loggedInUser.dofa }}</p>
              <p>{{ loggedInUser.gl }}</p>
              <p>{{ loggedInUser.step }}</p>
              <p>{{ loggedInUser.staffNo }}</p>
              <p>{{ loggedInUser.ippisNo }}</p>
              <p>{{ loggedInUser.pfa }}</p>
              <p>{{ loggedInUser.penPIN }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="loggedInUser.totalNetEarnings"
      class="mt-4 px-4 md:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto"
    >
      <p
        class="text-center text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 via-red-500 to-pink-500 tracking-widest uppercase font-bold text-xl md:text-2xl"
      >
        Payslip
      </p>
      <p
        class="text-center tracking-wide text-gray-900 font-semibold md:text-xl"
      >
        As at Jan 2021
      </p>
      <div class="mt-4">
        <div class="bg-yellow-500 rounded">
          <h3 class="px-3 py-2 text-gray-900 text-xl md:text-2xl font-bold">
            Gross Earnings
          </h3>
        </div>
        <div
          class="my-1 flex items-start justify-between font-semibold md:text-xl"
        >
          <div class="text-gray-600 space-y-3">
            <p class="truncate">CONPSS Cons Salary02</p>
            <p>WEIGHING ALLW.</p>
            <p class="text-gray-900 font-bold">TOTAL</p>
          </div>
          <div class="ml-2 text-gray-900 text-right space-y-3">
            <p>{{ loggedInUser.conpssSal }}</p>
            <p>{{ loggedInUser.weighing }}</p>
            <p class="font-bold">N{{ loggedInUser.totalGrossEarning }}</p>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="bg-yellow-500 rounded">
          <h3 class="px-3 py-2 text-gray-900 text-xl md:text-2xl font-bold">
            Gross Deductions
          </h3>
        </div>
        <div
          class="my-1 flex items-start justify-between font-semibold md:text-xl"
        >
          <div class="text-gray-600 space-y-3">
            <p>NHF</p>
            <p>PENSION</p>
            <p>TAX</p>
            <p>UNION DUES</p>
            <p>COOP CONTRIBUTION</p>
            <p>COOP LOAN</p>
            <p class="text-gray-900 font-bold">TOTAL</p>
          </div>
          <div class="ml-2 text-gray-900 text-right space-y-3">
            <p>{{ loggedInUser.nhf }}</p>
            <p>{{ loggedInUser.pension }}</p>
            <p>{{ loggedInUser.tax }}</p>
            <p>{{ loggedInUser.unionDues }}</p>
            <p>{{ loggedInUser.coopCont }}</p>
            <p>{{ loggedInUser.coopLoan }}</p>
            <p class="font-bold">N{{ loggedInUser.totalGrossDeduction }}</p>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="bg-yellow-500 rounded">
          <h3 class="px-3 py-2 text-gray-900 text-xl md:text-2xl font-bold">
            Payment Summary
          </h3>
        </div>
        <div
          class="my-1 flex items-start justify-between font-semibold md:text-xl"
        >
          <div class="text-gray-600 space-y-3">
            <p>TOTAL GROSS EARNINGS</p>
            <p>TOTAL GROSS DEDUCTIONS</p>
            <p class="text-gray-900 font-bold">TOTAL NET EARNINGS</p>
          </div>
          <div class="ml-2 text-gray-900 text-right space-y-3">
            <p>{{ loggedInUser.totalGrossEarning }}</p>
            <p>{{ loggedInUser.totalGrossDeduction }}</p>
            <p class="font-bold">N{{ loggedInUser.totalNetEarnings }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="loggedInUser.totalNetEarnings"
      class="w-full mt-4 bg-gradient-to-r from-yellow-500 to-red-500"
    >
      <div class="p-4">
        <div
          id="download"
          class="uppercase text-center my-2 font-bold text-xl md:text-2xl text-gray-900 tracking-widest"
        >
          download Payslip
        </div>
        <div class="w-32 h-1 bg-gray-900 mx-auto"></div>
      </div>
      <div
        class="sm:flex sm:items-center sm:justify-center mt-4 sm:w-5/6 md:w-2/3 lg:w-1/2 mx-auto"
      >
        <div
          class="w-32 my-8 mx-auto border border-gray-700 rounded-xl overflow-hidden shadow-xl"
        >
          <n-link to="/current-payslip">
            <div class="bg-gray-700 py-2">
              <svg
                class="w-16 h-16 fill-current text-gray-300 mx-auto animate-pulse"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 14.5C19.1 14.5 20.1 14.9 20.8 15.7L22 14.5V18.5H18L19.8 16.7C19.3 16.3 18.7 16 18 16C16.6 16 15.5 17.1 15.5 18.5S16.6 21 18 21C18.8 21 19.5 20.6 20 20H21.7C21.1 21.5 19.7 22.5 18 22.5C15.8 22.5 14 20.7 14 18.5S15.8 14.5 18 14.5M11.7 20H11.3L10.9 17.4C9.7 17.2 8.7 16.5 7.9 15.6L5.5 16.6L4.7 15.3L6.8 13.7C6.4 12.5 6.4 11.3 6.8 10.1L4.7 8.7L5.5 7.4L7.9 8.4C8.7 7.5 9.7 6.9 10.9 6.6L11.2 4H12.7L13.1 6.6C14.3 6.8 15.4 7.5 16.1 8.4L18.5 7.4L19.3 8.7L17.2 10.2C17.4 10.8 17.5 11.4 17.5 12H18C18.5 12 19 12.1 19.5 12.2V12L19.4 11L21.5 9.4C21.7 9.2 21.7 9 21.6 8.8L19.6 5.3C19.5 5 19.3 5 19 5L16.5 6C16 5.6 15.4 5.3 14.8 5L14.4 2.3C14.5 2.2 14.2 2 14 2H10C9.8 2 9.5 2.2 9.5 2.4L9.1 5.1C8.5 5.3 8 5.7 7.4 6L5 5C4.7 5 4.5 5 4.3 5.3L2.3 8.8C2.2 9 2.3 9.2 2.5 9.4L4.6 11L4.5 12L4.6 13L2.5 14.7C2.3 14.9 2.3 15.1 2.4 15.3L4.4 18.8C4.5 19 4.7 19 5 19L7.5 18C8 18.4 8.6 18.7 9.2 19L9.6 21.7C9.6 21.9 9.8 22.1 10.1 22.1H12.6C12.1 21.4 11.9 20.7 11.7 20M16 12.3V12C16 9.8 14.2 8 12 8S8 9.8 8 12C8 14.2 9.8 16 12 16C12.7 14.3 14.2 12.9 16 12.3M10 12C10 10.9 10.9 10 12 10S14 10.9 14 12 13.1 14 12 14 10 13.1 10 12Z"
                />
              </svg>
            </div>
            <div
              class="text-xl text-center py-2 text-gray-700 bg-gray-300 font-semibold tracking-widest"
            >
              Current
            </div>
          </n-link>
        </div>

        <div
          class="my-8 w-32 mx-auto border border-gray-700 rounded-xl overflow-hidden shadow-xl"
        >
          <n-link to="/previous-payslip">
            <div class="bg-gray-700 py-2">
              <svg
                class="w-16 h-16 fill-current text-gray-300 mx-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 14.5C19.1 14.5 20.1 14.9 20.8 15.7L22 14.5V18.5H18L19.8 16.7C19.3 16.3 18.7 16 18 16C16.6 16 15.5 17.1 15.5 18.5S16.6 21 18 21C18.8 21 19.5 20.6 20 20H21.7C21.1 21.5 19.7 22.5 18 22.5C15.8 22.5 14 20.7 14 18.5S15.8 14.5 18 14.5M11.7 20H11.3L10.9 17.4C9.7 17.2 8.7 16.5 7.9 15.6L5.5 16.6L4.7 15.3L6.8 13.7C6.4 12.5 6.4 11.3 6.8 10.1L4.7 8.7L5.5 7.4L7.9 8.4C8.7 7.5 9.7 6.9 10.9 6.6L11.2 4H12.7L13.1 6.6C14.3 6.8 15.4 7.5 16.1 8.4L18.5 7.4L19.3 8.7L17.2 10.2C17.4 10.8 17.5 11.4 17.5 12H18C18.5 12 19 12.1 19.5 12.2V12L19.4 11L21.5 9.4C21.7 9.2 21.7 9 21.6 8.8L19.6 5.3C19.5 5 19.3 5 19 5L16.5 6C16 5.6 15.4 5.3 14.8 5L14.4 2.3C14.5 2.2 14.2 2 14 2H10C9.8 2 9.5 2.2 9.5 2.4L9.1 5.1C8.5 5.3 8 5.7 7.4 6L5 5C4.7 5 4.5 5 4.3 5.3L2.3 8.8C2.2 9 2.3 9.2 2.5 9.4L4.6 11L4.5 12L4.6 13L2.5 14.7C2.3 14.9 2.3 15.1 2.4 15.3L4.4 18.8C4.5 19 4.7 19 5 19L7.5 18C8 18.4 8.6 18.7 9.2 19L9.6 21.7C9.6 21.9 9.8 22.1 10.1 22.1H12.6C12.1 21.4 11.9 20.7 11.7 20M16 12.3V12C16 9.8 14.2 8 12 8S8 9.8 8 12C8 14.2 9.8 16 12 16C12.7 14.3 14.2 12.9 16 12.3M10 12C10 10.9 10.9 10 12 10S14 10.9 14 12 13.1 14 12 14 10 13.1 10 12Z"
                />
              </svg>
            </div>

            <div
              class="text-xl text-center py-2 text-gray-700 bg-gray-300 font-semibold tracking-widest"
            >
              Previous
            </div>
          </n-link>
        </div>

        <div
          class="w-32 my-8 mx-auto border border-gray-700 rounded-xl overflow-hidden shadow-xl"
        >
          <n-link to="/prePrevious-payslip">
            <div class="bg-gray-700 py-2">
              <svg
                class="w-16 h-16 fill-current text-gray-300 mx-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 14.5C19.1 14.5 20.1 14.9 20.8 15.7L22 14.5V18.5H18L19.8 16.7C19.3 16.3 18.7 16 18 16C16.6 16 15.5 17.1 15.5 18.5S16.6 21 18 21C18.8 21 19.5 20.6 20 20H21.7C21.1 21.5 19.7 22.5 18 22.5C15.8 22.5 14 20.7 14 18.5S15.8 14.5 18 14.5M11.7 20H11.3L10.9 17.4C9.7 17.2 8.7 16.5 7.9 15.6L5.5 16.6L4.7 15.3L6.8 13.7C6.4 12.5 6.4 11.3 6.8 10.1L4.7 8.7L5.5 7.4L7.9 8.4C8.7 7.5 9.7 6.9 10.9 6.6L11.2 4H12.7L13.1 6.6C14.3 6.8 15.4 7.5 16.1 8.4L18.5 7.4L19.3 8.7L17.2 10.2C17.4 10.8 17.5 11.4 17.5 12H18C18.5 12 19 12.1 19.5 12.2V12L19.4 11L21.5 9.4C21.7 9.2 21.7 9 21.6 8.8L19.6 5.3C19.5 5 19.3 5 19 5L16.5 6C16 5.6 15.4 5.3 14.8 5L14.4 2.3C14.5 2.2 14.2 2 14 2H10C9.8 2 9.5 2.2 9.5 2.4L9.1 5.1C8.5 5.3 8 5.7 7.4 6L5 5C4.7 5 4.5 5 4.3 5.3L2.3 8.8C2.2 9 2.3 9.2 2.5 9.4L4.6 11L4.5 12L4.6 13L2.5 14.7C2.3 14.9 2.3 15.1 2.4 15.3L4.4 18.8C4.5 19 4.7 19 5 19L7.5 18C8 18.4 8.6 18.7 9.2 19L9.6 21.7C9.6 21.9 9.8 22.1 10.1 22.1H12.6C12.1 21.4 11.9 20.7 11.7 20M16 12.3V12C16 9.8 14.2 8 12 8S8 9.8 8 12C8 14.2 9.8 16 12 16C12.7 14.3 14.2 12.9 16 12.3M10 12C10 10.9 10.9 10 12 10S14 10.9 14 12 13.1 14 12 14 10 13.1 10 12Z"
                />
              </svg>
            </div>
            <div
              class="flex justify-center items-center text-xl text-center py-2 text-gray-700 bg-gray-300 font-semibold tracking-widest"
            >
              <svg style="width: 30px; height: 30px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M14.58,16.59L19.17,12L14.58,7.41L16,6L22,12L16,18L14.58,16.59M8.58,16.59L13.17,12L8.58,7.41L10,6L16,12L10,18L8.58,16.59M2.58,16.59L7.17,12L2.58,7.41L4,6L10,12L4,18L2.58,16.59Z"
                />
              </svg>
            </div>
          </n-link>
        </div>
        <br />
      </div>
    </div>
    <div v-if="loggedInUser.totalNetEarnings" class="bg-gray-800">
      <div class="py-8 px-4 md:flex md:items-center md:justify-between">
        <div>
          <p
            class="text-center text-3xl text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 via-red-500 to-pink-500 font-bold tracking-widest"
          >
            Payslip
          </p>
          <p class="text-center text-yellow-600 font-semibold tracking-widest">
            vault
          </p>
        </div>
        <div>
          <p class="text-center text-gray-400 text-lg mt-4">
            &copy; {{ new Date().getFullYear() }} - PAYSLIP vault. All rights
            reserved.
          </p>
          <div class="sm:flex sm:items-center sm:justify-between">
            <div
              class="flex flex-col justify-center items-center text-gray-300 py-3 text-lg font-semibold"
            >
              <p>Contact Us</p>
              <n-link to="/contact-form">
                <svg class="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.07 13.88L13 19.94V22H15.06L21.12 15.93M22.7 13.58L21.42 12.3C21.32 12.19 21.18 12.13 21.04 12.13C20.89 12.14 20.75 12.19 20.65 12.3L19.65 13.3L21.7 15.3L22.7 14.3C22.89 14.1 22.89 13.78 22.7 13.58M11 18H4V8L12 13L20 8V10H22V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H11V18M20 6L12 11L4 6H20Z"
                  />
                </svg>
              </n-link>
            </div>
            <a href="https://matthewchukwu.netlify.app" target="_blank">
              <div class="mt-4 text-gray-300 flex justify-center items-center">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7.73 11.93C7.73 13.65 7.71 13.76 7.5 14C7.31 14.17 7.12 14.23 6.74 14.23L6.23 14.24L6.2 11.97L6.18 9.7H6.7C7.05 9.7 7.3 9.77 7.47 9.91C7.71 10.12 7.73 10.16 7.73 11.93M22 7.5V16.5C22 17.61 21.11 18.5 20 18.5H4C2.89 18.5 2 17.61 2 16.5V7.5C2 6.39 2.89 5.5 4 5.5H20C21.11 5.5 22 6.39 22 7.5M8.93 11.73C8.9 9.89 8.88 9.74 8.64 9.34C8.24 8.66 7.79 8.5 6.28 8.5H5V15.5H6.21C7.54 15.5 8.1 15.33 8.5 14.79C8.91 14.26 9 13.81 8.93 11.73M13.12 8.5H11.64C10.15 8.5 10.14 8.5 9.93 8.78S9.7 9.21 9.7 12V14.96L9.97 15.23C10.22 15.5 10.28 15.5 11.68 15.5H13.12V14.31L12.03 14.27L10.93 14.24V12.6L11.61 12.57L12.27 12.53V11.34H10.88V9.7H13.12V8.5M19 8.56C19 8.5 18.7 8.5 18.34 8.5L17.66 8.56L17.07 10.91C16.69 12.39 16.45 13.18 16.4 13.04C16.32 12.77 15.26 8.6 15.26 8.55C15.26 8.5 14.95 8.5 14.58 8.5H13.89L14.3 10.05C14.5 10.92 14.89 12.33 15.11 13.2C15.45 14.55 15.57 14.85 15.86 15.14C16.06 15.36 16.31 15.5 16.47 15.5C16.8 15.5 17.23 15.16 17.37 14.77C17.5 14.5 19 8.69 19 8.56Z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!loggedInUser.totalNetEarnings"
      class="px-4 py-8 bg-red-200 font-semibold text-center text-lg text-red-700"
    >
      We noticed you have not subscribed for this service yet. Kindly contact
      the admin on how to subscribe.
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
};
</script>