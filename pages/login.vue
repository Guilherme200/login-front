<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="card bg-base-100 w-96 shadow-xl">
      <div class="card-body">
        <h2 class="flex justify-center text-3xl py-5">Login</h2>
        <input type="text" placeholder="username" class="input input-bordered w-full max-w-xs" />
        <input type="password" placeholder="password" class="input input-bordered w-full max-w-xs" />
        <div class="card-actions justify-center py-5">
          <button class="btn btn-primary btn w-full">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
console.log('Login')
</script>