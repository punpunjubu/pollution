<template>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
    <v-system-bar
      color="deep-purple darken-4"
      dark
    >
      <v-spacer></v-spacer>
      <v-icon small>mdi-square</v-icon>
      <v-icon
        class="ml-1"
        small
      >mdi-circle</v-icon>
      <v-icon
        class="ml-1"
        small
      >mdi-triangle</v-icon>
    </v-system-bar>
    <v-toolbar
      color="deep-purple accent-4"
      cards
      dark
      flat
    >
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular">Login</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
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
      :rules="[rules.password, rules.length(6)]"
      box
      color="deep-purple"
      counter="6"
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
        color="deep-purple accent-4"
        depressed
        @click="onSubmit()"
      >Submit</v-btn>
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
</style>
