<template>
  <div class="user-container">
    <div class="user-info">
      <img
        src="@/assets/images/face.png"
        alt="face"
      >
      <div class="meta">
        <h4 class="name">
          1059037014@qq.com
        </h4>
        <span>
          文明驾驶
          <strong>0</strong>
        </span>
      </div>
    </div>
    <ul class="link-groups">
      <router-link to='aa'>
        <i class="icon icno-router-link-001"></i>
        <span>
          我的账户
        </span>
      </router-link>
      <router-link to='aa'>
        <i class="icon icno-router-link-002"></i>
        <span>
          租车订单
        </span>
      </router-link>
      <router-link to='aa'>
        <i class="icon icno-router-link-003"></i>
        <span>
          实名认证
        </span>
      </router-link>
      <router-link to='aa'>
        <i class="icon icno-router-link-004"></i>
        <span>
          安全设置
        </span>
      </router-link>
      <router-link to='aa'>
        <i class="icon icno-router-link-005"></i>
        <span>
          帮助中心
        </span>
      </router-link>
    </ul>
    <button class="user-logout">登出</button>
  </div>
</template>
<script>
export default {
    name: 'User',
    components:{},
    data(){
        return {

        }
    }
}
</script>
<style lang="scss">
@import "./user.scss";
</style>