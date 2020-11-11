import axios from "axios";

export class PersonaService {
  baseUrl = "http://localhost:9191/";

  /* Here we get all the people consuming the api */
  getAll() {
    return axios.get(this.baseUrl + "Users").then((res) => {
      console.log(res.data);
    });
  }

  save(persona) {
    return axios
      .post(this.baseUrl + "addUser", persona)
      .then((res) => res.data);
  }

  Login(id,password) {
    return axios.get(this.baseUrl + "AutenticateUser/{id,password}", {params: {id,password}})
      .then((res) => res.data);
  }
}
