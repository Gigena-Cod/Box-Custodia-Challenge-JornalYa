let URL_API="https://sbox-dev.boxcustodia.com/api-test"
import axios from 'axios';


export default {

    async POST__login(user){      

        try {
            const response = await await axios.post( `${URL_API}/login`,  user );
            return response.data.body.token;
        } catch (err) {
           return null;
        }       
        
    },
    async GET__documents(token){      
        const config = {'token': token}

        if(!config) return null

        try {
            const response = await axios.get( `${URL_API}/documents`, { headers:  config } );
            return response.data.body.documents;
        } catch (err) {

           return null;
        }       
        
    },
    async GET__documentsByName(name,token){      
        const config = {'token': token}

        if(!config) return null

        try {
            
            const response = await axios.get( `${URL_API}/documents?name=${name}`, { headers:  config } );
            return response.data.body.documents;
        } catch (err) {

           return null;
        }       
        
    },
    async GET__documentById(id,token){      
        const config = {'token': token}

        if(!config) return null

        try {
            const response = await axios.get( `${URL_API}/document/${id}`, { headers:  config , 'responseType':'blob'} );
            return response.data;
        } catch (err) {

           return null;
        }       
        
    }
}