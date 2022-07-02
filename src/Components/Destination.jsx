import {Helmet} from "react-helmet";

function Destination(){
    return(
      <div>
          <Helmet>
            <body id="destination-page"/>
          </Helmet>
        <div id="destination-content" class="container-fluid content">
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-lg left-section">
                              <img src="./assets/destination/image-moon.png" alt="Europa"/>
                            </div>
                            <div class="col-lg right-section">              
                              <h1>MOON</h1>
                              <p>  See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                                regain perspective and come back refreshed. While you’re there, take in some history 
                                by visiting the Luna 2 and Apollo 11 landing sites.</p>
                              <hr/>
                                <div class="row">
                                    <div class="col-lg">
                                        <h2>384,400 KM</h2> 
                                    </div>
                                    <div class="col-lg">
                                        <h2> 3 DAYS</h2>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg left-section">
                              <img src="./assets/destination/image-mars.png" alt="Europa"/>
                            </div>
                            <div class="col-lg right-section">              
                              <h1>MARS</h1>
                              <p>  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,      
                                the tallest planetary mountain in our solar system. It’s two and a half times 
                                the size of Everest!</p>
                              <hr/>
                                <div class="row">
                                    <div class="col-lg">
                                      <h2>225M KM</h2> 
                                    </div>
                                    <div class="col-lg">
                                      <h2>9 MONTHS</h2>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg left-section">
                              <img src="./assets/destination/image-europa.png" alt="Europa"/>
                            </div>
                            <div class="col-lg right-section">              
                              <h1>Europa</h1>
                              <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a   
                                winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                                ice skating, curling, hockey, or simple relaxation in your snug 
                                wintery cabin.</p>
                              <hr/>
                                <div class="row">
                                    <div class="col-lg">
                                      <h2>628M KM</h2> 
                                    </div>
                                    <div class="col-lg">
                                      <h2>3 YEARS</h2>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg left-section">
                              <img src="./assets/destination/image-titan.png" alt="Europa"/>
                            </div>
                            <div class="col-lg right-section">              
                              <h1>TITAN</h1>
                              <p>  The only moon known to have a dense atmosphere other than Earth, Titan   
                                is a home away from home (just a few hundred degrees colder!). As a 
                                bonus, you get striking views of the Rings of Saturn.</p>
                              <hr/>
                                <div class="row">
                                    <div class="col-lg">
                                      <h2>1.6B KM</h2> 
                                    </div>
                                    <div class="col-lg">
                                      <h2>7 YEARS</h2>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Destination;