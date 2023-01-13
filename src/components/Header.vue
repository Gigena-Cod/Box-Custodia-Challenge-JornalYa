<template>
  <header id="header" class=" w-full py-4 border-b  header__container">
    
    <div class="max-w-7xl flex  gap-y-4 md:flex-row  text-gray-600 h-10 md:h-14 justify-between items-center mx-auto container">    
        <div class="h-full logo">
            <img src="https://sbox-dev.boxcustodia.com/api/logo?tenant=afsdfaadfa" alt="" class="h-full">
        </div>    
        <div  @click="logout()" class=" h-10 bg-gray-100 border rounded-md flex px-4 jutify-center items-center hover:bg-gray-200 cursor-pointer logout">
            Cerrar sesión
        </div>    
    </div>
  </header>

</template>

<script>
import {  mapMutations } from 'vuex';
export default {
    name:'HeaderComponent',
    data(){
        return{
            show:true
        }
    },
    mounted(){
        this.validarSesionLogin()
    },
    methods:{
        ...mapMutations([
            'toogleShow',
        ]),

        async logout(){
            localStorage.removeItem('token');
            this.toogleShow()
            this.$router.replace({name:'login'})
            
        } ,
        async validarSesionLogin(){
            
            const token = await localStorage.getItem("token");
            if(!token){
                this.$router.replace({name:'login'})
            }
        }  
    }
    
}
</script>

<style>

</style>