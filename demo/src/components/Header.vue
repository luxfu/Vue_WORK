<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/img/mealux.png" alt="自动化测试" />
    </div>
    <div class="title"></div>
    <div class="user">
      <el-tooltip
        effect="dark"
        :content="messageCount ? `有${messageCount}条未读消息` : `消息中心`"
        placement="bottom"
      >
        <div class="btn-bell">
          <router-link to="/messageCenter">
            <el-icon class="el-icon-bell" :size="25" color="#ffffff">
              <bell />
            </el-icon>
          </router-link>
          <span class="btn-bell-badge"></span>
        </div>
      </el-tooltip>
      <div class="login">
        <img src="../assets/img/img.jpg" alt="登录头像" />
      </div>
      <div class="username">
        <el-dropdown :hide-on-click="false" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="user-center"
                >个人中心</el-dropdown-item
              >
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              <el-dropdown-item command="settings">个性设置</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const store = useStore()
const router = useRouter()
const username = store.state.username
const messageCount = store.state.messageCount
const handleCommand = (command) => {
  ElMessage.success(`click ${command}`)
  if (command == 'usercenter') {
    router.push('/usercenter')
  } else if (command == 'settings') {
    router.push('/settings')
  } else if (command == 'loginout') {
    router.push('/loginout')
  }
}
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
.btn-bell {
  position: relative;
  width: 35px;
  height: 25px;
}
.btn-bell .el-icon svg {
  width: 25px;
  height: 25px;
}
.btn-bell-badge {
  position: absolute;
  right: 7px;
  width: 8px;
  height: 8px;
  color: white;
  background-color: red;
  border-radius: 4px;
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


