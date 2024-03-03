<script setup>

import NavBar from "@/components/NavBar.vue";
import SideCart from "@/components/SideCart.vue";
import {ref} from "vue";

const activeSide = ref(false);
const openCart = () => activeSide.value = true


</script>

<template>
    <div class="relative">
        <SideCart v-model:activeSide="activeSide"/>
        <div class="container mx-auto sm:my-9 bg-white sm:rounded-xl h-max overflow-x-hidden">
            <NavBar @openCart="openCart"/>
            <div class="w-screen h-px bg-zinc-300"></div>
            <router-view class="py-[60px]"/>
        </div>
    </div>
</template>

