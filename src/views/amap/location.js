let geolocation = null;

export function selfLocation(params) {
    if (!geolocation) {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：5s
            buttonPosition: 'RB',    //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
            showMarker: false,
        });
    }
    params.map.addControl(geolocation);
    geolocation.getCurrentPosition((status, result) => {
        if (status == 'complete') {
            Complete(result)
            // params.circle[0].center = [result.position.lng, result.position.lat]
        } else {
            Error(result)
        }
    });
    if (params.complete && typeof params.complete === 'function') {
        AMap.event.addListener(geolocation, 'complete', params.complete)
    }

    if (params.error && typeof params.error === 'function') {
        AMap.event.addListener(geolocation, 'error', params.error)
    }


}

function Complete(data) {
    var str = [];
    str.push('定位结果：' + data.position);
    str.push('定位类别：' + data.location_type);
    if (data.accuracy) {
        str.push('精度：' + data.accuracy + ' 米');
    }//如为IP精确定位结果则没有精度信息
    str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
    console.log(str);
}
//解析定位错误信息
function Error(data) {
    console.log(data);
}