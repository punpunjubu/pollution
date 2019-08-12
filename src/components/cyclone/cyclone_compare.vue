<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-card>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12 xl12 >
          <v-card-text>
            <v-container grid-list-xs,sm,md,lg,xl>
              <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <h1>
                    Compare
                  </h1>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-flex>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <v-container grid-list-xs,sm,md,lg,xl>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-data-table
                :headers="headers"
                :items="sum_collection"
                class="elevation-1"
                >
                <template slot="items" slot-scope="props">
                  <td class="text-xs-left">{{ props.item.cyclone_id }}</td>
                  <td class="text-xs-left">{{ props.item.type_name }}</td>
                  <td class="text-xs-left">{{ props.item.diameter }}</td>
                  <td class="text-xs-left">{{ props.item.sum_njmj }}</td>
                  <td class="text-xs-left">{{ props.item.winput }}</td>
                  <td class="text-xs-left">{{ props.item.delta_h2o }}</td>
                </template>
                </v-data-table>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'id', align: 'left', sortable: false },
        { text: 'cyclone_type', align: 'left', sortable: false },
        { text: 'Diameter', align: 'left', sortable: false },
        { text: '%Collection', align: 'left', sortable: false },
        { text: 'Work input', align: 'left', sortable: false },
        { text: 'H2O', align: 'left', sortable: false }
      ],
      sum_collection: []
    }
  },
  created () {
    this.axios.get(process.env.VUE_APP_PATH + `/cyclone_comparation/${this.payload()}`).then((response) => {
      // eslint-disable-next-line no-console
      this.sum_collection = response.data.data
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
