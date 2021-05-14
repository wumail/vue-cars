<template>
  <div class="amap-wrap">
    <el-amap
      vid='amapDemo'
      class="amap-demo"
      :zoom='zoom'
      :center='center'
      :amap-manager='amapManager'
      :events='events'
    >
      <el-amap-circle
        v-for="item in circle"
        :center='item.center'
        :radius='item.radius'
        :fillColor='item.color'
        :strokeColor='item.color'
        :strokeOpacity='item.strokeOpacity'
        :strokeWeight='item.strokeWeight'
        :key="item.id"
      ></el-amap-circle>

      <el-amap-marker
        v-for="(item,index) in parkings"
        :key="item.key1"
        :position='item.position'
        :offset='item.offset'
        :content='item.content'
        :vid='index'
      >
      </el-amap-marker>
      <el-amap-marker
        v-for="(item,index) in parkings"
        :key="item.key2"
        :position='item.position'
        :offset='item.offsetText'
        :content='item.text'
        :vid='index'
      >
      </el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
import {AMapManager , lazyAMapApiLoaderInstance} from 'vue-amap'
import { selfLocation } from "./location";

let amapManager = new AMapManager();
export default {
    name: 'Map',
    data(){
        const _this = this;
        return{
            map: null,
            zoom: 15,
            center: [126.616844,45.715303],
            amapManager,
            events:{
                init(o){
                    lazyAMapApiLoaderInstance.load().then(()=>{
                        _this.initMap()
                    })
                }
            },
            circle:[
                {
                    center:[0,0],
                    radius:4,
                    color:'#393e43',
                    strokeOpacity:0.2,
                    strokeWeight:30,
                }
            ],
            parkings:[
                {
                    id:1,content:"<img src='"+ require('@/assets/images/parking_location_img.png') +"'>",
                    position:[126.63558,45.70852],offset:[-35,-60]
                },
            ],
        }
    },
    methods:{
        initMap(){
            const _this = this
            this.map = amapManager.getMap();

            this.$emit('mapCallback',{
                function:'loadMap',
            })

            this.resetLocation()
        },
        resetLocation(){
            selfLocation({
                map:this.map,
                complete:(val)=>this.complete(val)
            })
        },
        complete(val){
            this.circle[0].center = [val.position.lng, val.position.lat]
        },
        parkingData(data){
            this.parkings = data
        }
    },
    mounted(){
        
    },
    watch:{
        "$store.state.location.selfLocation":function (){
            this.resetLocation()
        }
    },
}
</script>
<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>