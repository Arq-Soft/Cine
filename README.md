# Cinema Paradiso

Cinema Paradiso is a web project of a cinema system developed with React for the Front-End part and SpringBoot for the Back-End part in which users can register and log in to reserve or buy tickets for the different films.

## Starting 🚀

These instructions will allow you to obtain a copy of the running project on your local machine for development and testing purposes.

### Pre-requisites 📋

To be able to run the project correctly you will need to have NodeJS, Java 11, Maven and MySQL Workbench installed.

* The first thing will be to create a database in MYSQL named cinedb.
* Then go to the path \Cine\src\main\resources\application.properties and once there change spring.datasource.url = jdbc:mysql://localhost: "put the port where you have the mqysl database"/cinedb?serverTimezone=UTC 
* Make this same change in the path \Cine\targetes\application.properties
* If you have not configured the JAVA 11, you must go to the environment variables and add a new variable called JAVA_HOME and put the path in which it is installed, if the variable exists you must modify the path that has assigned 

### Installation 🔧

At the time of opening the project will be necessary to open two terminals in the directory of the same, in the first finish will be necessary to execute:

### `mvn spring-boot:run`

And in the other terminal must run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Built with 🛠️

* [React](https://es.reactjs.org/docs/getting-started.html) - The web framework used
* [SpringBoot](https://spring.io/projects/spring-boot) - BackEnd
* [Selenium](https://www.selenium.dev/documentation/en) - Used for testing
* [MySQL](https://dev.mysql.com/doc/) - Database manager

## Autores ✒️

* **Karen Grisales** - *Architect*
* **Anderson Villa** - *Architect*
* **Sebastian Ochoa** - *Tester*
* **Laura Monsalve** - *BackEnd and Integration*
* **Andrea Calderón** - *FrontEnd and Integration*  

