import axios from 'axios';

export class PersonaService{
    baseUrl = "http://localhost:3306/cinedb"

    /* Here we get all the people consuming the api */
    getAll(){
        return axios.get(this.baseUrl + "Users").then(res => res.data)
    }
}