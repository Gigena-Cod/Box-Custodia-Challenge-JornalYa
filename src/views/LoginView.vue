<template>
    <div id="login" class="flex items-center  w-full h-custom bg-custom ">       
        
        <div class="mx-auto w-full max-w-7xl container">            
             <div class="flex mx-auto md:mx-0 flex-col pt-10 w-form bg-white border rounded-xl shadow-xl formulario">
                <!-- LOGO   -->
                <div class="h-16  px-10 mx-auto logo">
                    <img src="https://sbox-dev.boxcustodia.com/api/logo?tenant=afsdfaadfa" alt="Jornal Ya" class="h-full">
                </div>

                <!-- TEXT  -->
                <div class="text mt-3 mb-5  px-10  text-gray-400">
                    ¡Hola! Ingresa los datos de tu cuenta para continuar
                </div>
                <!-- FORM  -->
                <form @submit.prevent="login" method="post" class=" px-10 ">
                    <div class="flex flex-col text-gray-400 username__container">
                        <label for="username" class="mb-2 text-left">Usuario</label>
                        <input v-model="user.userName" class="border rounded h-9 px-2 " type="text" id="username" placeholder="Ingresá tu usuario" name="username">
                    </div>
                    <div class="flex flex-col mt-2 text-gray-400 password__container">
                        <input v-model="user.password" class="border rounded h-9 px-2 " type="password" id="password" placeholder="Ingresá tu contraseña" name="password">
                    </div>
                    <input type="submit" class="w-full cursor-pointer flex items-center justify-center rounded hover:shadow mt-8 hover:bg-gray-300 h-12 bg-gray-200 text-gray-500 font-semibold" value="INGRESAR">
                </form>
                <!-- PASSWORD  -->
                <a href="#" class="my-4 text-blue-500 hover:text-blue-600  px-10  forgot">
                    Olvide mi contraseña
                </a>   
                <div class="flex border-t text-gray-600 information_help">

                    <a href="#" class="flex h-16 border-r w-1/2 items-center justify-center cursor-pointer information">
                        Información comercial 
                    </a>

                    <a href="#" class="flex h-16  w-1/2 items-center justify-center cursor-pointer help">
                        ¿Necesitás ayuda?
                    </a>

                </div>             
            </div>
            
        </div>
       
    </div>
  
</template>

<script>
import Request from '@/request/request'
import { mapMutations } from 'vuex'

export default {
    name:'LoginView',
    data(){
        return{
            user:{
                userName:'',
                password:''
            }
        }
    },
     mounted(){
        this.validarSesionLogin()
    },
    methods:{
        ...mapMutations([
            'toogleShow',
        ]),
        async login(){
            let JWT= await  Request.POST__login(this.user)
            await console.log(JWT)
            if(JWT){
                localStorage.setItem("token", JWT);
                this.$router.replace({ name: 'documents' }) 
                this.toogleShow()
                
            }
            
        },
        async validarSesionLogin(){
            const token = await localStorage.getItem("token");
            if(token){
                this.$router.replace({name:'documents'})
            }
        }
    }
}
</script>

<style>
.bg-custom{
    background-image: url("https://sbox-dev.boxcustodia.com/api/background?tenant=lkjhl");
    background-position: center;
    background-size: cover;
}

.w-form {
    width: 100%;
    max-width: 28.25rem;
}

.h-custom{
    height: 100vh;
max-height: 41rem;
}

</style>