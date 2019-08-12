<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" class="tt" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list dense>
        <div class="w-100 center-x center-y pa-4">
          <!-- <img width="100%" :src="image" /> -->
        </div>
        <!-- <v-divider></v-divider> -->
        <template v-for="item in items">
          <v-list-group v-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.icon" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  <span :class="item.model ? 'menu_active title' : 'title'">{{ item.text }}</span>
                  <div class="right center-y">
                    <v-icon v-show="!item.model">keyboard_arrow_down</v-icon>
                    <v-icon v-show="item.model">keyboard_arrow_up</v-icon>
                  </div>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click="goPage(child.link)">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="subheading">
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="goPage(item.link)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <span :class="item.model ? 'menu_active title' : 'title'">{{ item.text }}</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="navbar" :clipped-left="$vuetify.breakpoint.lgAndUp" dark app color="#fbc02d" fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      drawer: null,
      userId: '',
      image: '/assets/logo.png',
      items: [
        {
          icon: 'assignment_ind',
          'arrow': 'keyboard_arrow_down',
          'arrow-alt': 'keyboard_arrow_down',
          text: 'ออกแบบ',
          model: false,
          children: [
            { icon: 'add', text: 'Cyclone', link: `/welcome/cyclone/${this.payload()}` },
            { icon: 'add', text: 'ESP', link: `/welcome/esp/${this.payload()}` }
          ]
        },
        // { icon: 'import_contacts', text: 'ผู้ใช้ใหม่', link: '/calendar_counter' },
        { icon: 'assignment_ind',
          'arrow': 'keyboard_arrow_down',
          'arrow-alt': 'keyboard_arrow_up',
          text: 'รายการ',
          model: false,
          children: [
            { icon: 'add', text: 'Cyclone results', link: `/welcome/cyclone_result/${this.payload()}` },
            { icon: 'add', text: 'Compare Cyclone', link: `/welcome/cyclone_compare/${this.payload()}` },
            { icon: 'add', text: 'ESP results', link: `/welcome/esp_result/${this.payload()}` }
          ]
        }
      ]
    }
  },
  methods: {
    goPage (link) {
      this.$router.push(link)
    },
    payload () {
      const token = localStorage.getItem('token_pollution').split('.')[1]
      return this.decode(token)
    },
    decode (token) {
      const decode = (JSON.parse(atob(token)))
      const sub = decode.sub
      // eslint-disable-next-line no-console
      console.log('sub', sub)
      return sub
    }
  },
  created () {
    this.userId = this.payload()
    // eslint-disable-next-line no-console
    console.log('id', this.userId)
  }
}
</script>
<style>
.menu_active {
  color:  #fbc02d;
}
.navbar .btn--icon div.btn__content:before {
  width: 36px !important;
  height: 36px !important;
}
.btn .btn__content .icon, .btn .btn__content .avatar  {
  /* padding-left: 4px!important; */
}
.toolbar .toolbar__content>:not(.btn):not(.menu):first-child:not(:only-child), .toolbar .toolbar__extension>:not(.btn):not(.menu):first-child:not(:only-child) {
  margin-left: 5px !important;
}
.tt {
  margin-top: 56px !important;
}
</style>
