import {Helmet} from "react-helmet";

function Crew(){
return(
  <div>
    <Helmet>
      <body id="crewpage"/>
    </Helmet>
    <div id="crewpage-content" class="container-fluid content">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="false">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row custom-grid">
                        <div class="col-md left-section">
                          <h4>02 &nbsp; Meet your crew</h4>
                          <h2>COMMANDER</h2>
                          <h1>DOUGLES HURLEY</h1>
                          <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                          and former NASA astronaut. He launched into space for the third time as 
                          commander of Crew Dragon Demo-2.</p>
                        </div>
                        <hr class="custom-division"/>
                        <div class="col-md right-section">
                          <img src="./Space-project-react/crew/image-douglas-hurley.png" alt="crew-image"/>
                        </div>
                    </div>
                </div>  
                <div class="carousel-item">
                    <div class="row custom-grid">
                        <div class="col-md  left-section">
                          <h4>02 &nbsp; Meet your crew</h4>
                          <h2> MISSION SPECIALIST</h2>
                          <h1> MARK SHUTTLEWORTH</h1>
                          <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                            the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                            African to travel to space as a space tourist.</p>
                        </div>
                        <hr class="custom-division"/>
                        <div class="col-md  right-section">
                          <img src="./Space-project-react/crew/image-mark-shuttleworth.png" alt="crew-image"/>
                        </div>
                    </div>
                </div>  
                <div class="carousel-item">
                    <div class="row custom-grid">
                        <div class="col-md  left-section">
                          <h4>02 &nbsp; Meet your crew</h4>
                          <h2>PILOT</h2>
                          <h1>VICTOR GLOVER</h1>
                          <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                            International Space Station. Glover is a commander in the U.S. Navy where 
                            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                            station systems flight engineer.</p>
                        </div>
                        <hr class="custom-division"/>
                        <div class="col-md order-1 right-section">
                          <img src="./Space-project-react/assets/crew/image-victor-glover.png" alt="crew-image"/>
                        </div>
                    </div>
                </div>  
                <div class="carousel-item">
                    <div class="row custom-grid">
                        <div class="col-md left-section">
                          <h4>02 &nbsp; Meet your crew</h4>
                          <h2>FLIGHT ENGINEER</h2>
                          <h1>ANOUSHEH ANSARI</h1>
                          <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                            fly to the ISS, and the first Iranian in space.</p>
                        </div>
                        <hr class="custom-division"/>
                        <div class="col-md right-section">
                          <img src="./Space-project-react/assets/crew/image-anousheh-ansari.png" alt="crew-image"/>
                        </div>
                    </div>
                </div>  
            </div>      
        </div>      
    </div>
  </div>     
)       
}


export default Crew;
