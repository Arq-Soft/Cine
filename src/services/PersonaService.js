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

  Login(id, password) {
    var intID = parseInt(id);
    console.log({id, password});
    return axios.get(`${this.baseUrl}AutenticateUser/${intID}/${password}`)
    .then((res) => res.data);
    /*return axios.get(`${this.baseUrl}AutenticateUser/`, {params: {id: intID, password: password}})*/
    /*return new Promise((resolve, reject) => {
      resolve({
        data: {
          id: "12354",
          name: "Andrea",
        },
      });
    }).then((res) => res.data);*/
  }
}
