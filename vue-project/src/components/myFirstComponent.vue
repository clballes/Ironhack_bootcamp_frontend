<template>
    <h1>{{ clara }}</h1>
    <h3>mi nombre es {{ bio.clara }}, tengo {{ bio.age }} años, he nacido el {{bio.dateOfBirth}} y mis hobbies son {{ bio.hobbiesArr[0] }}, {{bio.hobbiesArr[1]}}, y {{bio.hobbiesArr[2]}} </h3>
</template>

<script setup>
import { ref, reactive } from "vue";
const bio = reactive({
    clara: "Mi nobre es clar2 y me gusta programar",
    age: 21,
    dateOfBirth: "2 decembre 2000",
    hobbiesArr: ["surf", "musica", "fiesta", "deporte"]
});
// Declaramos una variable que contenga con el metodo reactive vuestros nombres, edad, fecha de nacimiento y un array de vuestros hobbies. Los plasmamos dentro del template en una mini biografia.
</script>

<style>

</style>