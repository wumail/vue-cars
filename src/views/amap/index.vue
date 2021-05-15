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

      <!-- <el-amap-marker
        v-for="(item,index) in parkings"
        :key="item.key1"
        :position='item.position'
        :offset='item.offset'
        :content='item.content'
        :vid='index'
      >
      </el-amap-marker> -->
      <el-amap-marker
        v-for="(item,index) in parkings"
        :key="item.key1+index"
        :extData='item'
        :position='item.position'
        :offset='item.offsetText'
        :content='item.text'
        :vid='index'
        :events="item.events"
      >
      </el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
import {AMapManager , lazyAMapApiLoaderInstance} from 'vue-amap'
import { selfLocation } from "./location";
import { Walking } from "./walking";

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
                // {
                //     id:1,content:"<img src='"+ require('@/assets/images/parking_location_img.png') +"'>",
                //     position:[126.63558,45.70852],offset:[-35,-60]
                // },
            ],
            current_target:{
                node:null,
                txt:'',
            },
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
        },
        handerWalking(data){
            if(this.current_target.node){
                this.current_target.node.classList.remove('marker_expand')
                // const thisNode = this.current_target.querySelector('.sp');
                // this.current_target.removeChild(thisNode);
                this.current_target.node.querySelector('span').innerHTML = this.current_target.txt;
                this.current_target.node = null;
            }
            this.current_target.node = document.querySelector(`.${data.flag}`);
            Walking({
                map:this.map,
                // marker:this.current_target,
                start:this.circle[0].center,
                end:data.end,
                complete:(result)=>this.walkcomplete(result)
            })
        },
        walkcomplete(result){
            const span = this.current_target.node.querySelector('span');
            this.current_target.txt = span.innerHTML;
            span.innerHTML = `${span.innerHTML} 辆车 | 距离您 ${result.routes[0].distance} 米`
            this.current_target.node.classList.add('marker_expand')
        },
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
.marker_expand {
  &.parking-marker {
    width: 200px;
  }
}
</style>