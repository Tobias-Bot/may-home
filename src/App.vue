<template>
  <v-app>
    <v-dialog fullscreen dark scrollable v-model="menu">
      <v-card tile light color="white">
        <v-card-title>
          <v-btn icon light @click="menu = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>Hello world </v-card-text>
      </v-card>
    </v-dialog>

    <div class="headerLineTop"></div>
    <div class="headerLineTopSecond">
      <span class="logoTitle">Мαú</span>
    </div>
    <div class="header">
      <a
        href="https://vk.com/warmay"
        target="_blank"
        rel="noopener noreferrer"
        ref="linkRef"
        ><img id="logo" :src="logo" alt="logo"
      /></a>
    </div>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <div class="footer">
      <v-btn fab right bottom fixed light color="white" @click="menu = !menu">
        <v-icon dark> mdi-creation </v-icon>
      </v-btn>
    </div>

    <div class="headerLineBotSecond">
      <span class="footerText">Made for u with ♥</span>
    </div>

    <div class="headerLineBot"></div>
  </v-app>
</template>

<script>
//import bridge from "@vkontakte/vk-bridge";
import qs from "querystring";

import logo from "./pics/logo.png";

//const group_id = 160404048;

export default {
  name: "App",

  data: () => ({
    logo,
    menu: false,
  }),

  created() {
    this.getInitialProps();
  },
  methods: {
    getInitialProps() {
      const str = window.location.search.slice(1);
      const objParams = qs.parse(str);

      //console.log(objParams);

      this.userId = objParams.vk_user_id;

      let platform = objParams.vk_platform;

      if (platform === "mobile_iphone") {
        this.toolbarHeight = 70;
      }

      // this.getUserData();
    },
    goToMay() {
      this.$refs.linkRef.click();
    },
  },
};
</script>
