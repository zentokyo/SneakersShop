<script setup>
import { ref, computed } from 'vue'

const list = [
    { msg: 'Bruce Lee' },
    { msg: 'Jackie Chan' },
    { msg: 'Chuck Norris' },
    { msg: 'Jet Li' },
    { msg: 'Kung Fury' }
]

const query = ref('')

const computedList = computed(() => {
    return list.filter((item) => item.msg.toLowerCase().includes(query.value))
})

</script>

<template>
    <input v-model="query" />
    <ul v-auto-animate class="flex gap-4 flex-wrap">
        <li
            v-for="(item, index) in computedList"
            :key="item.msg"
            :data-index="index"
            class="h-12 w-44 bg-red-800"
        >
            {{ item.msg }}
        </li>
    </ul>
</template>
