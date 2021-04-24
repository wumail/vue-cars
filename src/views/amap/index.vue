<template>
  <div class="amap-wrap">
    <el-amap
      vid='amapDemo'
      class="amap-demo"
      :zoom='zoom'
      :center='center'
      :amap-manager='map'
      :events='events'
    >
    </el-amap>
  </div>
</template>
<script>
import {AMapManager , lazyAMapApiLoaderInstance} from 'vue-amap'
// let amapManager = AMapManager;
export default {
    name: 'Map',
    data(){
        return{
            map: null,
            zoom: 15,
            center: [126.616844,45.715303],
            // amapManager,
            events:{
                init(o){
                    let marker = new AMap.Marker({
                        position:[126.616844,45.715303]
                    });

                    marker.setMap(o);
                }
            }
        }
    },
    mounted(){
        lazyAMapApiLoaderInstance.load().then(()=>{
            this.map = new AMap.Map('amapContainer',{
                center:new AMap.LngLat(126.616844,45.715303)
            })
        })
    }
}
</script>
<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>