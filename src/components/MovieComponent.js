import React, { Component } from "react";

class MovieComponent extends Component{

    componentDidMount(){
        console.log('Movies component componentDidMount invoked');
      }
    componentDidUpdate(){
        console.log('MoviesDetails componentDidUpdate render invoked');
    }
    render() {
        return (
          <div className="tail-top">
          <div className="tail-bottom">
            <div id="main">
              <div id="header">
                <div className="row-1">
                  <div className="fleft">Cinema <span>Paradiso</span></div>
                </div>
                <div className="row-2">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">About</a></li>
                    <li><a href="articles.html">Log in</a></li>
                    <li className="last"><a href="sitemap.html">Sing up</a></li>
                  </ul>
                </div>
              </div>
              <div id="content">
                <div id="slogan">
                </div>
                <div className="box">
                  <div className="border-right">
                    <div className="border-left">
                      <div className="inner">
                        <h3>Welcome to <b>Cinema</b> <span>World</span></h3>

                      </div>
                    </div>
                  </div>
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
export default MovieComponent;