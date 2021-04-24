<template>
  <div class="index-wrap">
    <section class="cars-item">
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
            <div>
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
            </div>
          </div>
        </div>
        <img
          src="@/assets/images/pic001.jpg"
          alt="what is the car look like"
        >
      </div>
      <footer>
        <a href="javascript:void(0)" class="park-link">某某某停车场</a>
      </footer>
    </section>
    <span @click="user">
      汽车列表
    </span>
  </div>
</template>
<script>
export default {
    name: 'Cars',
    components:{  },
    data(){
        return {
        }
    },
    methods:{
        user(){
            this.$router.push({
                name:'User'
            })
        }
    }
}
</script>
<style lang="scss">
@import "./cars.scss";
</style>