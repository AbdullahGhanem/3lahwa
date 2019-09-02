<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <nuxt-link to="/">
        <div class="logo" />
      </nuxt-link>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['leagues']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="leagues">
          <nuxt-link to="/leagues">
            leagues
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="teams">
          <nuxt-link to="/teams">
            teams
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="players">
          <nuxt-link to="/players">
            players
          </nuxt-link>
        </a-menu-item>        
        <a-menu-item key="matches">
          <nuxt-link to="/matches">
            matches
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    
    <a-layout-content style="padding: 0 50px">
      <div class="container" :style="{  padding: '10px 120px', minHeight: '580px' }">
        <nuxt />
      </div>
    </a-layout-content>

    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
    

</template>

<style>
.layout{
    background: none !important;
}
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
