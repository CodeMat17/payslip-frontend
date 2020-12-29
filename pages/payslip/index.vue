<template>  
    <div class="w-full bg-gray-100">
      <div class="">
        <Navbar />
      </div>
      
      <div v-if="$nuxt.isOffline" class="bg-red-300 text-red-600 text-center px-4 py-8 text-lg font-bold tracking-widest uppercase">You are offline. Check your internet connection.</div>
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
              class="text-center text-gray-500 uppercase tracking-widest font-bold text-xl md:text-2xl"
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
              <div class="ml-2 text-gray-300 space-y-2">
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
      <div v-if="loggedInUser.totalNetEarnings" class="mt-4 px-4 md:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto">
        <p
          class="text-center text-transparent bg-gradient-to-r bg-clip-text from-yellow-600 to-red-600 tracking-widest uppercase font-bold text-xl md:text-2xl"
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
      <div v-if="loggedInUser.totalNetEarnings" class="w-full mt-4 bg-gradient-to-r from-yellow-500 to-red-500">
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
            <a href="#">
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
            </a>
            <a href="#">
              <div
                class="text-xl text-center py-2 text-gray-700 bg-gray-300 font-semibold tracking-widest"
              >
                Jan 2021
              </div>
            </a>
          </div>

          <div
            class="my-8 w-32 mx-auto border border-gray-700 rounded-xl overflow-hidden shadow-xl"
          >
            <a href="#">
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
            </a>
            <a href="#">
              <div
                class="text-xl text-center py-2 text-gray-700 bg-gray-300 font-semibold tracking-widest"
              >
                Dec 2020
              </div>
            </a>
          </div>

          <div
            class="w-32 my-8 mx-auto border border-gray-700 rounded-xl overflow-hidden shadow-xl"
          >
            <a href="#">
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
            </a>
            <a href="#">
              <div
                class="text-xl text-center py-2 text-gray-700 bg-gray-300 font-semibold tracking-widest"
              >
                Nov 2020
              </div>
            </a>
          </div>
          <br />
        </div>
      </div>
      <div v-if="loggedInUser.totalNetEarnings" class="bg-gray-800">
        <div class="py-8 px-4 md:flex md:items-center md:justify-between">
          <div>
            <p
              class="text-center text-2xl text-transparent bg-gradient-to-r bg-clip-text from-yellow-500 to-red-500 font-bold tracking-widest"
            >
              Payslip
            </p>
            <p
              class="text-center text-yellow-600 font-semibold tracking-widest"
            >
              vault
            </p>
          </div>
          <div>
            <p class="text-center text-gray-400 text-xl mt-4">
              &copy; {{ new Date().getFullYear() }} - PAYSLIP vault. All rights
              reserved.
            </p>
            <a href="https://matthewchukwu.netlify.app" target="_blank">
              <div class="text-center text-gray-300 py-3 text-xl font-semibold">
                <p>Contact Us</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div v-if="!loggedInUser.totalNetEarnings" class="px-4 py-8 bg-red-200 font-semibold text-center text-lg text-red-700">
          We noticed you have not subscribed for this service yet. Kindly contact the admin for how to subscribe.
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  methods: {},
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
};
</script>