<template lang="html">
  <facebook-login class="button"
  appId="2419548438077884"
  @login="onLogin"
  @logout="onLogout"
  @sdk-loaded="sdkLoaded">
</facebook-login>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs'
export default {
  components: {
    facebookLogin
  },
  data () {
    return {
      isConnected: false,
      name: '',
      email: '',
      personalID: '',
      FB: undefined
    }
  },
  methods: {
    getUserData () {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          // console.warn('data api', userInformation)
          this.personalID = userInformation.id
          this.email = userInformation.email
          this.name = userInformation.name
        }
      )
    },
    sdkLoaded (payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin () {
      this.isConnected = true
      this.getUserData()
    },
    onLogout () {
      this.isConnected = false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
