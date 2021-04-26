<template>
  <div class="user-container">
    <UserBackHeader column="安全设置" />
    <ul class="link-groups">
      <router-link
        to='/password'
        tag='a'
        class='arrow'
      >
        <span>
          修改登录密码
        </span>
      </router-link>
      <router-link
        to='aa'
        tag='a'
        class='arrow'
      >
        <span>
          设置资金密码
        </span>
      </router-link>
      <router-link
        to='aa'
        tag='a'
        class='arrow'
      >
        <span>
          绑定手机号
        </span>
      </router-link>
      <router-link
        to='aa'
        tag='a'
        class='arrow'
      >
        <span>
          绑定银行账号
        </span>
      </router-link>
    </ul>
  </div>
</template>
<script>
import UserBackHeader from '../../components/userBackHeader/userBackHeader.vue'
export default {
    name: 'User',
    components:{UserBackHeader},
    data(){
        return {

        }
    }
}
</script>
<style lang="scss">
// @import "./user.scss";
</style>