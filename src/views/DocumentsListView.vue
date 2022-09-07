<template>
  <div id="documents" class="w-full bg-violet-100 py-10 ">
        <!-- LOADING DOCUMENTS  -->
        <div v-if="loading" class="loading">
            <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-primary-custom transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
            </button>
        </div>
        <div v-else class="max-w-7xl mx-auto container">
            
            <div class="w-full flex flex-col md:justify-between  md:flex-row omnisearch">
                <div class="w-full md:w-auto text">
                    <span class="text-2xl text-gray-400 ">Mi Panel / </span>
                    <span class="text-2xl "> Firmar documentos </span>
                </div>
                <div class="w-full md:w-auto md:flex search">
                    <input id="search"  v-model="searchName" @keyup.enter="search" type="text" class="px-2 rounded-md border md:max-w-sm lg:max-w-xl">
                    <label @click="search()"  for="search" class="hidden md:flex h-10 bg-primary-custom ml-4 px-4 rounded-sm justify-center text-white items-center cursor-pointer">Buscar</label>
                </div>
            </div>

            <hr class="w-full h-2 my-4 rounded bg-primary-custom">

            <div v-if="this.documents.length>0" id="documentsList" class="overflow-y-auto overflow-x-auto w-7xl h-96">
                <table class="w-full snap-y relative ">
                    <tr class="bg-primary-custom text-white h-12 items-center flex w-full top-0 left-0 right-0 sticky">
                        <th class="w-custom-2">Colaborador</th>
                        <th class="w-custom-2">Cuil</th>
                        <th class="w-custom-2">Nombre Documento</th>
                        <th class="w-custom">Periodo</th>
                        <th class="w-custom">Fecha Creacion</th>
                        <th class="w-custom">Fecha Asignacion</th>
                        <th class="w-custom">Acciones</th>
                    </tr>                   
                    <tr v-for="(document,index) in documents" :key="document.id" :class="[ (index%2==0) ? 'bg-gray-200 text-gray-900' : 'bg-white']" class="snap-start flex h-12 items-center w-full document">
                        <td class="w-custom-2">{{document.attributes.ownerFullName}}</td>
                        <td class="w-custom-2">{{document.attributes.ownerCuil}}</td>
                        <td class="w-custom-2">{{document.attributes.name}}</td>
                        <td class="w-custom">{{document.attributes.period}}</td>
                        <td class="w-custom">{{document.attributes.creationDate| moment }}
                        </td>
                        <td class="w-custom">{{document.attributes.assignmentDate| moment }}</td>
                        <td @click="toggleDocument(document.id,document.attributes.ownerFullName)" class="w-custom flex justify-end pr-10 cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4179 10.7016C12.5537 10.8295 12.6895 10.9493 12.8173 11.0852C13.1928 11.4449 13.5604 11.8205 13.9199 12.1881C13.9434 12.2144 13.9742 12.2331 14.0084 12.2416C14.0426 12.2502 14.0786 12.2482 14.1116 12.2361C14.2905 12.1748 14.483 12.1656 14.6668 12.2094C14.8507 12.2533 15.0183 12.3484 15.1503 12.4838C16.6603 13.9943 18.1783 15.5048 19.6884 17.0233C19.7869 17.1187 19.8653 17.233 19.9189 17.3593C19.9724 17.4856 20 17.6214 20 17.7586C20 17.8958 19.9724 18.0316 19.9189 18.1579C19.8653 18.2842 19.7869 18.3985 19.6884 18.4939C19.2969 18.8935 18.8894 19.2931 18.4979 19.6847C18.4031 19.7843 18.2891 19.8637 18.1628 19.9179C18.0364 19.9721 17.9004 20 17.7629 20C17.6254 20 17.4893 19.9721 17.363 19.9179C17.2366 19.8637 17.1226 19.7843 17.0278 19.6847L12.4977 15.1452C12.3641 15.0171 12.2686 14.8543 12.2221 14.6751C12.1755 14.4959 12.1797 14.3072 12.2341 14.1302C12.2545 14.0789 12.2545 14.0217 12.2341 13.9704C11.7307 13.4589 11.2194 12.9554 10.7081 12.4439C9.8573 13.0271 8.88517 13.4092 7.8651 13.5615C6.84503 13.7138 5.80371 13.6323 4.81977 13.323C3.28988 12.8762 1.97494 11.8876 1.1206 10.5418C0.244085 9.21025 -0.136972 7.61304 0.0439768 6.02909C0.224926 4.44514 0.95638 2.97511 2.11059 1.87574C3.26481 0.776367 4.76842 0.117527 6.35883 0.0142836C7.94924 -0.0889599 9.52537 0.369955 10.8119 1.31088C11.5299 1.8207 12.1391 2.46841 12.6041 3.21624C13.0691 3.96407 13.3806 4.79705 13.5204 5.66657C13.831 7.42469 13.4348 9.23437 12.4179 10.7016ZM6.82515 11.0373C7.65915 11.0373 8.47443 10.79 9.16799 10.3266C9.86154 9.86332 10.4022 9.20474 10.7218 8.43413C11.0413 7.66353 11.1253 6.81547 10.9632 5.99712C10.801 5.17877 10.4001 4.42686 9.81089 3.83639C9.22172 3.24592 8.47081 2.84339 7.65303 2.67967C6.83524 2.51594 5.9873 2.59837 5.21633 2.91653C4.44536 3.2347 3.78598 3.77432 3.32148 4.46721C2.85699 5.16011 2.60824 5.97518 2.60666 6.80944C2.60455 7.36456 2.71217 7.91463 2.92332 8.428C3.13448 8.94137 3.445 9.40793 3.83704 9.80083C4.22908 10.1937 4.6949 10.5052 5.20771 10.7174C5.72052 10.9296 6.2702 11.0383 6.82515 11.0373Z" fill="#444"/>
                            </svg>
                        </td>
                    </tr>
                </table>
            </div>
            <div v-else>
                No existen documentos filtrados por "{{searchConst}}"
            </div>
        </div>

        <DocumentView :information="selected" />
  </div>
</template>

<script>
import moment from 'moment'
import Request from '@/request/request'

import DocumentView from '@/views/DocumentView.vue';

export default {
    name:'DocumentsListView',
    data(){
        return{
            loading:true,
            documents:[],        
            selected:'',
            searchName:'',
            searchConst:''
        }
    },
    components: {
        DocumentView
    },
    async mounted() { 
        this.validarSesionLogin() 

        const token = await localStorage.getItem("token");
        this.documents =   await Request.GET__documents(token);
        this.loading=false;
    },
    methods:{
        async validarSesionLogin(){
            const token = await localStorage.getItem("token");
            if(!token){
                this.$router.replace({name:'login'})
            }
        },
        toggleDocument(id,name){
            this.selected={
                "id":id,
                "owner":name
            }
            
            const documento = document.getElementById("document");
            documento.classList.toggle("hidden"); 
            documento.classList.toggle("flex");
        },
        async search(){
            const token = await localStorage.getItem("token");
            this.searchConst=this.searchName
            this.documents =  await Request.GET__documentsByName(this.searchName,token);
        }
    },
    filters: {
        moment: function (date) {
            return moment(date).format('DD/MM/YYYY');
        }
    }
}
</script>

<style>

.w-custom{
    width: calc( (1280px - 17px - (227.33px * 3) ) / 4);
}

.w-custom-2{
    width: 227.33px;
}

</style>