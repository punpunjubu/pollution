<template>
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card  ref="form" >
          <v-layout row wrap >
            <v-flex xs12 md12 lg12 xl12 sm12>
              <v-card-text>
                <v-container grid-list-xs,sm,md,lg,xl>
                  <v-layout row wrap>
                    <v-flex xs10 sm10 lg10 xl10 md10>
                      <h1>Electrostatic Precipitator</h1>
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
                    <v-layout row wrap >
                      <v-flex xs12 sm12 md12 lg12 xl12>
                        <v-text-field
                        ref="require_area"
                        v-model="require_area"
                        box
                        :label="test + a"
                        :rules="[() => !!require_area || ' Actual collection area is required']"
                        type="number"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 xl6 >
                        <v-text-field
                        ref="flow_rate"
                        v-model="flow_rate"
                        label="Q : flow rate"
                        outline
                        :rules="[() => !!flow_rate || 'flow_rate is required']"
                        type="number"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 xl6 >
                        <v-text-field
                        ref="linear_gas_velocity"
                        v-model="linear_gas_velocity"
                        label="u : linear gas velocity"
                        hint="70-150m/min or 1.2-2.5m/sec"
                        outline
                        :rules="[() => !!linear_gas_velocity || 'linear gas velocity is required']"
                        type="number"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 xl6 >
                        <v-text-field
                        ref="channel_width"
                        v-model="channel_width"
                        label="D : channel width"
                        outline
                        :rules="[() => !!channel_width || 'channel width is required']"
                        type="number"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 xl6 >
                        <v-text-field
                        ref="plate_height"
                        v-model="plate_height"
                        label="H : plate height"
                        outline
                        :rules="[() => !!plate_height || 'plate height is required']"
                        type="number"

                        ></v-text-field>
                      </v-flex>
                      <v-flex xs6 sm6 md2 lg2 xl2>
                        <header >Number of ducts</header>
                      </v-flex>
                      <v-flex xs6 sm6 md10 lg10 xl10>
                        <v-text-field
                        ref="duct_number"
                        v-model="duct_number"
                        label="Answer"
                        outline
                        type="number"

                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 xl6 >
                        <v-text-field
                        ref="aspect_ratio"
                        v-model="aspect_ratio"
                        label="R : Aspect ratio"
                        outline
                        :rules="[() => !!aspect_ratio || 'Aspect ratio is required']"
                        type="number"

                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 xl6 >
                        <v-text-field
                        ref="plate_length"
                        v-model="plate_length"
                        label="Lp : Plate length"
                        outline
                        :rules="[() => !!plate_length || 'plate length is required']"
                        type="number"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs6 sm6 md2 lg2 xl2 >
                        <header >Number of mechanical field</header>
                      </v-flex>
                      <v-flex  xs6 sm6 md10 lg10 xl10 >
                        <v-text-field
                        ref="number_mechanical"
                        v-model="number_mechanical"
                        label="Nd : Number of mechanical field"
                        outline
                        type="number"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs6 sm6 md2 lg2 xl2 >
                        <header >Actual collection area</header>
                      </v-flex>
                      <v-flex  xs6 sm6 md10 lg10 xl10 >
                        <v-text-field
                        ref="actual_collection_area"
                        v-model="actual_collection_area"
                        label="Aa : Actual_collection_area"
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
<!-- <vue-mathjax :formula="formula"></vue-mathjax> -->
      <v-progress-linear
      color="error"
      height="20"
      value="75"
      >
      </v-progress-linear>
