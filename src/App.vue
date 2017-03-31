<template>
  <div id="app">
    
    <router-view></router-view>
    
    <div>
      <m-header></m-header>
      <m-tabbar v-model="select">
        <m-tabbar-item id='Index' isRouter>
          <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal"> 
          <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 
          首页
        </m-tabbar-item>
        <m-tabbar-item id='AudioBook' isRouter>
          <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal"> 
          <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active"> 
          书影音
        </m-tabbar-item>
        <m-tabbar-item id='Broadcast' isRouter>
          <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal"> 
          <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active"> 
          广播
        </m-tabbar-item>
        <m-tabbar-item id='Group' isRouter>
          <img src="./assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal"> 
          <img src="./assets/images/ic_tab_group_active.png" alt="" slot="icon-active"> 
          小组
        </m-tabbar-item>
        <m-tabbar-item id='Mine' isRouter>
          <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal"> 
          <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active"> 
          我的
        </m-tabbar-item>
      </m-tabbar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  components:{
    mTabbar,
    mTabbarItem
  },
  data(){
    return {
      select:'Index'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
