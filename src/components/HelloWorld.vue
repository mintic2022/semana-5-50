<template>
  <div id="app">
    <v-app id="inspire">
      <br />
      <v-carousel cycle :interval="interval" height="450">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
      <br />

      <div>
        <h1 class="text-center display-3 font-weight-bold">Nosotros</h1>
        <br />

        <p class="text-md-justify headline font-weight-regular">
          En busca de nuestro deseo de convertirnos en una comunidad donde de la
          mano de todos generemos empleos y cubramos necesidades en servicios
          especificos nos permite ofrecer una gran variedad laboral a todo
          personal capacitado; y tendra su oportunidad de emplearce como un
          experto en su area y sera el mismo quien se haga a una calificacion y
          reputacion con nuestros usuarios ya que seran ellos quienes califiquen
          su desempeño y calidad. luego de cada labor realizada el usuario hara
          una calificacion de 1 a 5 donde 1 es su peor valoracion y 5 sera una
          valoracion perfecta segun sea su satisfaccion con el personal asignado
          para suplir su necesidad.
        </p>
      </div>
      <br />

      
      <!-- inicio seccion de servicios  -->
      <div>
        <h1 class="text-center display-3 font-weight-bold">
          DALE UN VISTAZO A NUESTROS SERVICIOS!!
        </h1>
        <br />
        <v-row class="fill-height overflow-auto" id="container">
          <v-col
            v-for="item in articulos"
            :key="item.id"
            :cols="12 / itemsPerRow"
            class="py-2"
          >
            <v-card>
              <v-img :src="item.imagen" aspect-ratio="2.75"></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ item.nombre }}</h3>
                  <div>Descripcion: {{ item.descripcion }}</div>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- fin seccion de servicios -->
    </v-app>
    <br />
    <br />
    <br />
    <br />
    <!-- inicio casos de exito  -->
    <div class="blue darken-2">
      <h1>
        <h1 class="text-center md-3 display-3 font-weight-bold">
          CASOS DE EXITO
        </h1>
      </h1>

      <v-row class="mb-1" no-gutters>
        <v-col md="4" class="pt-2 pl-2 pr-1 pb-4">
          <!-- caso 1 -->
          <v-card class="mx-auto" max-width="500" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">NOMBRE EJEMPLO</div>
                <v-list-item-title class="headline mb-1">
                  profesion
                </v-list-item-title>
                <v-list-item-subtitle>LOREM</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="CASO-1"
                />
              </v-list-item-avatar>
            </v-list-item>
            <span> telefono:</span>
            <span> 300XXXXXXX</span>

            <!-- caso 2 -->
          </v-card>
        </v-col>
        <v-col md="4" class="pt-2 pl-1 pr-1 pb-4">
          <v-card class="mx-auto" max-width="500" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">NOMBRE EJEMPLO</div>
                <v-list-item-title class="headline mb-1">
                  profesion
                </v-list-item-title>
                <v-list-item-subtitle>LOREM</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="CASO-1"
                />
              </v-list-item-avatar>
            </v-list-item>
            <span> telefono:</span>
            <span> 300XXXXXXX</span>
          </v-card>
        </v-col>
        <v-col md="4" class="pt-2 pl-1 pr-2 pb-4">
          <v-card class="mx-auto" max-width="500" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">NOMBRE EJEMPLO</div>
                <v-list-item-title class="headline mb-1">
                  profesion
                </v-list-item-title>
                <v-list-item-subtitle>LOREM</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="CASO-1"
                />
              </v-list-item-avatar>
            </v-list-item>
            <span> telefono:</span>
            <span> 300XXXXXXX</span>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- fin casos de exito -->
    <!-- inicio footer -->
    <br /><br />

    <v-footer padless fluid class="blue-grey darken-1mt-5">
      <v-row class="align-sm">
        <v-col>
          
          <v-card>
            <h3 class="blue darken-2"> NUESTRAS SEDES</h3>
            <v-tabs v-model="tab" fixed-tabs background-color="blue darken-2">
              <v-tab v-for="item in ciudades" :key="item.titulo" >
                {{ item.titulo }}
              </v-tab>
            </v-tabs>

            <v-tabs-items  v-model="tab">
              <v-tab-item
               
                v-for="item in ciudades"
                :key="item.titulo"
              >
                <v-card class="blue" flat>
                  <v-card-text> Dirección :{{ item.informacion.direccion }}</v-card-text>
                  <v-card-text>
                    Barrio :{{ item.informacion.barrio }}</v-card-text
                  >
                  <v-card-text>
                    telefono :{{ item.informacion.telefono }}</v-card-text
                  >
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
          <!-- fin de ciudades -->
        </v-col>
        <v-col>
           
          <v-card flat tile class="blue darken-2 white--text text-justify">
           
            <v-card-text>
              
              <p class="text-right">
                <span  class="white--text "> siguenos en nuestras redes</span>
              <v-btn
                v-for="(icon, index) in icons"
                :key="index"
                :href="icon.link"
                class="white--text text-right"
                icon
              >
                <v-icon size="24px">
                  {{ icon.logo }}
                </v-icon>
              </v-btn>
              </p>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
              amet. Mauris cursus commodo interdum. Praesent ut risus eget metus
              luctus accumsan id ultrices nunc. Sed at orci sed massa
              consectetur dignissim a sit amet dui. Duis commodo vitae velit et
              faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue
              vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu
              ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-card-text class="white--text text-center">
        <strong>2020-MinTic-grupo-50</strong>
      </v-card-text>
    </v-footer>
    <!-- fin del footer -->
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "HelloWorld",

  data() {
    return {
      text: "hola",
      articulos: [],
      categorias: [],
      interval: 2000,
      tab: null,
      icons: [
        {
          logo: "mdi-facebook",
          link: "https://web.facebook.com/?_rdc=1&_rdr",
        },
        {
          logo: "mdi-twitter",
          link: "https://twitter.com/",
        },
        {
          logo: "mdi-linkedin",
          link: "https://www.linkedin.com/",
        },
        {
          logo: "mdi-instagram",
          link: "https://www.instagram.com/",
        },
        {
          logo: "mdi-github",
          link: "https://github.com/mintic2022",
        },
      ],
      ciudades: [
        {
          titulo: "Bogota",
          informacion: {
            direccion: "CALLE 2#-##-##",
            barrio: "XXXXX",
            telefono: "333131331331313",
          },
        },
        {
          titulo: "Cali",
          informacion: {
            direccion: "CALLE 2#-##-##",
            barrio: "XXXXX",
            telefono: "333131331331313",
          },
        },
        {
          titulo: "Cucuta",
          informacion: {
            direccion: "CALLE 2#-##-##",
            barrio: "XXXXX",
            telefono: "333131331331313",
          },
        },

        {
          titulo: "Medellin",
          informacion: {
            direccion: "CALLE 2#-##-##",
            barrio: "XXXXX",
            telefono: "333131331331313",
          },
        },
        

      ],
      items: [
        {
          src: require("../assets/images/campaña.jpg"),
          txt: "prueba",
        },

        {
          src: require("../assets/images/reunion.jpg"),
          txt: "lorem",
        },
        {
          src: require("../assets/images/trabajo.jpg"),
          txt: "lorem",
        },
      ],
    };
  },
  created() {
    this.list();
    this.listCategorias();
    window.addEventListener("resize", () => {
      this.calcRowsPerPage();
    });
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.beers.length / this.ipp);
    },
    rowsPerPage() {
      return this.rpp;
    },
    itemsPerRow() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1;
        case "sm":
          return 2;
        case "md":
          return 3;
        case "lg":
          return 4;
        case "xl":
          return 6;
      }
    },
    ipp() {
      return Math.ceil(this.rowsPerPage * this.itemsPerRow);
    },
  },
  methods: {
    list() {
      axios
        .get("http://localHost:3000/api/articulo/list")
        .then((response) => {
          this.articulos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    listCategorias() {
      axios
        .get("http://localHost:3000/api/categoria/list")
        .then((response) => {
          this.categorias = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    calcRowsPerPage() {
      let container = document.getElementById("container");
      let minItemHeight = 170;
      if (container) {
        let containerHeight = parseInt(container.clientHeight, 0);
        this.rpp = Math.floor(containerHeight / minItemHeight);
      } else {
        this.rpp = 4;
      }
    },
  },
};
</script>
