<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper
        ref='mySwiper'
        class="swiper"
        :options="swiperOption"
      >
        <swiper-slide class="swiper-slice">
          <CarItem
            :ifShowDetail="ifShowDetail"
            height='600px'
          />
        </swiper-slide>
        <swiper-slide class="swiper-slice">
          <CarItem />
        </swiper-slide>
        <swiper-slide class="swiper-slice">
          <CarItem />
        </swiper-slide>
        <swiper-slide class="swiper-slice">
          <CarItem />
        </swiper-slide>
        <swiper-slide class="swiper-slice">
          <CarItem />
        </swiper-slide>
      </swiper>
      <div
        class="swiper-button-prev"
        slot="button-prev"
        @click="next"
      ></div>
      <div
        class="swiper-button-next"
        slot="button-next"
        @click="prev"
      ></div>
      <!-- <div
        class="swiper-button-prev"
        slot="button-prev"
        @click="prev"
      ></div>
      <div
        class="swiper-button-next"
        slot="button-next"
        @click="next"
      ></div> -->
    </div>

    <span @click="user">
      汽车列表
    </span>
  </div>
</template>
<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import CarItem from '@/components/carsList/index';
import 'swiper/swiper-bundle.css'
export default {
    name: 'Cars',
    components: {
      Swiper,
      SwiperSlide,
      CarItem
    },
    data(){
        return {
          swiperOption: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            slidesPerView : 'auto',
            width: 400,
            spaceBetween : 200,
            slidesOffsetBefore : 80,
            freeMode:true,
            freeModeSticky:true,
          },
          ifShowDetail:true,
        }
    },
    computed:{
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods:{
        user(){
            this.$router.push({
                name:'User'
            })
        },

        prev() {
          this.swiper.slidePrev();
        },

        next() {
          this.swiper.slideNext();
        }
    }
}
</script>
<style lang="scss">
@import "./cars.scss";
.swiper-slide {
  width: 400px; /*设为固定值*/
}
</style>