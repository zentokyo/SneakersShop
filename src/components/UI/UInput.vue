<script>
export default {
    name: 'UInput'
}
</script>

<script setup>

</script>

<template>
    <div class="relative">
        <img src="/search.svg" alt="" class="absolute left-4 top-3.5">
        <input type="text" name="search"
               class="w-[250px] h-[45px] border outline-none focus:border-gray-400 rounded-2xl placeholder:text-sm placeholder:font-normal pr-5 pl-[45px]"
               placeholder="Поиск..">
    </div>
</template>

<style scoped>

</style>