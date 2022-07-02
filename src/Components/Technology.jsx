import {Helmet} from "react-helmet";

function Technology(){
    return(
      <div>
        <Helmet>
          <body id="technology-page"/>
        </Helmet>
        <div id="technology-content" class="container-fluid content">
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="false">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">1</button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">2</button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">3</button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row custom-grid">
                            <div class="col-lg left-section">
                              <h4>THE TERMINOLOGY......</h4>
                              <h1>LAUNCH VEHICLE</h1>
                              <p> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                                payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                                it's quite an awe-inspiring sight on the launch pad!</p>
                            </div>
                            <div class="col-lg right-section tech-right">
                              <img class="potrait" src="./assets/technology/image-launch-vehicle-portrait.jpg" alt="crew-image"/>
                              <img class="lanscape" src="./assets/technology/image-launch-vehicle-landscape.jpg" alt="crew-image"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row custom-grid">
                            <div class="col-lg left-section">
                              <h4>THE TERMINOLOGY......</h4>
                              <h1>SPACE PORT</h1>
                              <p>  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                                by analogy to the seaport for ships or airport for aircraft. Based in the 
                                famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                                of the Earth’s rotation for launch.</p>
                            </div>
                            <div class="col-lg right-section tech-right">
                              <img class="potrait" src="./assets/technology/image-spaceport-portrait.jpg" alt="crew-image"/>
                              <img class="lanscape" src="./assets/technology/image-spaceport-landscape.jpg" alt="crew-image"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row custom-grid">
                            <div class="col-lg left-section">
                              <h4>THE TERMINOLOGY......</h4>
                              <h1>SPACE CAPSULE</h1>
                              <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                                you'll spend your time during the flight. It includes a space gym, cinema, 
                                and plenty of other activities to keep you entertained.</p>
                            </div>
                            <div class="col-lg right-section tech-right">
                              <img class="potrait" src="./assets/technology/image-space-capsule-portrait.jpg" alt="crew-image"/>
                              <img class="lanscape" src="./assets/technology/image-space-capsule-landscape.jpg" alt="crew-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  
    )
}

export default Technology; 