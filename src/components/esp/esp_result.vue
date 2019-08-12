<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 >
          <v-card-text >
              <v-container grid-list-xs,sm,md,lg,xl>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <v-data-table
                    :headers="headers"
                    :items="esp_result"
                    class="elevation-1"
                    >
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-left">{{ props.item.eh }}</td>
                      <td class="text-xs-left">{{ props.item.ph }}</td>
                      <td class="text-xs-left">{{ props.item.cw }}</td>
                      <td class="text-xs-left">{{ props.item.pl }}</td>
                      <td class="text-xs-left">{{ props.item.sa }}</td>
                      <td class="text-xs-left">{{ props.item.es }}</td>
                      <td class="text-xs-left">{{ props.item.el }}</td>
                      <td class="text-xs-left">{{ props.item.ca }}</td>
                      <td class="text-xs-left">{{ props.item.nd }}</td>
                      <td class="text-xs-left">{{ props.item.nm }}</td>
                      <td class="text-xs-left">{{ props.item.bs }}</td>
                      <td class="text-xs-left">{{ props.item.aa }}</td>
                      <td class="text-xs-left">{{ props.item.np }}</td>
                      <td class="text-xs-left">{{ props.item.mr }}</td>
                      <td class="text-xs-left">{{ props.item.cp }}</td>
                    </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
              </v-container>
          </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      esp_result: [],
      headers: [
        { text: 'Hight of ESP', align: 'left', sortable: false },
        { text: 'Height of plate', align: 'left', sortable: false },
        { text: 'Chanel width', align: 'left', sortable: false },
        { text: 'Plate length', align: 'left', sortable: false },
        { text: 'Spacing between e sections', align: 'left', sortable: false },
        { text: 'Entrance length', align: 'left', sortable: false },
        { text: 'Exit length', align: 'left', sortable: false },
        { text: 'Overall length', align: 'left', sortable: false },
        { text: 'Number of ducts', align: 'left', sortable: false },
        { text: 'Number of mechanical fields', align: 'left', sortable: false },
        { text: 'Number of bus sections', align: 'left', sortable: false },
        { text: 'Actual collection area', align: 'left', sortable: false },
        { text: 'The totle number of plate in the ESP', align: 'left', sortable: false },
        { text: 'Mass removed', align: 'left', sortable: false },
        { text: 'Charge on the partical', align: 'left', sortable: false }
      ]
    }
  },
  created () {
    this.axios.get(process.env.VUE_APP_PATH + `/esp/${this.payload()}`).then((response) => {
      // eslint-disable-next-line no-console
      this.esp_result = response.data.data
    },
    (error) => {
      // eslint-disable-next-line no-console
      alert(error.error)
    })
  },
  methods: {
    payload () {
      const token = localStorage.getItem('token_pollution').split('.')[1]
      return this.decode(token)
    },
    decode (token) {
      const decode = (JSON.parse(atob(token)))
      const sub = decode.sub
      // eslint-disable-next-line no-console
      return sub
    }
  }
}
</script>

<style lang="css" scoped>
</style>
