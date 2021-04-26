<template>
  <div class="user-header-back">
    <div class="header-back">
      <i
        class="header-icon"
        @click="popurl"
      ></i>
      <h4 class="header-title">{{column}}</h4>
    </div>
  </div>
</template>
<script>
export default {
    name:'HeaderBack',
    data(){
        return{
            
        }
    },
    props:{
        column:{
            type:String,
            default:'',
        }
    },
    methods:{
      popurl(){
        this.$router.go(-1);
      },
    },
}
</script>
<style lang="scss">
.user-header-back {
  position: relative;
  padding-bottom: 147px;
}
.header-back {
  display: flex;
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  padding-left: 15px;
  height: 40px;
  line-height: 40px;
}
.header-icon {
  width: 40px;
  height: 40px;
  &::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-left: 2px solid $color_blue;
    border-top: 2px solid $color_blue;
    @include webkit(transform, translate(0, 60%) rotate(-45deg));
    cursor: pointer;
  }
}
.header-title {
  font-size: 16px;
  color: #fff;
}
</style>