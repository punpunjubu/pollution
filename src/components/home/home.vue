<template >
  <v-app light>
    <v-tabs
    centered
    color="yellow"
    dark
    icons-and-text
  >
    <v-tabs-slider color="black"></v-tabs-slider>

    <v-tab href="#tab-1">
      Home
      <v-icon>home</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      Detail
      <v-icon>chrome_reader_mode</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      Contact
      <v-icon>call</v-icon>
    </v-tab>

    <v-tab-item
      v-for="i in 1"
      :key="i"
      :value="'tab-' + i"
    >
    <v-carousel interval="500000">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        v-html="item.content"
      >
      </v-carousel-item>
    </v-carousel>
    <v-timeline >
      <v-timeline-item
        color="red lighten-2"
        large
      >
        <template v-slot:opposite>
          <span>last edited on 16 May 2019, at 20:36 (UTC)</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Electrostatic precipitator</v-card-title>
          <v-card-text>
           An electrostatic precipitator (ESP) is a filtration device that removes fine particles, like dust and smoke, from a flowing gas using the force of an induced electrostatic charge minimally impeding the flow of gases through the unit.</v-card-text>
        </v-card>
        <v-spacer></v-spacer>
        <!-- <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker> -->
      </v-timeline-item>
      <v-timeline-item
        color="red lighten-2"
        large
      >
        <template v-slot:opposite>
          <span>Login here</span>
        </template>
        <v-card class="elevation-2">
          <!-- <v-card-title class="headline">Login</v-card-title> -->
          <v-system-bar color="yellow lighten-5" dark>
           <v-spacer></v-spacer>
          </v-system-bar>
          <v-toolbar color="yellow darken-2" cards dark flat >
            <v-card-title class="title font-weight-regular">Login</v-card-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form
              ref="form"
              v-model="form"
              class="pa-3 pt-4"
          >
              <v-text-field
                v-model="email"
                :rules="[rules.email]"
                box
                color="deep-purple"
                label="Email address"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="[rules.password]"
                box
                color="deep-purple"
                label="Password"
                style="min-height: 96px"
                type="password"
              ></v-text-field>
          </v-form>
          <v-divider></v-divider>
          <v-card-actions class="dpr">
            <div class="row rearr">
              <div class="md-12 flr">
                <v-btn
                class="white--text"
                color="purple darken-1"
                depressed
                @click="onSignUp()"
                >Sign up</v-btn>&nbsp;
                <v-btn
                :loading="isLoading"
                class="white--text"
                color="purple darken-1"
                depressed
                @click="onSubmit()"
                >Login</v-btn>

              </div>

            </div>
          </v-card-actions>
          <v-dialog
            v-model="dialog"
            absolute
            max-width="400"
            persistent
          >
            <v-card>
              <v-card-title class="headline grey lighten-3">Legal</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn
                  flat
                  @click="agreement = false, dialog = false"
                >
                  No
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  class="white--text"
                  color="deep-purple accent-4"
                  @click="agreement = true, dialog = false"
                >
                  Yes
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-timeline-item>
      <v-timeline-item
        color="red lighten-2"
        large
      >
        <template v-slot:opposite>
          <span>Last updated: September 3, 2018</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Cyclone separator</v-card-title>
          <v-card-text>
            Cyclone separators or simply cyclones are separation devices (dry scrubbers) that use the principle of inertia to remove particulate matter from flue gases.[2] Cyclone separators is one of many air pollution control devices known as precleaners since they generally remove larger pieces of particulate matter. This prevents finer filtration methods from having to deal with large, more abrasive particles later on. In addition, several cyclone separators can operate in parallel, and this system is known as a multicyclone.
          </v-card-text>
        </v-card>
        <v-spacer></v-spacer>
        <!-- <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker> -->
      </v-timeline-item>
    </v-timeline>
    </v-tab-item>
  </v-tabs>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
      landscape: true,
      reactive: false,
      agreement: false,
      dialog: false,
      email: '',
      form: true,
      isLoading: false,
      password: '',
      phone: undefined,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [
        {
          src: 'https://www.askideas.com/media/13/Colorful-Welcome-Text-Header-Image.png',
          content: '<iframe width="100%" height="350px" src="https://www.youtube.com/embed/Yz7fVySGugY?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
          src: 'http://www.pptgrounds.com/wp-content/uploads/2013/02/Yellow-Spring-flower-ppt-backgrounds.jpg',
          content: '<iframe width="100%" height="350px" src="https://www.youtube.com/embed/A0tDieiia_c?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
      ],
      rules: {
        email: v => (v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character'
      }
    }
  },
  methods: {
    onSignUp () {
      this.$router.push('/signup')
    },
    onSubmit () {
      var form = {
        email: this.email,
        password: this.password
      }
      this.axios.post(process.env.VUE_APP_PATH + '/api/login', form).then((response) => {
        // eslint-disable-next-line no-console
        console.log('response', response)
        if (response.status === 200) {
          localStorage.setItem('token_pollution', response.data.access_token)
          const id = this.payload(response.data.access_token)
          this.$router.push((`/welcome/cyclone/${id}`))
        }
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.log('error', error.error)
        alert(error.error)
      })
    },
    payload (token) {
      const payload = token.split('.')[1]
      return this.decode(payload)
    },
    decode (payload) {
      const decode = (JSON.parse(atob(payload)))
      const sub = decode.sub
      return sub
    }
  }
}
</script>

<style lang="css" scoped>
div.application--wrap{
  background: lightgoldenrodyellow !important;

}

.v-carousel {
  border-top: 30px solid #fbc02d;
  height: auto !important;
}
.rearr{
  display: flow-root;
  box-sizing: border-box !important;
  /* border: #fbc02d 10px solid; */
}
.dpr {
  display: block;
}
.flr {
  float: right;
}
.v-card__actions .v-btn + .v-btn {
  margin: 0px !important;
}
@media screen and (max-width: 414px) {
  .rearr {
    display: grid !important;
    float: none !important;
    border: 0px !important;
  }
  .v-timeline {
    margin: 0px !important;
  }
  .vtimeline1{
  }
  * {
    font-size: 14px !important;
  }
}

.v-timeline {
  margin:30px;
}
</style>
