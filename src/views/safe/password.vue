<template>
  <div class="user-container">
    <UserBackHeader column="修改登录密码" />
    <div class="cars-form-ui">
      <el-form
        ref="form"
        :model='form'
      >
        <el-form-item>
          <el-input
            v-model="form.name"
            size='small'
            placeholder='原始密码'
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.name"
            size='small'
            placeholder='新的密码'
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.name"
            size='small'
            placeholder='确认密码'
          ></el-input>
        </el-form-item>
        <el-form-item>
          <button
            type="button"
            class="btn-vcode"
          >获取验证码</button>
          <el-input
            v-model="form.name"
            size='small'
            placeholder='验证码'
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type='primary'
            @click="onSubmit"
            class="btn-100"
          >确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import UserBackHeader from '../../components/userBackHeader/userBackHeader.vue'
export default {
    name: 'Password',
    components:{UserBackHeader},
    data(){
        return {
            form:{
                name:'',
                region:'',
                date1:'',
                date2:'',
                delivery:false,
                type:[],
                resource:'',
                desc:'',
            }
        }
    }
}
</script>
<style lang="scss">
// @import "./user.scss";
</style>