<v-flex xs12 sm12 md12 lg12 xl12 pt-3>
  <v-card ref="form" >
    <v-layout row wrap>
      <v-flex xs12 md12 lg12 xl12 sm12>
        <v-card-text>
          <v-container grid-list-xs,sm,md,lg,xl>
            <v-layout row wrap>
              <v-flex xs10 sm10 lg10 xl10 md10yy>
                <h1>Collection area</h1>
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
                >done</v-icon>
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
        >list</v-icon>
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
        <v-layout row wrap >
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
            ref="specific_collection_area"
            v-model="specific_collection_area"
            label="Specific collection area"
            outline
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
            ref="plate_area_per_electric_set"
            v-model="plate_area_per_electric_set"
            label="Plate area per electric set"
            outline
            :rules="[() => !!linear_gas_velocity || 'linear gas velocity is required']"
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6 >
            <v-text-field
            ref="ratio"
            v-model="ratio"
            label="ratio 1.5-3.0"
            outline
            :rules="[() => !!channel_width || 'channel width is required']"
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6 >
            <v-text-field
            ref="esp_height"
            v-model="esp_height"
            label="Height of ESP"
            outline
            :rules="[() => !!plate_height || 'plate height is required']"
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6 >
            <v-text-field
            ref="drift_velocity"
            v-model="drift_velocity"
            label="w : Drift_velocity"
            outline
            :rules="[() => !!drift_velocity || 'Drift_velocity is required']"
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6 >
            <v-text-field
            ref="efficiency_esp"
            v-model="efficiency_esp"
            label="% : Efficiency of ESP"
            outline
            :rules="[() => !!aspect_ratio || 'Efficiency of ESP is required']"
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md12 lg12 xl12 >
            <v-text-field
            ref="number_plates_parallel_esp"
            v-model="number_plates_parallel_esp"
            label="number of plate in parallel across the width of the ESP"
            outline
            :rules="[() => !!number_plates_parallel_esp || 'number of plate in parallel across the width of the ESP is required']"
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md2 lg2 xl2>
            <header >The totle collection area</header>
          </v-flex>
          <v-flex xs6 sm6 md10 lg10 xl10>
            <v-text-field
            ref="total_collection_area"
            v-model="total_collection_area"
            label="The totle collection area"
            outline
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md2 lg2 xl2>
            <header >The totle number of plate in the ESP</header>
          </v-flex>
          <v-flex xs6 sm6 md10 lg10 xl10>
            <v-text-field
            ref="total_number_plate"
            v-model="total_number_plate"
            label="The totle number of plate in the ESP"
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
color="warning"
height="15"
value="60"
>
</v-progress-linear>
<v-flex xs12 sm12 md12 lg12 xl12>
  <v-card  ref="form" >
    <v-layout row wrap >
      <v-flex xs12 md12 lg12 xl12 sm12>
        <v-card-text>
          <v-container grid-list-xs,sm,md,lg,xl>
            <v-layout row wrap>
              <v-flex xs10 sm10 lg10 xl10 md10yy>
                <h1>Divide sections</h1>
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
                >done</v-icon>
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
        >list</v-icon>
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
<v-flex xs12 md12 lg12 xl12 sm12 pt-3>
  <v-card-text>
    <v-form>
      <v-container grid-list-xs,sm,md,lg,xl>
        <v-layout row wrap >
          <v-flex xs12 sm12 md12 lg12 xl12 >
            <v-text-field
            ref="divide_sections"
            v-model="divide_sections"
            label="Divide sections"
            outline
            :rules="[() => !!divide_sections || 'Divide sections is required']"
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md2 lg2 xl2>
            <header >Number of bus section</header>
          </v-flex>
          <v-flex xs6 sm6 md10 lg10 xl10>
            <v-text-field
            ref="bus_section"
            v-model="bus_section"
            label="Number of bus section"
            outline
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md12 lg12 xl12 >
            <v-text-field
            ref="corona_power_ratio"
            v-model="corona_power_ratio"
            label="R : corona_power_ratio"
            outline
            :rules="[() => !!aspect_ratio || 'Corona power ratio, w/1000 is required']"
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md2 lg2 xl2 >
            <header >Charge on the partical</header>
          </v-flex>
          <v-flex  xs6 sm6 md10 lg10 xl10 >
            <v-text-field
            ref="charge_partical"
            v-model="charge_partical"
            label="Charge on the partical"
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
color="success"
height="20"
value="75"
>
</v-progress-linear>
<v-flex xs12 sm12 md12 lg12 xl12 pt-3>
  <v-card ref="form">
    <v-layout row wrap>
      <v-flex xs12 md12 lg12 xl12 sm12>
        <v-card-text>
          <v-container grid-list-xs,sm,md,lg,xl>
            <v-layout row wrap>
              <v-flex xs10 sm10 lg10 xl10 md10yy>
                <h1>Calculate overall area</h1>
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
                >done</v-icon>
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
        >list</v-icon>
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
        <v-layout row wrap >
          <v-flex xs12 sm12 md6 lg6 xl6>
            <v-text-field
            ref="corona_power"
            v-model="corona_power"
            label="Corona power"
            outline
            :rules="[() => !!corona_power || 'corona_power is required']"
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <v-text-field
            ref="k"
            v-model="k"
            label="k = 0.55"
            outline
            :rules="[() => !!k || 'k is required']"
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md2 lg2 xl2>
            <header >Collection Efficiency</header>
          </v-flex>
          <v-flex xs6 sm6 md10 lg10 xl10>
            <v-text-field
            ref="collection_efficiency"
            v-model="collection_efficiency"
            label="Collection Efficiency"
            outline
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md4 lg4 xl4>
            <v-text-field
            ref="spacing_electrical_sections"
            v-model="spacing_electrical_sections"
            label="Ls : Spacing between electrical sections"
            outline
            :rules="[() => !!spacing_electrical_sections || 'Spacing between electrical section is required']"
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md4 lg4 xl4>
            <v-text-field
            ref="entrance_section_length"
            v-model="entrance_section_length"
            label="Len : Entrance section length m"
            outline
            :rules="[() => !!entrance_section_length || 'Collection Efficiency is required']"
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md4 lg4 xl4>
            <v-text-field
            ref="exit_section_length"
            v-model="exit_section_length"
            label="Lex : Exit section length"
            outline
            :rules="[() => !!exit_section_length || 'Exit section length is required']"
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md2 lg2 xl2>
            <header >Calculate oveall area</header>
          </v-flex>
          <v-flex xs6 sm6 md10 lg10 xl10>
            <v-text-field
            ref="calculate_overall_area"
            v-model="calculate_overall_area"
            label="Lo : Calculate overall area"
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
color="pink lighten-1"
height="20"
value="75"
>
</v-progress-linear>
<v-flex xs12 sm12 md12 lg12 xl12>
  <v-card  ref="form" >
    <v-layout row wrap >
      <v-flex xs12 md12 lg12 xl12 sm12>
        <v-card-text>
          <v-container grid-list-xs,sm,md,lg,xl>
            <v-layout row wrap>
              <v-flex xs10 sm10 lg10 xl10 md10yy>
                <h1>Mass removed</h1>
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
                >done</v-icon>
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
        >list</v-icon>
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
        <v-layout row wrap >
          <v-flex xs12 sm12 md6 lg6 xl6 >
            <v-text-field
            ref="particle_concentration"
            v-model="particle_concentration"
            label="Cx : Particle concentration or Loading at x distance"
            outline
            :rules="[() => !!particle_concentration || 'Particle concentration or Loading are required']"
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6 >
            <v-text-field
            ref="particle_concentration_x"
            v-model="particle_concentration_x"
            label="Cx + Δx : Particle concentration or Loading at x + Δx distance"
            outline
            :rules="[() => !!particle_concentration_x || 'Particle concentration or Loading at x + Δx distance is required']"
            type="number"
            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md2 lg2 xl2>
            <header >Mass removed</header>
          </v-flex>
          <v-flex xs6 sm6 md10 lg10 xl10>
            <v-text-field
            ref="mass_removed"
            v-model="mass_removed"
            label="Mass removed"
            outline
            type="number"

            ></v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md6 lg6 xl6>
            <iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=293159d3-bd76-4a04-9b84-fd083b06e5a7" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="500" height="300" allowfullscreen></iframe>
          </v-flex>
          <v-flex xs6 sm6 md6 lg6 xl6>
            <v-card color="#F4FF81">
              <v-container grid-list-xs,sm,md,lg,xl>
                <v-layout row wrap class="dotted">
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>Hight of ESP:</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{esp_height}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>H (Height of plate)</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{plate_height}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>D (Chanel width)</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{channel_width}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>Lp (Plate length)</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{plate_length}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>Ls (Spacing between e sections)</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{specific_collection_area}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>Len (Entrance length)</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{entrance_section_length}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>Lex (Exit length)</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{exit_section_length}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>Lo (Overall length)</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{calculate_overall_area}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>Nd (Number of ducts)</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{duct_number}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>Ns (Number of mechanical fields)</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{number_mechanical}}</p>
                  </v-flex>
                  <v-flex xs8 sm8 md8 lg8 xl8>
                    <header>Number of bus sections</header>
                  </v-flex>
                  <v-flex xs4 sm4 md4 lg4 xl4>
                    <p>{{bus_section}}</p>
                  </v-flex>
                  <v-btn color="primary" @click="save()">save</v-btn>
                </v-layout>
              </v-container>
            </v-card>
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

