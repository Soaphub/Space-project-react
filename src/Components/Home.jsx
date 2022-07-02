import {Helmet} from "react-helmet";

function Home() {
    return(
        <div>
            <Helmet>
                <body id="homepage"/>
            </Helmet>
            <div id="homepage-content" class="container-fluid content">
                <div class="row">
                    <div class="col-lg left-section">
                        <h3>SO, YOU WANT TO TRAVEL TO</h3>
                        <h1 class="title-text">SPACE</h1>
                        <p>Let’s face it, if you want to go to space, you might as well genuinely go to outer 
                            space and not hover kind of on the edge of it. Well sit back, and relax because we’ll 
                             give you a truly out of this world experience!</p>
                    </div>
                    <div class="col-lg right-section">
                        <img class="circle-img" src="./assets/favicon/circle-256.gif" alt=""/>
                        <h1 class="circle-img-text">EXPLORE</h1>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Home;