<template>
  <div class="flex space-x-3">
    <div class="bg-white w-1/5 rounded p-2 drop-shadow-lg">
      <h3 class="mb-2 font-bold">Project management</h3>
      <div class="flex items-center cursor-pointer bg-blue-700 justify-center p-2.5 rounded hover:bg-blue-900 transition duration-100 active:bg-blue-600" @click="add_project_modal = true">
        <svg class="text-white mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2z"/><path fill="currentColor" d="M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v4h2v-6a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z"/></svg>
        <p class="font-light text-white text-xs">NEW PROJECT</p>
      </div>
    </div>
    <div class="flex-col w-full space-y-3">
        <div class="bg-white rounded p-2 drop-shadow-lg">
            TOTO
        </div>
        <div class="bg-white rounded p-2 drop-shadow-lg">
            TOTO
        </div>
        <div class="bg-white rounded p-2 drop-shadow-lg">
            TOTO
        </div>
        <div class="bg-white rounded p-2 drop-shadow-lg">
            TOTO
        </div>
    </div>
  </div>
  <Modal v-if="add_project_modal" :header="'Add a project'" @close="add_project_modal = false">
      <div class="flex space-x-2">
        <div class="w-1/2">
            <div>
                <label for="title" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Project title :</label>
                <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Edf" required>
            </div>
            <div class="mt-2">
                <label for="title" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Sprint length :</label>
                <div class="flex space-x-2 justify-around">
                    <p class="p-2 bg-gray-200 rounded-lg cursor-pointer">1w</p>
                    <p class="p-2 bg-gray-200 rounded-lg cursor-pointer">2w</p>
                    <p class="p-2 bg-gray-200 rounded-lg cursor-pointer">3w</p>
                    <p class="p-2 bg-gray-200 rounded-lg cursor-pointer">4w</p>
                </div>
            </div>
        </div>
        <div class="w-1/2">
          Add users
          <div class="flex items-center space-x-2">
            <input type="email" name="" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john@doe.fr">
            <div class="border p-1 rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"/></svg>
            </div>
          </div>
          <div class="space-y-2 mt-2">
              <div class="flex items-center space-x-2">
                  <div class="p-2 bg-gray-300 rounded-lg w-full">
                      roro@roro.fr
                  </div>
                  <div class="border p-1 rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></svg>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="flex space-x-2 mt-5">
          <div class="flex items-center cursor-pointer bg-blue-700 justify-center p-2.5 rounded hover:bg-blue-900 transition duration-100 active:bg-blue-600 w-full">
              <p class="font-light text-white text-xs">CONFIRM</p>
          </div>
          <div class="flex items-center cursor-pointer bg-red-700 justify-center p-2.5 rounded hover:bg-red-900 transition duration-100 active:bg-red-600 w-full">
              <p class="font-light text-white text-xs">CANCEL</p>
          </div>
      </div>
  </Modal>
</template>

<script setup lang="ts">

import Modal from "~/components/commun/Modal.vue";

const add_project_modal = ref(false)
</script>