<script>
export default {
    name: 'UButton'
}
</script>

<script setup>

const {bgColor} = defineProps({
    bgColor: {
        type: String,
    }
})
</script>

<template>
    <div class="">
        <button :style="{ background: bgColor }" class="w-44 h-12 rounded-2xl border-black border-2 my-7 overflow-hidden relative
                                                        after:content-['*'] after:absolute after:inset-0 after:bg-black after:opacity-0 after:hover:opacity-10 after:duration-300">Купить
        </button>
    </div>
</template>

<style scoped>

</style>