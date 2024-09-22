<template>
  <div>
    <notifications position="top right"/>
    <slot/>
  </div>
</template>
<script setup>
import {Notifications} from "@kyvg/vue3-notification";
</script>