<script setup>
import {ref} from "vue";
import CartItem from "@/components/CartItem.vue";

const {activeSide} = defineProps({activeSide: {type: Boolean, default: false}})

const emits = defineEmits(['update:activeSide'])

const closeCart = () => {
    emits('update:activeSide', false)
}

</script>

<template>
    <div class="relative">
        <div v-show="activeSide" @click="closeCart" class="bg-black opacity-50 fixed z-30 inset-0"></div>

        <transition
            enter-active-class="transition ease-in-out duration-200 transform"
            enter-from-class="translate-x-full"
            enter-to-class="-translate-x-0"
            leave-active-class="transition ease-in-out duration-200 transform"
            leave-from-class="-translate-x-0"
            leave-to-class="translate-x-full"
        >

            <aside v-show="activeSide" class="w-full sm:w-[385px] h-full bg-white fixed top-0 right-0 z-40">
                <div class="flex items-center">
                    <div class="group p-4 inline-block duration-300 hover:-translate-x-1" @click="closeCart">
                        <svg class="rotate-180" width="16" height="14" viewBox="0 0 16 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path class="stroke-zinc-400 group-hover:stroke-black" d="M1 7H14.7143"
                                  stroke="white"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="stroke-zinc-400 group-hover:stroke-black"
                                  d="M8.71436 1L14.7144 7L8.71436 13"
                                  stroke="white" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h2 class="text-2xl font-bold">Корзина</h2>
                </div>
                <section class="w-[300px] sm:w-[325px] mx-auto pt-[30px] pb-[200px] h-full">
                    <div class="overflow-y-auto h-full w-full">
                        <div class="flex gap-5 flex-col">
                            <CartItem v-for="item in 6"/>
                        </div>
                    </div>
                    <div></div>
                </section>
            </aside>

        </transition>

    </div>
</template>

<style scoped>

</style>