<template>
  <div id="register">
    <h1>注 册</h1>
    <van-form @submit="onRegister" class="user-form">
      <van-field
        size="large"
        clearable
        v-model="userAccount"
        left-icon="manager-o"
        placeholder="请输入用户账号"
        :rules="userRules"
      />
      <van-field
        size="large"
        clearable
        v-model="userPassword"
        left-icon="el-icon-lock"
        right-icon="el-icon-lock"
        :type="showPassword?'':'password'"
        placeholder="请输入用户密码"
        :rules="userRules"
        @keyup="changeUserPwd"
      >
        <template #left-icon>
          <div class="el-icon-lock"></div>
        </template>
        <template #right-icon>
          <van-icon @click="showPassword=!showPassword" :name="showPassword?'eye-o':'closed-eye'" />
        </template>
      </van-field>
      <van-field
        size="large"
        clearable
        v-model="userRePassword"
        left-icon="el-icon-lock"
        right-icon="el-icon-lock"
        :type="showPassword?'':'password'"
        placeholder="请再次输入密码"
        :rules="[
        {validator: valiRePwd,message: '两次密码不一致！',trigger: 'onBlur'},
        {required: true,message: '不能为空！',trigger: 'onChange'}
        ]"
      >
        <template #left-icon>
          <div class="el-icon-lock"></div>
        </template>
        <template #right-icon>
          <van-icon @click="showPassword=!showPassword" :name="showPassword?'eye-o':'closed-eye'" />
        </template>
      </van-field>
      <van-checkbox label-disabled v-model="acceptStatus">
        我已阅读并接受
        <strong>《用户服务协议》</strong>及
        <strong>《隐私协议》</strong>
      </van-checkbox>
      <!-- 登录操作按钮 -->
      <van-button
        native-type="submit"
        color="#1989fa"
        class="login-in"
        :disabled="acceptStatus?false:true"
        type="primary"
        block
      >注 册</van-button>
      <div class="tip">
        <p>忘记密码?</p>
        <p @click="ToLogin">返回登录</p>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAccount: "",
      userPassword: "",
      userRePassword: "",
      acceptStatus: false,
      showPassword: false,
      userRules: [
        { required: true, message: "内容不能为空！", trigger: "onBlur" },
        {
          pattern: /^[0-9a-zA-Z_]{1,}$/,
          message: "只能由字母数字下划线组成！",
          trigger: "onChange"
        },
        {
          pattern: /^.{6,14}$/,
          message: "长度必须在6到14位之间！",
          trigger: "onChange"
        }
      ]
    };
  },
  methods: {
    // 注册
    async onRegister() {
      // 检验是否勾选
      if (this.acceptStatus) {
        const loginToast = this.$toast.loading({
          message: "注册中",
          forbidClick: true
        });
        let { data: res } = await this.axios.get("index/index/singin", {
          params: {
            username: this.userAccount,
            password: this.userPassword
          }
        });
        loginToast.clear();
        if (res.status.code !== 200) {
          this.$toast(res.status.message);
        } else {
          this.$toast(res.status.message);
          this.$emit("changeComponent", "login");
        }
      }
    },
    // 返回登录
    ToLogin() {
      this.$emit("changeComponent", "login");
    },
    // 验证密码是否正确
    valiRePwd() {
      if (this.userPassword === this.userRePassword) {
        return true;
      } else {
        return false;
      }
    },
    // 当密码框被修改
    changeUserPwd() {
      if (this.userRePassword !== "") {
        this.userRePassword = "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
#register {
  height: 100%;
  h1 {
    font-size: 30px;
    font-family: "STXingkai";
    text-align: center;
    margin-top: 50px;
    color: #1989fa;
    text-shadow: 0 0 10px #1989fa;
  }
  .user-form {
    padding: 26px;
    .van-field {
      margin-bottom: 20px;
      border: 0.8px solid rgba(25, 137, 250, 0.3);
      border-radius: 24px;
      &:hover {
        border: 0.8px solid rgba(25, 137, 250, 0.9);
      }
    }
    .van-checkbox {
      font-size: 12px;
      margin-bottom: 20px;
    }
    .login-in {
      border-radius: 22px;
      height: 44px;
      margin-bottom: 20px;
      box-shadow: 0 0 10px #1989fa;
      &:active {
        box-shadow: 0 0 1px #1989fa;
        transform: translateY(3px);
      }
    }
    .tip {
      font-size: 12px;
      color: #666;
      display: flex;
      justify-content: space-between;
      color: #1989fa;
      p {
        margin: 0;
      }
    }
  }
}
</style>