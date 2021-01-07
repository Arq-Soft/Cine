import React, { Component } from "react";
import { Media } from "reactstrap";
import {MoviesService} from '../services/MoviesService';
import { withRouter } from 'react-router-dom';

class MoviesCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: [
        { 
          Id: 0,
          Name:'Big Hero',
          DirectedBy:'Chris Williams',
          RunninTime: 108,
          Classification: 'PG',
          Country: 'United States',
          Genre:'Animation',
          Language: 'English',
          RoomCode:'1',
          Synopsis :'Brilliant robotics prodigy Hiro Hamada finds himself in the grips of a criminal plot that threatens to destroy the fast-paced, high-tech city of San Fransokyo. With the help of his closest companion, a robot named Baymax, Hiro joins forces with a reluctant team of first-time crime fighters on a mission to save their city',
          Image: 'assets/images/BigHero.jpg'  
        },
        {
          Id: 1,
          Name:'Cars',
          DirectedBy:'John Lasseter',
          RunninTime: 116,
          Classification: 'PG',
          Country: 'United States',
          Genre:'Animation',
          Language: 'English',
          RoomCode:'1',
          Synopsis :'While traveling to California for the dispute of the final race of the Piston Cup against The King and Chick Hicks, the famous Lightning McQueen accidentally damages the road of the small town Radiator Springs and is sentenced to repair it. Lightning McQueen has to work hard and finds friendship and love in the simple locals, changing its values during his stay in the small town and becoming a true winner.',
          Image: 'assets/images/Cars.jpg' 
        },
        {
          Id: 2,
          Name:'How to train your dragon',
          DirectedBy:'Dean DeBlois',
          RunninTime: 98,
          Classification: 'PG',
          Country: 'United States',
          Genre:'Animation',
          Language: 'English',
          RoomCode:'2',
          Synopsis :'Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his towns fight against the dragons that continually raid their town. However, his macho father and village leader, Stoik the Vast, will not allow his small, clumsy, but inventive son to do so. Regardless, Hiccup ventures out into battle and downs a mysterious Night Fury dragon with his invention, but cant bring himself to kill it. Instead, Hiccup and the dragon, whom he dubs Toothless, begin a friendship that would open up both their worlds as the observant boy learns that his people have misjudged the species. But even as the two each take flight in their own way, they find that they must fight the destructive ignorance plaguing their world.',
          Image: 'assets/images/HowToTrainYourDragon.jpg' 
        },
        {
          Id: 3,
          Name:'Spirited Away',
          DirectedBy:'Hayao Miyazaki',
          RunninTime: 124,
          Classification: 'PG',
          Country: 'Japan',
          Genre:'Animation',
          Language: 'Japanese',
          RoomCode:'2',
          Synopsis :'10-year old Chihiro becomes trapped in a forbidden world of gods and magic when her parents take her to investigate the other side of the tunnel. In order to survive, Chihiro must work and make herself useful, and find within her the courage and resolve she needs to save her parents and escape from a world where humans are dispised.',
          Image: 'assets/images/SpiritedAway.jpg'
        },
        {
          Id: 4,
          Name:'Grave of the Fireflies',
          DirectedBy:'Isao Takahata',
          RunninTime: 94,
          Classification: 'PG',
          Country: 'Japan',
          Genre:'Animation',
          Language: 'Japanese',
          RoomCode:'2',
          Synopsis :'A Japanese boy of 14 and his 4 year old sister, attempt to seek refuge from the atrocities of World War II in the small city of Kobe. In post-World War II Japan, a janitor finds a metal sweet container beside a deathly ill boy. The janitor tosses the canister into the night, unwittingly beginning a most unusual tale of survival amid war. Brother and sister Seita and Setsuko, flee their disheveled home and deceased parents to make their bid for a new life. Before American troops begin to occupy their country, the children resort to dwelling in an abandoned bomb shelter in the countryside. Though these siblings later get a sense of safety, they realize necessities such as food and water will not be easy to come by.',
          Image: 'assets/images/GraveOfTheFireflies.jpg'
        },
        {
          Id: 5,
          Name:'Monsters Inc',
          DirectedBy:'Pete Docter',
          RunninTime: 88,
          Classification: 'PG',
          Country: 'United States',
          Genre:'Animation',
          Language: 'English',
          RoomCode:'1',
          Synopsis :'Monsters, Inc. is a factory which sends monsters around the world to scare kids who are trying to sleep. Its nothing personal, in fact the screams are used to power Monstropolis where the monsters live. This job isnt easy for the monsters, who believe children are toxic. James P. Sullivan (voice of John Goodman), a large woolly blue monster, is one of the companys top scarers. Teamed up with a troublesome green one-eyed monster named Mike Wazowski (Billy Crystals voice), the two roommates and best friends are finding that todays kids are not as easily scared as they used to be. One night Sulley accidentally lets a young girl named Boo into the monster world. Now Sulley and Mike must risk their own safety as they race to get Boo back into the human world without letting anyone know of her existence.',
          Image: 'assets/images/MonstersInc.jpg' 
        }
      ]
    };
  }

  render() {
    const catalogue = this.props.movies.map((movie) => {
      return (
        <div key={movie.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media
                className="movie-cover"
                object
                src={movie.Image}
                alt={movie.Image}
              />
            </Media>
            <Media body className="ml-5">
              <h1>{movie.Name}</h1>
              <p className="movie-synopsis">{movie.Synopsis}</p>
              <Media body className="ml-0">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3">
                      <h5>Duration: </h5>
                      <h6 className="movie-duration">{movie.RunninTime + " Min"}</h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Classification: </h5>
                      <h6 className="movie-classification">{movie.Classification}</h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Directed by: </h5>
                      <h6 className="movie-director">{movie.DirectedBy}</h6>
                    </div>
                    <div className="col-lg-3">
                      <h5>Genre: </h5>
                      <h6 className="movie-genre">{movie.Genre} </h6>
                    </div>
                  </div>
                </div>
              </Media>
            </Media>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Media list>{catalogue}</Media>
        </div>
      </div>
    );
  }
}

export default withRouter(MoviesCatalogue);
