<template>
  <div id="login">
    <h1>畅读海量小说</h1>
    <van-form @submit="onLogin" class="user-form">
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
      >登 录</van-button>
      <div class="tip">
        <p>忘记密码?</p>
        <p @click="toRegister">新账户注册</p>
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
    // 登录
    async onLogin() {
      // 检验是否勾选
      if (this.acceptStatus) {
        const loginToast = this.$toast.loading({
          message: "登录中",
          forbidClick: true
        });
        let { data: res } = await this.axios.get("index/index/login", {
          params: {
            username: this.userAccount,
            password: this.userPassword
          }
        });
        loginToast.clear();
        if (res.status.code !== 200) {
          this.$toast(res.status.message);
        } else {
          // 登录成功后添加token到本地库
          localStorage.setItem("token", res.res.token);
          localStorage.setItem("userinfo", JSON.stringify(res.res.userinfo));
          // 跳转到书架
          this.$router.replace("/bookshelf");
        }
      }
    },
    // 跳转到注册页面
    toRegister() {
      this.$emit("changeComponent", "register");
    }
  }
};
</script>

<style lang="less" scoped>
#login {
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