<template>
  <p>Hola que passa</p>
    <h1>{{ greet }}</h1>
    <button @click="hello">{{ greet }}</button>
</template>

<script setup>
const greet = "Hola soy Clara";
const helloWorld = "Hello  World";

function hello() {
    console.log(helloWorld);
}
</script>

<style>

</style>