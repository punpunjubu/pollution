<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card ref="form">
          <v-layout row wrap>
            <v-flex xs12 md12 lg12 xl12 sm12>
              <v-card-text>
                <v-container grid-list-xs,sm,md,lg,xl>
                  <v-layout row wrap>
                    <v-flex  xs10 sm10 lg10 xl10 md10>
                      <h1>Cyclone</h1>
                    </v-flex>
                    <v-flex xs2 sm2 lg2 xl2 md2>
                      <v-badge
                      color="purple"
                      left
                      overlap
                      >
                      <v-icon
                      slot="badge"
                      dark
                      small
                      >done
                      </v-icon>
                      <v-icon
                      color="grey lighten-1"
                      large
                      >
                      account_circle
                      </v-icon>
                      </v-badge>
                      <v-badge
                      overlap
                      color="orange"
                      >
                      <v-icon
                      slot="badge"
                      dark
                      small
                      >notifications</v-icon>
                      <v-icon
                      large
                      color="grey darken-1"
                      >
                      dashboard
                      </v-icon>
                      </v-badge>
                      <v-badge
                      overlap
                      color="green"
                      >
                      <v-icon
                      slot="badge"
                      dark
                      small
                      >list
                      </v-icon>
                      <v-icon
                      large
                      color="grey darken-1"
                      >
                      change_history
                      </v-icon>
                      </v-badge>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-flex>
            <v-flex xs12 md12 lg12 xl12 sm12>
              <v-card-text>
                <v-form>
                  <v-container grid-list-xs,sm,md,lg,xl>
                    <v-layout row wrap>
                      <v-flex xs12 sm12 md6 lg6 xl6>
                        <v-container grid-list-xs,sm,md,lg,xl>
                          <v-layout row wrap>
                            <v-flex xs12 sm12 md12 lg12 xl12>
                              <v-btn class="widthka" color="#FFCDD2" @click="testpost()">testpost</v-btn>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12>
                              <v-btn class="widthka" color="#FFCDD2" @click="heightefficiency1()">Height Efficiency 1</v-btn>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12>
                              <v-btn class="widthka" color="#FF8A80" @click="heightefficiency2()">Height Efficiency 2</v-btn>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12>
                              <v-btn class="widthka" color="#FF5252" @click="conventional3()">Conventional 3</v-btn>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12>
                              <v-btn class="widthka" color="#FF1744" @click="conventional4()">Conventional 4</v-btn>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12>
                              <v-btn class="widthka" color="#D50000" @click="heighthroughput5()">Heigh Throughput 5</v-btn>
                            </v-flex>
                            <v-flex xs12 sm12 md12 lg12 xl12>
                              <v-btn class="widthka" color="#B71C1C" @click="heighthroughput6()">Heigh Throughput 6</v-btn>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 xl6>
                        <v-container grid-list-xs,sm,md,lg,xl>
                          <v-layout row wrap>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <h3>
                                Please input diameter:
                              </h3>
                            </v-flex>
                            <v-flex xs8 sm8 md8 xl8 lg8>
                              <v-text-field
                              ref="diameter"
                              v-model="diameter"
                              outline
                              label="Diameter D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <h3>
                                Bodydiameter ratio:
                              </h3>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="bodydiameter"
                              v-model="bodydiameter"
                              outline
                              label="Bodydiameter D/D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="D"
                              v-model="D"
                              outline
                              label="D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <h3>
                                Height of Inlet ratio:
                              </h3>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="height_inlet"
                              v-model="height_inlet"
                              outline
                              label="  Height of Inlet H/D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="H"
                              v-model="H"
                              outline
                              label="H"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <h3>
                                Width of Inlet ratio:
                              </h3>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="width_inlet"
                              v-model="width_inlet"
                              outline
                              label="Width of Inlet W/D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="W"
                              v-model="W"
                              outline
                              label="W"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <h3>
                                Diameter of Gas ratio:
                              </h3>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="diameter_gas"
                              v-model="diameter_gas"
                              outline
                              label="Diameter of Gas De/D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="De"
                              v-model="De"
                              outline
                              label="De"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <h3>
                                Length of Vortex Finder ratio:
                              </h3>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="length_vortex"
                              v-model="length_vortex"
                              outline
                              label="Length of vortex Finder Lb/D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="S"
                              v-model="S"
                              outline
                              label="S"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <h3>
                                Length of Body ratio:
                              </h3>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="length_body"
                              v-model="length_body"
                              outline
                              label="Length of Body Lb/D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="Lb"
                              v-model="Lb"
                              outline
                              label="Lb"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <h3>
                                Length of Cone ratio:
                              </h3>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="length_cone"
                              v-model="length_cone"
                              outline
                              label="Length of Cone Lc/D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="Lc"
                              v-model="Lc"
                              outline
                              label="Lc"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <h3>
                                Diameter of Dust ratio:
                              </h3>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="diameter_dust"
                              v-model="diameter_dust"
                              outline
                              label="Diameter of Dust Outlet Dd/D"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4 sm4 md4 xl4 lg4>
                              <v-text-field
                              ref="Dd"
                              v-model="Dd"
                              outline
                              label="Dd"
                              type="number"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
        </v-flex>
        <v-progress-linear
        color="error"
        height="20"
        value="75"
        >
        </v-progress-linear>
        <v-flex xs12 md12 lg12 xl12 sm12>
          <v-card ref="form" color="grey">
            <v-layout row wrap>
              <v-flex xs12 md12 lg12 xl12 sm12>
                <v-card-text>
                    <v-container grid-list-xs,sm,md,lg,xl>
                      <v-layout row wrap>
                        <v-flex  xs10 sm10 lg10 xl10 md10>
                          <h1>Calculate Ne</h1>
                        </v-flex>
                        <v-flex xs2 sm2 lg2 xl2 md2>
                          <v-badge
                          color="purple"
                          left
                          overlap
                          >
                          <v-icon
                          slot="badge"
                          dark
                          small
                          >done
                          </v-icon>
                          <v-icon
                          color="grey lighten-1"
                          large
                          >
                          account_circle
                          </v-icon>
                          </v-badge>
                          <v-badge
                          overlap
                          color="orange"
                          >
                          <v-icon
                          slot="badge"
                          dark
                          small
                          >notifications</v-icon>
                          <v-icon
                          large
                          color="grey darken-1"
                          >
                          dashboard
                          </v-icon>
                          </v-badge>
                          <v-badge
                          overlap
                          color="green"
                          >
                          <v-icon
                          slot="badge"
                          dark
                          small
                          >list
                          </v-icon>
                          <v-icon
                          large
                          color="grey darken-1"
                          >
                          change_history
                          </v-icon>
                          </v-badge>
                        </v-flex>
                      </v-layout>
                    </v-container>
                </v-card-text>
              </v-flex>
              <v-flex xs12 md12 lg12 xl12 sm12>
                <v-card-text>
                  <v-form>
                    <v-container grid-list-xs,sm,md,lg,xl>
                      <v-layout row wrap>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <header class="dis">Number of Effective turns (Ne)</header>
                        </v-flex>
                        <v-flex xs8 sm8 md8 lg6 xl8>
                          <v-text-field
                          ref="ne"
                          v-model="ne"
                          label="Number of Effective turns (Ne)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <v-text-field
                          ref="flow_rate"
                          v-model="flow_rate"
                          label="Flow_rate (Q)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <v-text-field
                          ref="vi"
                          v-model="vi"
                          label="Gas Inlet Velocity (Vi)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <v-text-field
                          ref="gas_residence_time"
                          v-model="gas_residence_time"
                          label="Gas residence time (Δt)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <v-text-field
                          ref="gas_viscosity"
                          v-model="gas_viscosity"
                          label="Gas viscosity (u)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <v-text-field
                          ref="density_particle"
                          v-model="density_particle"
                          label="Density of the particle (Pp)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <v-text-field
                          ref="gas_density"
                          v-model="gas_density"
                          label="Gas density (Pg)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <header class="dis">Diameter of Particle Collection 50% (dpc)</header>
                        </v-flex>
                        <v-flex xs8 sm8 md8 lg8 xl8>
                          <v-text-field
                          ref="dpc"
                          v-model="dpc"
                          label="Diameter of Particle Collection 50% (dpc)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12 xl12>
                          <v-text-field
                          ref="Vt"
                          v-model="Vt"
                          label="Partical Terminal Velocity"
                          outline
                          type="number"

                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12 xl12>
                          <v-text-field
                          ref="k"
                          v-model="k"
                          label="Please Input K"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <v-text-field
                          ref="Hv"
                          v-model="Hv"
                          label="Pressure Drop (Hv)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <v-text-field
                          ref="deltaP"
                          v-model="deltaP"
                          label="Pressure Drop (ΔP)"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 sm4 md4 lg4 xl4>
                          <v-text-field
                          ref="wf"
                          v-model="wf"
                          label="Work Input"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12 xl12>
                          <v-text-field
                          ref="water"
                          v-model="water"
                          label="ΔP, in H2O"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-progress-linear
        color="yellow"
        height="20"
        value="75"
        >
        </v-progress-linear>
        <v-flex xs12 md12 lg12 xl12 sm12>
          <v-card ref="form">
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg12 xl12>
                <v-card-text>
                  <v-form>
                    <v-container grid-list-xs,sm,md,lg,xl >
                      <v-layout row wrap v-for="(item, i) in fieldArray" :key="i">
                        <v-flex xs3 sm3 md3 lg3 xl3>
                          <v-text-field
                          v-model="item.size_min"
                          label="Size min"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 sm3 md3 lg3 xl3>
                          <v-text-field
                          v-model="item.size_max"
                          label="Size max"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 sm3 md3 lg3 xl3>
                          <v-text-field
                          v-model="item.mj"
                          label="mj%"
                          outline
                          type="number"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 sm3 md3 lg3 xl3>
                          <v-btn color="error" @click="delete_file(i)">ลบ</v-btn>
                        </v-flex>
                      </v-layout>
                      <v-flex xs2 sm2 md2 lg2 xl2 style="text-md-right">
                        <v-btn color="primary" @click="push_attribute()">เพิ่มแถว</v-btn>
                        <v-btn color="primary" @click="caldatable()">testdata</v-btn>
                      </v-flex>
                      <!-- <pre>{{fieldArray}}</pre>
                      <pre>{{sizemin_cal}}</pre>
                      <pre>{{size_max_cal}}</pre>
                      <pre>{{dpj_cal}}</pre>
                      <pre>{{dpjdpc_cal}}</pre>
                      <pre>{{nj_cal}}</pre>
                      <pre>{{mj_cal}}</pre>
                      <pre>{{percent_collected_cal}}</pre> -->
                    </v-container>
                  </v-form>
                </v-card-text>
                <v-card-text v-if="checkdata == true">
                  <v-form>
                    <v-container grid-list-xs,sm,md,lg,xl>
                      <v-layout row wrap>
                        <v-flex xs12 sm12 md12 lg12 xl12>
                          <v-data-table
                          :headers="headers"
                          :items="mama"
                          class="elevation-1"
                          >
                          <template slot="mama" slot-scope="props">
                            <td class="text-xs-left">{{ props.index }}</td>
                            <td class="text-xs-left">{{ props.item.sizemi }}</td>
                            <td class="text-xs-left">{{ props.item.sizema }}</td>
                            <td class="text-xs-left">{{ props.item.avgg }}</td>
                            <td class="text-xs-left">{{ props.item.dpjdpc }}</td>
                            <td class="text-xs-left">{{ props.item.njj }}</td>
                            <td class="text-xs-left">{{ props.item.mjj }}</td>
                            <td class="text-xs-left">{{ props.item.njmjj }}</td>
                          </template>
                          </v-data-table>
                        </v-flex>
                        <v-flex xs12 sm12 md12 lg12 xl12>
                          <h2>n% = {{sum}}</h2>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-form>
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
      diameter: null,
      bodydiameter: null,
      height_inlet: null,
      width_inlet: null,
      diameter_gas: null,
      length_vortex: null,
      length_body: null,
      length_cone: null,
      diameter_dust: null,
      //  //////////////////////////////////
      D: null,
      H: null,
      W: null,
      De: null,
      S: null,
      Lb: null,
      Lc: null,
      Dd: null,
      //  /////////////////////////////////
      ne: null,
      flow_rate: null,
      vi: null,
      gas_residence_time: null,
      gas_viscosity: null,
      density_particle: null,
      gas_density: null,
      dpc: null,
      Vt: null,
      k: null,
      Hv: null,
      deltaP: null,
      wf: null,
      water: null,
      //  ////////////////////////////////
      jth: null,
      size_min: null,
      size_max: null,
      mj: null,
      fieldArray: [{}],
      Attribute: {},
      sizemin_cal: [],
      size_max_cal: [],
      mj_cal: [],
      dpj_cal: [],
      dpjdpc_cal: [],
      nj_cal: [],
      percent_collected_cal: [],
      sum: null,
      checkdata: false,
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
      ],
      headers: [
        { text: 'j', align: 'left', sortable: false },
        { text: 'Size min', align: 'left', sortable: false },
        { text: 'Size max', align: 'left', sortable: false },
        { text: 'dpj', align: 'left', sortable: false },
        { text: 'dpj/dpc', align: 'left', sortable: false },
        { text: 'nj', align: 'left', sortable: false },
        { text: 'mj%', align: 'left', sortable: false },
        { text: 'Percent Collected njmj%%', align: 'left', sortable: false }
      ],
      data_cal: [{}],
      cal_arttribute: {},
      mama: null
    }
  },
  computed: {
    numberOfEffectiveTurns_cal () {
      return [this.H, this.Lb, this.Lc].join()
    },
    gasInletvelocity () {
      return this.flow_rate
    },
    diameterOfParticleCollectionWith50PercentEfficiency () {
      return [this.gas_viscosity, this.density_particle, this.gas_density].join()
    },
    pressuredrop () {
      return this.k
    }
  },
  methods: {
    push_attribute () {
      this.fieldArray.push(this.Attribute)
      this.Attribute = {}
      // eslint-disable-next-line no-console
      console.log('fieldArray', this.fieldArray, 'Attribute', this.Attribute)
    },
    delete_file (index) {
      this.fieldArray.splice(index, 1)
    },
    caldatable () {
      for (let i = 0; i < this.fieldArray.length; i++) {
        this.data_cal.push(this.cal_arttribute)
        this.sizemin_cal[i] = this.fieldArray[i].size_min
        this.data_cal[i].sizemi = this.sizemin_cal[i]
        this.size_max_cal[i] = this.fieldArray[i].size_max
        this.data_cal[i].sizema = this.size_max_cal[i]
        this.dpj_cal[i] = ((this.sizemin_cal[i] * 1) + (this.size_max_cal[i] * 1)) / 2
        this.data_cal[i].avgg = this.dpj_cal[i]
        this.dpjdpc_cal[i] = (this.dpj_cal[i] / this.dpc).toFixed(3)
        this.data_cal[i].dpjdpc = this.dpj_cal[i]
        this.nj_cal[i] = ((1 / ((1 * 1) + (Math.pow((this.dpc / this.dpj_cal[i]), 2) * 1)))).toFixed(3)
        this.data_cal[i].njj = this.nj_cal[i]
        this.mj_cal[i] = this.fieldArray[i].mj
        this.data_cal[i].mjj = this.mj_cal[i]
        this.percent_collected_cal[i] = (this.nj_cal[i] * this.mj_cal[i]).toFixed(3)
        this.data_cal[i].njmjj = this.percent_collected_cal[i]
        // eslint-disable-next-line no-console
        console.log('sizemin_cal', this.sizemin_cal, 'size_max_cal', this.size_max_cal)
        // eslint-disable-next-line no-console
        console.log('dpj_cal', this.dpj_cal)
        // eslint-disable-next-line no-console
        console.log('dpjdpc_cal', this.dpjdpc_cal)
        // eslint-disable-next-line no-console
        console.log('nj_cal', this.nj_cal)
        // eslint-disable-next-line no-console
        console.log('mj_cal', this.mj_cal)
        // eslint-disable-next-line no-console
        console.log('percent_collected_cal', this.percent_collected_cal)
        this.cal_arttribute = {}
      }
      // eslint-disable-next-line no-console
      console.log('this.data_cal', this.data_cal)
      this.sumation()
    },
    sumation () {
      this.sum = 0
      for (let i = 0; i < this.percent_collected_cal.length; i++) {
        this.sum = ((this.sum * 1) + (this.percent_collected_cal[i] * 1))
      }
      // eslint-disable-next-line no-console
      console.log('this.sum', this.sum)
      var aaa = [
        this.checkdata = true,
        this.mama = this.data_cal
      ]
      return aaa
    },
    heightefficiency1 () {
      this.bodydiameter = 1.0
      this.height_inlet = 0.5
      this.width_inlet = 0.2
      this.diameter_gas = 0.5
      this.length_vortex = 0.5
      this.length_body = 1.5
      this.length_cone = 2.5
      this.diameter_dust = 0.375
    },
    heightefficiency2 () {
      this.bodydiameter = 1.0
      this.height_inlet = 0.44
      this.width_inlet = 0.21
      this.diameter_gas = 0.4
      this.length_vortex = 0.5
      this.length_body = 1.4
      this.length_cone = 2.5
      this.diameter_dust = 0.4
    },
    conventional3 () {
      this.bodydiameter = 1.0
      this.height_inlet = 0.5
      this.width_inlet = 0.25
      this.diameter_gas = 0.5
      this.length_vortex = 0.625
      this.length_body = 2.0
      this.length_cone = 2.0
      this.diameter_dust = 0.25
    },
    conventional4 () {
      this.bodydiameter = 1.0
      this.height_inlet = 0.5
      this.width_inlet = 0.25
      this.diameter_gas = 0.5
      this.length_vortex = 0.6
      this.length_body = 1.75
      this.length_cone = 2.0
      this.diameter_dust = 0.4
    },
    heighthroughput5 () {
      this.bodydiameter = 1.0
      this.height_inlet = 0.75
      this.width_inlet = 0.375
      this.diameter_gas = 0.75
      this.length_vortex = 0.875
      this.length_body = 1.5
      this.length_cone = 2.5
      this.diameter_dust = 0.375
    },
    heighthroughput6 () {
      this.bodydiameter = 1.0
      this.height_inlet = 0.8
      this.width_inlet = 0.35
      this.diameter_gas = 0.75
      this.length_vortex = 0.85
      this.length_body = 1.7
      this.length_cone = 2.0
      this.diameter_dust = 0.4
    },
    testpost () {
      alert('ggg')
      var textSource = { ne: 6, q: 6, vi: 6 }
      this.axios.post(process.env.VUE_APP_PATH + '/cyclone_type_post', textSource).then((response) => {
        if (response.data['status'] === 'successful') {
          alert('eieie')
        } else {
          // console.log('response', response)
          alert('maieieie')
        }
      })
    }
  },
  watch: {
    diameter () {
      this.D = this.diameter * this.bodydiameter
      this.H = this.diameter * this.height_inlet
      this.W = this.diameter * this.width_inlet
      this.De = this.diameter * this.diameter_gas
      this.S = this.diameter * this.length_vortex
      this.Lb = this.diameter * this.length_body
      this.Lc = this.diameter * this.length_cone
      this.Dd = this.diameter * this.diameter_dust
    },
    numberOfEffectiveTurns_cal () {
      this.ne = (1 / this.H) * (this.Lb + (this.Lc / 2))
    },
    gasInletvelocity () {
      this.vi = this.flow_rate / (this.H * this.W)
      this.gas_residence_time = (2 * Math.PI * (this.diameter / 2) * this.ne) / this.vi
    },
    diameterOfParticleCollectionWith50PercentEfficiency () {
      this.dpc = (1000000 * Math.sqrt((9 * this.gas_viscosity * this.W) / (2 * Math.PI * 60 * this.ne * this.vi * (this.density_particle - this.gas_density)))).toFixed(1)
      this.Vt = this.W / this.gas_residence_time
    },
    pressuredrop () {
      this.Hv = (this.k * this.H * this.W) / (Math.pow(this.De, 2))
      this.deltaP = 0.5 * this.gas_density * Math.pow((this.vi / 60), 2) * this.Hv
      this.wf = (this.flow_rate * this.deltaP) / 60
      this.water = (this.deltaP * 0.00402).toFixed(1)
    }
  }
}
</script>

<style lang="css">
.widthka {
  width:100%;
}
.v-text {
  position: relative;
}
</style>
