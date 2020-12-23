<template>

 <v-app >
    <v-banner 
    contain
  fluid
  max-height="200"
     single-line
        :sticky=true
    color="info"
    
    >
  
      <v-img
       contain

       width="200"
        src="https://colombiatic.mintic.gov.co/679/channels-581_logo_footer_mintic.png"    
      
      >

      </v-img>

      
  
      <template v-slot:actions>
           <v-btn
          :elevation="21"
          text
          x-large
          
          color="#FFFFFF"
          :to="{name:'Home'}"
          
        >
         INICIO
        </v-btn>   <v-btn
          text
          x-large
          color="#FFFFFF"
           :to="{name:'Services'}"
        >
        Servicios
        </v-btn>
         <v-btn
          x-large
          text
         
        
          color="#FFFFFF"
             :to="{name:'About'}"
        >
         Nosotros
        </v-btn>
         <!-- <v-btn
        x-large
        rounded
          color="#FFFFFF"
             :to="{name:'Login'}"
          
        
        >
          Login
        </v-btn> -->
      </template>
  </v-banner>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
    
    

</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
   
  }),
};
</script>
