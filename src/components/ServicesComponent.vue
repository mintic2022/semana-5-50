<template >
  <v-container fluid>
    <h1 class="text-center display-1 font-weight-bold">
      DETALLES DE NUESTROS SERVICIOS
    </h1>

    <v-col justify="space-around" v-for="item in articulos" :key="item.id">
      <v-card v-show="item.estado == 1">
        <v-row no-gutters>
          <v-col md="7"
          class="mr-3">
            <v-img height="150px" :src="item.imagen">
              <v-card-title class="white--text mt-2">
                <v-avatar color="success" size="50">
                  <span class="white--text headline">{{ item.id }}</span>
                </v-avatar>
                <p class="ml-5">
                  {{ item.nombre }}
                </p>
              </v-card-title>
            </v-img>
          </v-col>
          <v-col md="4"
           class="mt-3">
            <v-card-text>
              <div class="font-weight-bold ml-8 mb-2">
                <p>Categoria :{{ item.categoria.nombre }}</p>
                <p>Descripcion : {{ item.descripcion }}</p>
                <!-- <p v-if="item.estado == 1">Servicio activo</p> -->

                <!-- <p v-else>Servicio Inactivo</p> -->
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "hola",
      categorias: [],
      articulos: [],
    };
  },
  methods: {
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
  created() {
    // re-calc on screen resize
    this.list();
    this.listCategorias();
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
  },
};
</script>