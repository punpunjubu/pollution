<template >
  <v-app light>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
    <v-timeline>
      <v-timeline-item
        color="red lighten-2"
        large
      >
        <template v-slot:opposite>
          <span>WELCOME TO MY PAGE!</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Special Problem</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-card-text>
        </v-card>
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
          <v-card-actions>
            <v-btn
              flat
              @click="$refs.form.reset()"
            >
              Clear
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :loading="isLoading"
              class="white--text"
              color="purple darken-1"
              depressed
              @click="onSubmit()"
            >Login</v-btn>
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
   </v-timeline>
    <!-- <v-container grid-list-xs,sm,md,lg,xl>
      <v-layout row wrap>
        <v-flex xs12 md12 lg12>
          <v-card
            class="mx-auto"
            style=" max-height: auto;"
          >

          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      agreement: false,
      dialog: false,
      email: '',
      form: true,
      isLoading: false,
      password: '',
      phone: undefined,
      items: [
        {
          src: 'https://www.askideas.com/media/13/Colorful-Welcome-Text-Header-Image.png'
        },
        {
          src: 'http://www.pptgrounds.com/wp-content/uploads/2013/02/Yellow-Spring-flower-ppt-backgrounds.jpg'
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
  /* height: 800px !important; */
}
</style>
