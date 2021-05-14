<template>
  <div>
    <!-- dom-->
    <!-- <Car /> -->
    <!-- 地图-->
    <Map
      ref="map"
      @mapCallback='mapCallback'
    />
    <!-- 导航 -->
    <Navbar />
    <!-- 会员-->
    <div
      id='children-view'
      :class="{open:show}"
    >
      <router-view />
    </div>
  </div>
</template>
<script>
// import {AMapManager , lazyAMapApiLoaderInstance} from 'vue-amap'
import Map from '../amap/index'
import Car from '../cars/index'
import Navbar from '@/components/navbar/index'

import { Parking } from "@/api/parking.js";

// let amapManager = AMapManager;
export default {
    name: 'Index',
    components:{ Map, Car, Navbar },
    data(){
        return {
            ifshow:false,
        }
    },
    computed:{
        show(){
            const router = this.$route;
            return router.name === 'Index'?false:true;
        },
    },
    mounted(){
      document.addEventListener('mouseup',(e)=>{
        const userCon = document.getElementById('children-view');
        if(userCon){
          if(!userCon.contains(e.target) && this.$route.name!=='Index'){
            this.$router.push({
              name:'Index'
            })
          }
        }
      })
    },
    methods:{
      mapCallback(params){
        params.function&&this[params.function](params.data);
      },

      loadMap(){
        this.getParking()
      },

      getParking(){
        Parking().then((response)=>{
          const data =response.data.data;
          data.forEach(item => {
            item.key1 = Date.now();
            item.position=[+item.lnglat.split(',')[0],+item.lnglat.split(',')[1]];
            item.content = "<img src='"+ require('@/assets/images/parking_location_img.png') +"'>";
            item.offset = [-35,-60];
            item.offsetText =[-35,-40];
            item.text=`<div style='width:70px;font-size:20px;color:#fff;background-color:transparent;text-align:center;'>${item.carsNumber}</div>`;
            item.key2 = Date.now()+3600;
          });
          this.$refs.map.parkingData(data)
        })
      }
    },
    watch:{

    },
}
</script>
<style lang="scss">
#children-view {
  @include webkit(box-shadow, -5px 0 38px 0 rgba(0, 0, 0, 0.4));
  @include webkit(transition, all 0.3s ease 0s);
  position: fixed;
  width: 300px;
  background-color: #34393f;
  top: 0;
  bottom: 0;
  right: -330px;
  padding-left: 15px;
  padding-right: 15px;
  z-index: 15;
  &.open {
    right: 0;
  }
}
</style>