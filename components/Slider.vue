<template>
  <div>
    <swiper
      :slides-per-view="1"
      :pagination="true"
      :navigation="true"
      :grabCursor="true"
      @slideChange="onSlideChange"
      class="slider"

    >
        <SwiperSlide v-for="(slide, index) in slides" :key="index" class="slide">
          <img :src="slide.url" alt="Slide" />
        </SwiperSlide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import image1 from "@/assets/images/image.png";
import image2 from "@/assets/images/image-1.png";
import image3 from "@/assets/images/image-2.png";
import image4 from "@/assets/images/image-3.png";
import image5 from "@/assets/images/image-4.png";
import { useActiveSlideStore } from '../stores/pinia'

interface Slide {
  url: string;
}
const sliderStore = useActiveSlideStore();
const slides = ref<Slide[]>([
  { url:  image1},
  { url:  image2},
  { url:  image3},
  { url:  image4},
  { url:  image5},
]);
const onSlideChange = (swiper: any) => {
  const currentIndex = swiper.realIndex
  console.log(currentIndex);
  
  sliderStore.setActiveSlide(currentIndex)
}
</script>

<style lang="less" scoped>
.slider {
	& .slide {
		width: 80%;
		height: 70vh;

		& > img {
			width: 100%;
			height: 100%; 
			object-fit: cover;
			position: absolute;

      @media (max-width: 600px) {
        
      }
		}

	}
}
</style>
