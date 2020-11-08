import react from 'react';
import axios from 'axios';

export class MoviesService{
    baseUrl = "http://localhost:3306/cinedb"

    /* Here we get all the movies consuming the api */
    getAll(){
        return axios.get(this.baseUrl + "all").then(res => res.data.data)
    }
}