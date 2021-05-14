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
    </el-amap>
  </div>
</template>
<script>
import {AMapManager , lazyAMapApiLoaderInstance} from 'vue-amap'
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
            ]
        }
    },
    methods:{
        initMap(){
            const _this = this
            this.map = amapManager.getMap();

            this.$emit('mapCallback',{
                function:'loadMap',
            })

             var geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：5s
                buttonPosition:'RB',    //定位按钮的停靠位置
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
                markerOptions:{
                    content:' '
                }
            });
            this.map.addControl(geolocation);
            geolocation.getCurrentPosition((status,result)=>{
                if(status=='complete'){
                    onComplete(result)
                }else{
                    onError(result)
                }
            });
            function onComplete(data) {
                var str = [];
                str.push('定位结果：' + data.position);
                str.push('定位类别：' + data.location_type);
                if(data.accuracy){
                    str.push('精度：' + data.accuracy + ' 米');
                }//如为IP精确定位结果则没有精度信息
                str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
                console.log(str);
                _this.circle[0].center = [data.position.lng,data.position.lat]
            }
            //解析定位错误信息
            function onError(data) {
                console.log(data);
            }
        }
        
    },
    mounted(){
        
    }
}
</script>
<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>