<script >
// import { VueMathjax } from 'vue-mathjax'
export default {
  // components: {
  //   'vue-mathjax': VueMathjax
  // },
  data () {
    return {
      colors: ['green', 'purple', 'orange', 'indigo', 'red'],
      rating: 4.5,
      // /////////////////////////////////////////////////////
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
      test: 'Please input Actual collection area you require',
      require_area: null,
      flow_rate: null,
      linear_gas_velocity: null,
      channel_width: null,
      plate_height: null,
      duct_number: null,
      a: '',
      //  //////////////////////////////////////////////////////
      aspect_ratio: null,
      plate_length: null,
      number_mechanical: null,
      actual_collection_area: null,
      //  //////////////////////////////////////////////////////
      specific_collection_area: null,
      plate_area_per_electric_set: null,
      ratio: null,
      esp_height: null,
      //  //////////////////////////////////////////////////////
      drift_velocity: null,
      efficiency_esp: null,
      number_plates_parallel_esp: null,
      total_collection_area: null,
      total_number_plate: null,
      //  /////////////////////////////////////////////////////
      divide_sections: null,
      bus_section: null,
      corona_power_ratio: null,
      charge_partical: null,
      //  //////////////////////////////////////////////////////
      corona_power: null,
      k: null,
      collection_efficiency: null,
      spacing_electrical_sections: null,
      entrance_section_length: null,
      exit_section_length: null,
      calculate_overall_area: null,
      //  ///////////////////////////////////////////////////////
      particle_concentration: null,
      particle_concentration_x: null,
      mass_removed: null
      //  ///////////////////////////////////////////////////////
    }
  },
  methods: {
    genColor (i) {
      return this.colors[i]
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
    },
    save () {
      if (confirm('Are you sure you want to save this result?')) {
        var textSource = {
          user_id: this.payload(),
          nd: this.duct_number,
          nm: this.number_mechanical,
          aa: this.actual_collection_area,
          np: this.total_number_plate,
          bs: this.bus_section,
          cp: this.charge_partical,
          ce: this.collection_efficiency,
          ca: this.calculate_overall_area,
          mr: this.mass_removed,
          eh: this.esp_height,
          ph: parseInt(this.plate_height, 10),
          cw: parseInt(this.channel_width, 10),
          sa: this.specific_collection_area,
          es: parseInt(this.entrance_section_length, 10),
          el: parseInt(this.exit_section_length, 10),
          pl: this.plate_length
        }
        this.axios.post(process.env.VUE_APP_PATH + '/esp', textSource).then((response) => {
          if (response.data['status'] === 'successful') {
            alert('save sucessfull')
            this.showresult = true
          } else {
            alert('save unsucessfull')
          }
        })
      }
    },
    testA () {
      const testAA = (this.flow_rate / this.drift_velocity) * Math.log(1 / (1 - this.efficiency_esp))
      // eslint-disable-next-line no-console
      console.log('testAA', testAA)
    }
  },
  computed: {
    duct_number_values () {
      return [this.flow_rate, this.linear_gas_velocity, this.channel_width, this.plate_height].join()
    },
    number_mechanical_field () {
      return [this.aspect_ratio, this.plate_length].join()
    },
    actual_collection_area_values () {
      return [this.plate_height, this.plate_length].join()
    },
    total_collection_area_values () {
      return [this.flow_rate, this.drift_velocity, this.efficiency_esp].join()
    },
    collection_efficiency_values () {
      return [this.corona_power, this.k].join()
    },
    calculate_overall_area_values () {
      return [this.spacing_electrical_sections, this.entrance_section_length, this.exit_section_length].join()
    },
    mass_removed_values () {
      return [this.particle_concentration, this.particle_concentration_x].join()
    }
  },
  watch: {
    duct_number_values () {
      this.duct_number = Math.round(this.flow_rate / (this.linear_gas_velocity * this.channel_width * this.plate_height))
      // eslint-disable-next-line no-console
      // console.log('this.duct_number', this.duct_number)
    },
    number_mechanical_field () {
      this.number_mechanical = Math.round((this.plate_height * this.aspect_ratio) / this.plate_length)
    },
    actual_collection_area_values () {
      this.actual_collection_area = Math.round(2 * this.plate_height * this.plate_length * this.duct_number * this.number_mechanical)
      //  specific_collection_area_values /////
      this.specific_collection_area = this.actual_collection_area / this.flow_rate
      //  plate_area_per_electric_set ////////
      this.plate_area_per_electric_set = this.actual_collection_area / this.number_mechanical
    },
    ratio () {
      this.esp_height = this.ratio * this.plate_height
    },
    total_collection_area_values () {
      this.total_collection_area = (this.flow_rate / this.drift_velocity) * Math.log(1 / (1 - this.efficiency_esp))
      this.total_number_plate = Math.ceil((this.total_collection_area / (2 * this.plate_height * this.plate_length)) + (this.number_mechanical * 1))
    },
    divide_sections () {
      this.bus_section = this.divide_sections * this.number_mechanical
    },
    corona_power_ratio () {
      this.charge_partical = (this.corona_power_ratio / 1000) * this.flow_rate * 0.0353
    },
    collection_efficiency_values () {
      this.collection_efficiency = (1 - Math.exp((-this.k * this.corona_power) / (this.flow_rate * 60 * (Math.pow(0.304, 3)))))
    },
    calculate_overall_area_values () {
      this.calculate_overall_area = (((this.number_mechanical * this.plate_length) + ((this.number_mechanical - 1) * this.spacing_electrical_sections)) + (this.entrance_section_length * 1) + (this.exit_section_length * 1))
    },
    mass_removed_values () {
      this.mass_removed = ((this.linear_gas_velocity * this.plate_height * (this.channel_width / 2) * this.particle_concentration) - (this.linear_gas_velocity * this.plate_height * (this.channel_width / 2) * this.particle_concentration_x))
    }
  }
}
</script>

<style lang="css">
.v-text {
  position: relative;
}
.dis {
  padding-top: 20px;
  padding-bottom: 18px;
  padding-left: 12px;
  padding-right: 12px;
  background-image: linear-gradient(#EF5350, #C62828);
  border-radius: 4px;
}
.dotted {
  border-style: dotted;
  color: blue;
  padding: 2%;
}
</style>
