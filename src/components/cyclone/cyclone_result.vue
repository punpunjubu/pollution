<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 >
        <v-card>
          <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12 xl12 >
              <v-card-text>
                <v-container grid-list-xs,sm,md,lg,xl>
                  <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg12 xl12>
                      <h1>
                        Result
                      </h1>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-layout row wrap v-for="item in collection" :key="item.cyclone_id">
            <v-flex xs12 sm12 md12 lg12 xl12 >
                <v-card-text>
                  <v-container>
                    <v-layout row wrap>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.diameter"
                          label="diameter"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.d"
                          label="Bodydiameter D/D"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.h"
                          label="  Height of Inlet H/D"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.w"
                          label="Width of Inlet W/D"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.de"
                          label="Diameter of Gas De/D"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.lv"
                          label="Length of vortex Finder Lb/D"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.lb"
                          label="Length of Body Lb/D"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.lc"
                          label="Length of Cone Lc/D"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.dd"
                          label="Diameter of Dust Outlet Dd/D"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.ne"
                          label="Number of Effective turns (Ne)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.q"
                          label="Flow_rate (Q)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.vi"
                          label="Gas Inlet Velocity (Vi)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.delta_t"
                          label="Gas residence time (Δt)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.u"
                          label="Gas viscosity (u)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.pp"
                          label="Density of the particle (Pp)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.pg"
                          label="Gas density (Pg)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.dpc"
                          label="Diameter of Particle Collection 50% (dpc)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.vpt"
                          label="Partical Terminal Velocity"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.k"
                          label="Please Input K"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.hv"
                          label="Pressure Drop (Hv)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.delta_p"
                          label="Pressure Drop (ΔP)"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.winput"
                          label="Work Input"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-text-field
                          v-model="item.delta_h2o"
                          label="ΔP, in H2O"
                          counter
                          maxlength="20"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 xl12 >
              <v-card-text>
                  <v-container grid-list-xs,sm,md,lg,xl>
                    <v-layout row wrap>
                      <v-flex xs12 sm12 md12 lg12 xl12>
                        <v-data-table
                        :headers="headers"
                        :items="item.collection_result"
                        class="elevation-1"
                        >
                        <template slot="items" slot-scope="props">
                          <td class="text-xs-left">{{ props.item.j }}</td>
                          <td class="text-xs-left">{{ props.item.size_min }}</td>
                          <td class="text-xs-left">{{ props.item.size_max }}</td>
                          <td class="text-xs-left">{{ props.item.dpj }}</td>
                          <td class="text-xs-left">{{ props.item.dpj_dpc }}</td>
                          <td class="text-xs-left">{{ props.item.nj }}</td>
                          <td class="text-xs-left">{{ props.item.mj }}</td>
                          <td class="text-xs-left">{{ props.item.njmj }}</td>
                        </template>
                        </v-data-table>
                      </v-flex>
                    </v-layout>
                  </v-container>
              </v-card-text>
              <v-card-text v-for="item2 in item.sum_percent_collection" :key="item2.cyclone_sumation">
                <v-container grid-list-xs,sm,md,lg,xl>
                  <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg12 xl12>
                      <p>Sumation of njmj: {{item2.cyclone_sumation}}</p>
                    </v-flex>
                  </v-layout>
                  <hr>
                </v-container>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex  xs12 sm12 md12 lg12 xl12>
              <v-card-text>
                <v-container grid-list-xs,sm,md,lg,xl>
                  <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg12 xl12 style="text-align: center;">
                      <v-btn style="width: 100%" color="purple darken-1" @click="tocompare()">Compare</v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'j', align: 'left', sortable: false },
        { text: 'Size min', align: 'left', sortable: false },
        { text: 'Size max', align: 'left', sortable: false },
        { text: 'dpj', align: 'left', sortable: false },
        { text: 'dpj/dpc', align: 'left', sortable: false },
        { text: 'nj', align: 'left', sortable: false },
        { text: 'mj%', align: 'left', sortable: false },
        { text: 'Percent Collected njmj%', align: 'left', sortable: false }
      ],
      collection: [],
      testka: [
        {
          sizemi: 1,
          sizema: 2,
          avgg: 3,
          dpjdpc: 4,
          njj: 5,
          mjj: 6,
          njmjj: 7
        },
        {
          sizemi: 1,
          sizema: 2,
          avgg: 3,
          dpjdpc: 4,
          njj: 5,
          mjj: 6,
          njmjj: 7
        }
      ]
    }
  },
  created () {
    this.axios.get(process.env.VUE_APP_PATH + `/cyclone_result/${this.payload()}`).then((response) => {
      // eslint-disable-next-line no-console
      this.collection = response.data.data
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
    },
    tocompare () {
      this.$router.push((`/welcome/cyclone_compare/${this.payload()}`))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
