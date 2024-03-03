<script setup>

import AddBlock from "@/components/AddBlock.vue";
import UInput from "@/components/UI/UInput.vue";
import SneakersList from "@/components/SneakersList.vue";
</script>

<template>
    <div>
        <AddBlock/>
        <main class="px-[60px]">
            <header class="flex flex-wrap gap-4 justify-center sm:justify-between items-center">
                <h2 class="font-bold text-[32px]/8">Все кроссовки</h2>
                <UInput/>
            </header>
            <SneakersList/>
        </main>
    </div>
</template>

<style scoped>

</style>