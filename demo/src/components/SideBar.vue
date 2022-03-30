<template>
  <div class="sidebar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#117A65"
      class="el-menu-vertical-demo"
      default-active=""
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>
                  <el-icon>
                    <component :is="item.icon"></component>
                  </el-icon>
                  <span>{{ subItem.title }}</span>
                </template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :index="threeItem.index"
                  :key="i"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
const handleOpen = (key, keypath) => {
  console.log(key, keypath)
}
const items = [
  {
    icon: 'location',
    index: '/dashboard',
    title: '系统首页',
  },
  {
    icon: 'files',
    index: '/table',
    title: '资源中心',
    subs: [
      {
        icon: '',
        index: '/table',
        title: '用户中心',
      },
      {
        icon: '',
        index: '/table',
        title: '服务器中心',
      },
      {
        icon: '',
        index: '/table',
        title: '全局配置',
      },
    ],
  },
  {
    icon: 'document',
    index: '/allcases',
    title: '测试用例',
    subs: [
      {
        icon: '',
        index: '/functioncases',
        title: '功能测试用例',
      },
      {
        icon: '',
        index: '/apicases',
        title: '接口测试用例',
      },
      {
        icon: '',
        index: '/uicases',
        title: 'UI测试用例',
      },
    ],
  },
  {
    icon: 'notebook',
    index: '/scripts',
    title: '脚本中心',
  },
  {
    icon: 'setting',
    index: '/setting',
    title: '系统设置',
  },
  {
    icon: 'management',
    index: '/extension',
    title: '功能扩展',
  },
  {
    icon: 'wallet',
    index: '/donate',
    title: '捐助作者',
  },
  {
    icon: 'more',
    index: '/more',
    title: '更多功能',
  },
]
</script>

<style scoped>
.el-menu {
  border: 0;
}
</style>