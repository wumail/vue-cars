let walking = null;

export function Walking(params) {
    if (walking) {
        //调用clear()函数清除上一次结果，可以清除地图上绘制的路线以及路径文本结果
        walking.clear();
    }
    walking = new AMap.Walking({
        map: params.map,
        hideMarkers: true,
        // panel: "panel",
        // autoFitView: false,
    });
    //根据起终点坐标规划步行路线
    walking.search(params.start, params.end, (status, result) => {
        // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
        if (status === 'complete') {
            // console.log(result);
            // console.log('绘制步行路线完成');
            if (params.complete && typeof params.complete === 'function') {
                params.complete(result);
            }
            // const span = document.createElement("span");
            // span.innerHTML = ` | 距离您 ${result.routes[0].distance} 公里`;
            // span.className = 'sp'
            // params.marker.appendChild(span);
            // log.success('绘制步行路线完成')
        } else {
            console.log('步行路线数据查询失败' + result);
            // log.error('步行路线数据查询失败' + result)
        }
    });
}