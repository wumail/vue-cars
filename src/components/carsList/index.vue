<template>
  <div>
    <section
      class="cars-item"
      :class="{showdetail:ifShowDetail}"
    >
      <div class="scroll">
        <header>
          <h4 class="cars-logo">
            <img
              src="@/assets/images/cars-logo.png"
              alt="Mustang 2019款"
            >
            <span class="cars-name">Mustang 2019款</span>
          </h4>
          <p class="cars-attr">
            新能源汽车 5座
          </p>
        </header>
        <div class="cars-content">
          <div class="cars-info">
            <div>
              <h4 class="cars-license">川B LV624</h4>
              <ul class="cars-energy active-li-6">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="cars-distance">
                <sub>约</sub>
                <strong>
                  600
                </strong>
                <sub>公里</sub>
              </p>
              <div class="cars-energy-box">
                <div class="p-r">
                  <span
                    class="e-high"
                    style="width:80%"
                  ></span>
                  <span class="e-bg"></span>
                </div>
              </div>
              <p class="cars-text">取车约支付12.0元停车费，实际补贴12.0元</p>
            </div>
          </div>
          <img
            src="@/assets/images/pic001.jpg"
            alt="what is the car look like"
          >
        </div>
        <footer>
          <a
            href="javascript:void(0)"
            class="park-link"
          >某某某停车场</a>
        </footer>
        <ul class="cars-rent-type">
          <li class="current">
            <h4 class="cars-rent">日租</h4>
            <span class="cars-price">￥300/天</span>
          </li>
          <li>
            <h4 class="cars-rent">日租</h4>
            <span class="cars-price">￥300/天</span>
          </li>
          <li>
            <h4 class="cars-rent">日租</h4>
            <span class="cars-price">￥300/天</span>
          </li>
          <li>
            <h4 class="cars-rent">日租</h4>
            <span class="cars-price">￥300/天</span>
          </li>
        </ul>
        <div class="clause">
          <span>参保《全面保障服务》用车更放心
          </span>
          <i class="current"></i>
        </div>
        <i class="close"></i>
      </div>
      <a
        href="javascript:void(0)"
        class="cars-button"
      >
        预约用车
      </a>
    </section>
  </div>
</template>
<script>
export default {
    name:'CarsList',
    props:{
      ifShowDetail:{
        type:Boolean,
        default:false,
      },
    }
}
</script>
<style lang="scss">
@import "./carlist.scss";
</style>