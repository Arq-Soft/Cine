import axios from 'axios';

export class MoviesService{
    baseUrl = "http://localhost:9191/";

    /* Here we get all the movies consuming the api 
    getAll(){
        return axios.get(this.baseUrl + "all").then(res => res.data.data)
    }*/

    getAll() {
        return axios.get(this.baseUrl + "Movies").then((res) => {
          console.log(res.data);
        });
      }
}