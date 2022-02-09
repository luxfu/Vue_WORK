<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/mealux.png" alt="自动化测试" />
    </div>
    <div class="title"></div>
    <div class="user">
      <div class="message-center">
        <el-icon class="el-icon-bell" :size="25" color="#ffffff">
          <bell></bell>
        </el-icon>
      </div>
      <div class="login">
        <img src="../assets/img.jpg" alt="登录头像" />
      </div>
      <div class="username">
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            {{ username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
              <el-dropdown-item>个性设置</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
const username = 'test'
</script>

<style scoped>
.header {
  width: 100%;
  height: 75px;
  background-color: #0b5345;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 75px;
  height: 70px;
}
.logo img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.title {
  width: 300px;
  height: 75px;
}
.user {
  width: 250px;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.message-center {
  width: 35px;
  height: 25px;
}
.message-center .el-icon svg {
  width: 25px;
  height: 25px;
}
.login {
  width: 75px;
  height: 75px;
}
.login img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin: 5px;
}
.el-dropdown {
  color: var(--text-color);
}
</style>


