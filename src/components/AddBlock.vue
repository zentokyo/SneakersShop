<script setup>
import {Navigation, Autoplay} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import UButton from "@/components/UI/UButton.vue";

const name = 'swiper-example-navigation'
const title = 'Navigation'
const url = import.meta.url
const components = {
    Swiper,
    SwiperSlide
}
const modules = [Navigation, Autoplay]
</script>


<template>
    <div>
        <div class="m-auto sm:container pb-10 lg:w-[960px]">
            <swiper
                class="h-[300px] bg-white"
                :slides-per-view="1"
                :space-between="20"
                :navigation="true"
                :autoplay="{
                delay: 3500,
                disableOnInteraction: false
                }"
                :loop="true"
                :modules="modules"
            >
                <!--                slide1-->
                <!--                slide1-->
                <swiper-slide class="text-center px-7">
                    <div class="bg-[#F4EFE9] h-full rounded-3xl overflow-hidden relative">
                        <div class="relative h-full z-10">
                            <img src="/logo-ad1.png" alt="logo" class="ml-5 mt-4 w-24 h-10">
                            <div class="text-left mt-8 pl-10 sm:pl-16">
                                <span class="text-[#A5D364] text-4xl font-bold"
                                      style="-webkit-text-stroke: 1px #000000;">Stan Smith</span>
                                <span class="text-black text-4xl font-bold">,<br/>Forever!</span>
                                <UButton bgColor="#A5D364"/>
                            </div>

                        </div>
                        <img src="/bg-ad1.png"
                             class="h-full object-cover object-right absolute top-0 right-0 z-0"
                             alt="">
                    </div>
                </swiper-slide>
                <!--                slide2-->
                <!--                slide2-->
                <swiper-slide class="text-center px-7">
                    <div class="bg-[#7CC7CD] h-full rounded-3xl overflow-hidden relative">
                        <div class="relative h-full z-10">
                            <div class="text-left mt-[88px] pl-10 sm:pl-16">
                                <span class="text-[#00344c] text-4xl font-bold"
                                      style="-webkit-text-stroke: 1px #000000;">Stan Smith</span>
                                <span class="text-[#7CC7CD] text-4xl font-bold"
                                      style="-webkit-text-stroke: 2px #000000;">,<br/>Forever!</span>
                                <UButton bgColor="#7CC7CD"/>
                            </div>

                        </div>
                        <img src="/bg-ad2.jpg"
                             class="h-full object-cover object-right absolute top-0 right-0 z-0"
                             alt="">
                    </div>
                </swiper-slide>

                <!--                slide3-->
                <!--                slide3-->
                <swiper-slide class="text-center px-7">
                    <div class="bg-[#dcdcdc] h-full rounded-3xl overflow-hidden relative">
                        <div class="relative h-full z-10">
                            <div class="text-left mt-[88px] pl-10 sm:pl-16">
                                <span class="text-[#dcdcdc] text-4xl font-bold"
                                      style="-webkit-text-stroke: 1px #000000;">Stan Smith</span>
                                <span class="text-black text-4xl font-bold"
                                >,<br/>Forever!</span>
                                <UButton bgColor="#dcdcdc"/>
                            </div>

                        </div>
                        <img src="/bg-ad3.jpg"
                             class="h-full object-cover object-right absolute top-0 right-0 z-0"
                             alt="">
                    </div>
                </swiper-slide>
                <!--                slide4-->
                <!--                slide4-->
                <swiper-slide class="text-center px-7">
                    <div class="bg-[#73625b] h-full rounded-3xl overflow-hidden relative">
                        <div class="relative h-full z-10">
                            <div class="text-left mt-[88px] pl-10 sm:pl-16">
                                <span class="text-[#d4cfcc] text-4xl font-bold"
                                      style="-webkit-text-stroke: 1px #000000;">Stan Smith</span>
                                <span class="text-[#d4cfcc] text-4xl font-bold"
                                      style="-webkit-text-stroke: 1px #000000;">,<br/>Forever!</span>
                                <UButton bgColor="#dcdcdc"/>
                            </div>

                        </div>
                        <img src="/bg-ad4.jpg"
                             class="h-full object-cover object-right absolute top-0 right-0 z-0"
                             alt="">
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 18px -5px;
    transition: box-shadow .3s;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px 0px;
}

:deep(.swiper-button-next::after) {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url('/arrow-right.svg') no-repeat center center white;
    height: 35px;
    width: 35px;
    border-radius: 50%;
}

:deep(.swiper-button-prev::after) {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url('/arrow-right.svg') no-repeat center center white;
    transform: rotate(180deg);
    height: 35px;
    width: 35px;
    border-radius: 50%;
}
</style>

