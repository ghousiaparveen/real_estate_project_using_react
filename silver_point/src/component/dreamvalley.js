import React from "react";
import './dreamvalley.css';
import dv1 from '../image/dv-image/dv1.png';
import dv2 from '../image/dv-image/dv2.jpeg';
import dv3 from '../image/dv-image/dv3.jpeg';
import dv4 from '../image/dv-image/dv4.jpeg';
import dv5 from '../image/dv-image/dv5.jpeg';
import plot from '../image/dv-image/plot.jpg';

const DreamValley = () =>{

    return (
        <div>
        <div className="dv1">
        <h1 className="title">WELCOME TO DREAM VALLEY</h1>
        <p className="para">Nestled in a prime location, Dream Valley is the 
        ultimate destination for those seeking to make their
        dream home a reality. Offering a harmonious blend of 
        modern amenities and serene natural surroundings, 
        Dream Valley stands as a testament to luxurious yet
        affordable living. </p>
        <h2 className="title">Exclusive Bank Loan Facilities</h2>
        <p className="para">At Dream Valley, we understand the importance of financial 
        flexibility. So the good news is that, bank loans are available from both <span>NBFC 
        (Non-Banking Financial Companies) and Government Banks</span>. 
        With these options available, securing your dream home would be
        much easier.</p>
        <h2 className="title">Affordable Pricing for Your Dream Home</h2>
        <p className="para">Dream Valley plots are available at an attractive rate
        of <span>16,000 per square yard</span>. This competitive pricing ensures that you get 
        the best value for your investment while enjoying premium facilities.</p>
        </div>
        <div className="row">
        <div className="column">
            <img src={dv1} alt="dream valley"/>
        </div>
        <div className="column">
            <img src={dv2} alt="dream valley"/>
        </div>
        <div className="column">
            <img src = {dv3} alt="dream valley"/>
        </div>
        <div className="column">
            <img src={dv4} alt = "dream valley"/>
        </div>
        <div className="column">
            <img src={dv5} alt="dream valley"/>
        </div>
        </div>
        <div className="dv1">
            <h2 className="title">Site Map and Layout</h2>
            <img src={plot} alt="plot map" className="plotMap"/>
        </div>
        </div>
    )
}
export default DreamValley;