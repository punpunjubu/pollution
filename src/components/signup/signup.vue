<template>
  <v-app light>
    <v-card

      style="max-width: auto; height:100%"
    >
      <v-system-bar
        color="yellow lighten-5"
        dark
      >
      </v-system-bar>
      <v-toolbar
        color="yellow darken-2"
        cards
        dark
        flat
      >
        <v-card-title class="title font-weight-regular" style="padding-left: 0px;">Sign up</v-card-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form
        ref="form"
        v-model="form"
        class="pa-3 pt-4"
      >
        <v-text-field
        v-model="name"
        box
        color="deep-purple"
        label="Name"
        ></v-text-field>
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
        <v-text-field
        v-model="password_confirmation"
        :rules="[rules.repassword]"
        box
        color="deep-purple"
        label="Confirm password"
        style="min-height: 96px"
        type="password"
        ></v-text-field>
        <v-checkbox
          v-model="agreement"
          :rules="[rules.required]"
          color="deep-purple"
        >
          <template v-slot:label>
            I agree to the&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
            &nbsp;and&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a>*
          </template>
        </v-checkbox>
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
          :disabled="!form"
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
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      agreement: false,
      dialog: false,
      email: '',
      form: false,
      isLoading: false,
      password: '',
      password_confirmation: '',
      phone: undefined,
      name: '',
      rules: {
        email: v => (v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
        repassword: v => (v === this.password) || 'password not match',
        required: v => !!v || 'This field is required'
      }
    }
  },
  methods: {
    onSubmit () {
      var form = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }
      this.axios.post(process.env.VUE_APP_PATH + '/api/signup', form).then((response) => {
        // eslint-disable-next-line no-console
        // console.log('response', response)
        if (response.status === 200) {
          alert('ลงทะเบียนสำเร็จ กรุณา Login เข้าสู่ระบบอีกครั้ง')
          this.$router.push((`/home`))
        }
      },
      (error) => {
        alert(error.error)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
