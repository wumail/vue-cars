<template>
  <div>
    <!-- dom-->
    <!-- <Car /> -->
    <!-- 地图-->
    <Map />
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
import {AMapManager , lazyAMapApiLoaderInstance} from 'vue-amap'
import Map from '../amap/index'
import Car from '../cars/index'
import Navbar from '@/components/navbar/index'

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
          if(!userCon.contains(e.target)){
            this.$router.push({
              name:'Index'
            })
          }
        }
      })
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