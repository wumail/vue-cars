import Vue from 'vue';
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: '0ba8e39d059d923f50967ee7563cba71',
    plugin: ['AMap.Autocomplete',
        'AMap.PlaceSearch',
        'AMap.Scale',
        'AMap.OverView',
        'AMap.ToolBar',
        'AMap.MapType',
        'AMap.PolyEditor',
        'AMap.CircleEditor',
        'AMap.Geolocation',
        'AMap.Walking',
    ],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});
