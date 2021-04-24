<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i> </li>
      <li><i class="icon icon-search"></i></li>
      <li><a
          href="javascript:void(0)"
          class="select-car-button"
        >选择车辆</a></li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  //   display: flex;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 10;
  text-align: center;
  //   justify-content: center;
  //   align-items: center;
  li {
    display: inline-block;
  }
  .icon {
    margin: 0 17px;
    vertical-align: middle;
    cursor: pointer;
  }
}

.select-car-button {
  display: block;
  width: 180px;
  height: 66px;
  margin: 0 17px;
  border-radius: 100px;
  line-height: 66px;
  text-align: center;
  color: #fff;
  background-color: $color_main;
  font-size: 26px;
  font-weight: 240;
}
</style>