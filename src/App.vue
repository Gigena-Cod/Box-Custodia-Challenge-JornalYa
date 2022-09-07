<template>
  <div id="app">  
    <HeaderComponent/>  
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue'

export default {
  components: {
    FooterComponent,
    HeaderComponent
  } 
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



.container{
    padding-right: 1rem;
    padding-left: 1rem;
}

@media screen and (min-width:82rem){
    
    .container{
        padding-right: unset;
        padding-left: unset;
    }

}

.bg-primary-custom{
    background-color: #3F4A99;
}

</style>
