<template>
  <div id="document" class="w-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 h-screen w-screen hidden absolute">
        <!-- LOADING DOCUMENT  -->
         <div v-if="this.loading" class="m-auto loading">
            <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-primary-custom transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
            </button>
        </div>
        <div v-else class="max-w-8xl bg-white mx-auto pt-4  h-4/5 m-auto container">
            
            <div class="w-full flex flex-wrap justify-between items-center px-4   section">
                <div class="pl-4 owner text-xl">
                    Recibo de sueldo de: {{information.owner}}
                </div>

                <button @click="toggleDocument()" class="mr-4 px-4 flex text-white items-center bg-primary-custom h-10 rounded">
                    CERRAR
                </button>
                <hr class="my-4 w-full h-2 rounded bg-primary-custom">
            </div>
            
            <iframe id="iframe-pdf"  class="w-full  h-iframe " :src="PDFUrl">                
            </iframe>
       
      
        </div> 
  </div>
</template>

<script>
import Request from '@/request/request';

export default {
    name:'DocumentsListView' ,
    props:['information'], 
    data(){
        return{
            loading:true,
            document:[],
            PDFUrl:''
        }
    },
    methods:{  

        toggleDocument(){
            const documento = document.getElementById('document')
            documento.classList.toggle('hidden')
            documento.classList.toggle('flex')
        },

        async loadDocument(){
            const token = await localStorage.getItem("token");
            console.log(this.information.owner)
            this.document = await Request.GET__documentById(this.information.id,token)
            const file = new Blob(  [this.document],  {type: 'application/pdf'});            
            const fileURL = URL.createObjectURL(file);
            
            if(fileURL){
                this.PDFUrl=fileURL;                
                if(this.document){
                    this.loading=false;
                }
            }
        }
    } ,
    async mounted(){
        
    },
    watch: { 
        information: function(newVal) {
            if(newVal!=''){ // watch it
            this.loadDocument()
            }
        }
    }
}
</script>

<style>
.h-iframe{
    height: calc(100% - 5rem);
}

</style>