<template>
  <div id="app">  
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from '@/components/Footer.vue'

export default {
  components: {
    FooterComponent
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
