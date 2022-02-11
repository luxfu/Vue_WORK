<template>
  <div class="sidebar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#117A65"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>系统首页</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <files />
          </el-icon>
          <span>资源中心</span>
        </template>
        <el-menu-item index="2-1">用户中心</el-menu-item>
        <el-menu-item index="2-3">服务器中心</el-menu-item>
        <el-menu-item index="2-2">全局配置</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <document />
          </el-icon>
          <span>测试用例</span>
        </template>
        <el-menu-item index="3-1">功能测试用例</el-menu-item>
        <el-menu-item index="3-2">接口测试用例</el-menu-item>
        <el-menu-item index="3-3">UI测试用例</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="4">
        <template #title>
          <el-icon>
            <notebook />
          </el-icon>
          <span>脚本中心</span>
        </template>
      </el-menu-item>
      <el-menu-item index="5">
        <template #title>
          <el-icon>
            <setting />
          </el-icon>
          <span>系统设置</span>
        </template>
      </el-menu-item>
      <el-menu-item index="6">
        <template #title>
          <el-icon>
            <management />
          </el-icon>
          <span>功能扩展</span>
        </template>
      </el-menu-item>
      <el-menu-item index="7">
        <template #title>
          <el-icon>
            <wallet />
          </el-icon>
          <span>捐助作者</span>
        </template>
      </el-menu-item>
      <el-menu-item index="8">
        <template #title>
          <el-icon>
            <more />
          </el-icon>
          <span>更多功能</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu {
  border: 0;
}
</style>