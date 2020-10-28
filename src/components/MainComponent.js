import React, { Component } from "react";

class MainComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                <div className="image png"></div>
                <div className="inside">
                  <h2>We are breaking<span>All Limitations</span></h2>
                  <p>Lorem ipsum dolor consectetur adipisicing elit, sed do eiusmod tempor incididunt labore etolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris.</p>
                  <div className="wrapper"><a href="./components/MoviesComponent" className="link1"><span><span>Learn More</span></span></a></div>
                </div>
              </div>
              <div className="box">
                <div className="border-right">
                  <div className="border-left">
                    <div className="inner">
                      <h3>Welcome to <b>Cinema</b> <span>World</span></h3>
                      <p>Felitsed vel inte vivamus ant sed sapientesque ero id auctor tincidunt. Enimin ulla mi et nibh turien augue habitudin platea sed orci. Intedonec quis sed condis donec urna lacilis leo quismodo wisi quis.</p>
                      <div className="img-box1"><img src="images/1page-img1.jpg" alt="" />Fauctororci cursuspendrerisque ipsum elit congue nibh proin nulla eu urna et. Tordolorem metus fringilla sem facinia sapien in in malesuada vitae quismodo. Ipsumut tellentegest nunc pede id sem gravida natis justo maecenas eu. </div>
                      <p>Doneccursus et amet a mattitor condisse laoreet accum wisis sapibulum orci. Cursuscondimentum dolorem pulvinare lacus amet commod tincidunt tellus quisque donec natibus.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>Fresh Movies</h3>
                <ul className="movies">
                  <li>
                    <h4>Toy Story 3</h4>
                    <img src="images/1page-img2.jpg" alt="" />
                    <p>Egetnunc nunc mattitor curabiturpiscipis nec ac hac pellus sem intesque sociis. Metusmetuer hendimentesque diam at orbi sempor.</p>
                    <div className="wrapper"><a href="./components/MoviesComponent" className="link2"><span><span>Read More</span></span></a></div>
                  </li>
                  <li>
                    <h4>Prince of Percia: Sands of Time</h4>
                    <img src="images/1page-img3.jpg" alt="" />
                    <p>Dolorem malesuada anterdum quis vitae. Cursustellentesque enim justo vestasse vitae trices phasellus leo sociis leo magnisl. Malestibulusnatis. </p>
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

export default MainComponents;