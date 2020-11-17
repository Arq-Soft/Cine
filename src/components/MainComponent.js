import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  navigate(){
    this.props.history.push({pathname:'/test'})
  }
  render() {
      return (
        <div className="tail-top">
        <div className="tail-bottom">
          <div id="main">
            <div id="content">
              <div id="slogan">
                <div className="image png"></div>
                <div className="inside">
                  <h2>Cinema <span>Paradiso</span></h2>
                </div>
              </div>
                            
              <div className="content">
                <h3>Fresh Movies</h3>
                <ul className="movies">
                  <li>
                    <h4>Toy Story 3</h4>
                    <img src="images/1page-img2.jpg" alt="" />
                    <p>Texto3</p>
                    <div className="wrapper"><a href="./components/MoviesComponent" className="link2"><span><span>Read More</span></span></a></div>
                  </li>
                  <li>
                    <h4>Prince of Percia: Sands of Time</h4>
                    <img src="images/1page-img3.jpg" alt="" />
                    <p>Texto3</p>
                    <div className="wrapper"><a href="./components/MoviesComponent" className="link2"><span><span>Read More</span></span></a></div>
                  </li>
                  <li className="last">
                    <h4>The Twilight Saga: Eclipse</h4>
                    <img src="images/1page-img4.jpg" alt="" />
                    <p>Quisque felit odio ut nunc convallis semper sente ris feugiat. Odionam leo phasellentum id vitantesque nunc tor quisque a maecenatibus pellus.</p>
                    <div className="wrapper"><a href="./components/MoviesComponent" className="link2"><span><span>Read More</span></span></a></div>
                  </li>
                  <li className="clear">&nbsp;</li>
                </ul>
              </div>
            </div>
            <div id="footer">
              <div className="left">
                <div className="right">
                  <div className="footerlink">
                    <p className="lf">Copyright &copy; 2020 <a href="./components/MoviesComponent">Cinema Paradiso</a>- All Rights Reserved</p>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default withRouter(MainComponents);