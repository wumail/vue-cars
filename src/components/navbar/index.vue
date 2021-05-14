<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-w-44 icon-help"></i> </li>
      <li><i class="icon icon-w-44 icon-search"></i></li>
      <li><a
          href="javascript:void(0)"
          class="select-car-button"
        >选择车辆</a></li>
      <li><i
          class="icon icon-w-44 icon-location"
          @click="location"
        ></i></li>
      <li><i
          class="icon icon-w-44 icon-user"
          @click="toUser"
        ></i></li>
    </ul>
  </div>
</template>
<script>
export default {
    name:'Navbar',
    methods:{
      toUser(){
          this.$router.push({
              name:'User'
          })
      },
      location(){
        this.$store.commit("location/SELF_LOCATION")
      }
    },
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
</style>