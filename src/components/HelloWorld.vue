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
        <h1 class="text-center display-1 font-weight-bold">Nosotros</h1>
        <br />

        <p class="text-md-justify headline font-weight-regular pa-4">
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
        <h1 class="text-center display-1 font-weight-bold">
          DALE UN VISTAZO A NUESTROS SERVICIOS!!
        </h1>
        <br />
        <v-row class="fill-height overflow-auto  pa-4" id="container">
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
        <h1 class="text-center md-3 display-1 font-weight-bold">
          CASOS DE EXITO
        </h1>
      </h1>
<br>
      <v-row class="mb-12" no-gutters>
        <v-col md="4" class="pt-2 pl-2 pr-1 pb-4">
          <!-- caso 1 -->
          <v-card class="mx-auto" max-width="500" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Santiago Hernandez</div>
                <v-list-item-title class="headline mb-1">
                  Arquitecto
                </v-list-item-title>
                <v-list-item-subtitle>Muy buen servicio, todo su personal tienen excelente calidad humana. Los tiempos de entreha acordes a los ofrecidos y una calidad laboral inpecanle </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="160" color="grey">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="CASO-1"
                />
              </v-list-item-avatar>
            </v-list-item>
                        <p class= "ml-4">Telefono :300XXXXXXX </p>
            <!-- caso 2 -->
          </v-card>
        </v-col>
        <v-col md="4" class="pt-2 pl-1 pr-1 pb-4">
          <v-card class="mx-auto" max-width="500" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Juan Carlos Mendoza</div>
                <v-list-item-title class="headline mb-1">
                  Abogado
                </v-list-item-title>
                <v-list-item-subtitle>
Excelente servicio todo el trabajo quedo hermoso y yo como cliente quede super contento como me  dejaron el acabado de mi apartamento</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="160" color="grey">
                <img
                  src="https://imgcdn.larepublica.co/i/1200/2017/10/06191633/abogado.jpg "
                  alt="CASO-1"
                />
              </v-list-item-avatar>
            </v-list-item >
            <p class= "ml-4">Telefono :300XXXXXXX </p>
            
          </v-card>
        </v-col>
        <v-col md="4" class="pt-2 pl-1 pr-2 pb-4">
          <v-card class="mx-auto" max-width="500" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Freddy Vega</div>
                <v-list-item-title class="headline mb-1">
                  Ingeniero
                </v-list-item-title>
                <v-list-item-subtitle>Las soluciones de ingeniería fueron las mejores para mi compañía.</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="160" >
                <img
                  src="https://campolaboral.net/wp-content/uploads/2020/04/ingeniero-industrial.jpg"
                  alt="CASO-1"
                />
              </v-list-item-avatar>
            </v-list-item>
                        <p class= "ml-4">Telefono :300XXXXXXX </p>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- fin casos de exito -->
    <!-- inicio footer -->
    <br /><br />

    <v-footer padless fluid class="blue-grey darken-1 pa-4">
      <v-row class="align-sm">
        <v-col>
          
          <v-card>
            <h3 class="blue darken-2 white--text"> NUESTRAS SEDES</h3>
            <v-tabs v-model="tab" fixed-tabs background-color="blue darken-2" color="white">
              <v-tab  class="white--text" v-for="item in ciudades" :key="item.titulo" >
                {{ item.titulo }}
              </v-tab>
            </v-tabs>

            <v-tabs-items   class="white" v-model="tab">
              <v-tab-item 
                
                v-for="item in ciudades"
                :key="item.titulo"
              >
                <v-card class="blue " flat>
                  <v-card-text  class="white--text"> Dirección :{{ item.informacion.direccion }}</v-card-text>
                  <v-card-text  class="white--text">
                    Barrio :{{ item.informacion.barrio }}</v-card-text
                  >
                  <v-card-text  class="white--text"> 
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
                <span  class="white--text "> SIGUENOS EN NUESTRAS REDES</span>
              <v-btn
                v-for="(icon, index) in icons"
                :key="index"
                :href="icon.link"
                class="white--text text-right"
                icon
              >
                <v-icon size="30 px">
                  {{ icon.logo }}
                </v-icon>
              </v-btn>
              </p>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              <br>
              <p>Si se encuentra satisfecho por nuestros servicios prestados por favor recomiendanos </p>
              
              <p> Si deseas dejar alguna queja o sugerencia por favor enviarla al siguiente  correo: Correo1234@prueba.com</p>
              
              <p> Si quiere mantenerse al dia con nuestros servicios, suscribase  <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjd8qe-2uTtAhVic98KHdM5CGQQPAgI">aqui</a></p>

            </v-card-text>
          </v-card>
     </v-col>
      </v-row>

      <v-card-text class="white--text text-center">
        <strong>2020- Power by: MinTic-grupo-50</strong>
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
