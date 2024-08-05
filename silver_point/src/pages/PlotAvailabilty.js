import React, { useEffect , useState } from 'react';
import {useLocation} from 'react-router-dom';
import './PlotAvailability.css';
import Slideshow from '../component/Slideshow';
import DreamValley from '../component/dreamvalley';
import dvbg from '../image/dv-bg.jpeg';
import dvbg1 from '../image/dv-bg1.jpeg';
import dvbg2 from '../image/dv-bg2.jpeg';


const PlotAvailabilty = () => {


  const slides = [
    { 
        image: dvbg, 
        heading: 'Welcome to Our Real Estate', 
        subheading: 'Find the best properties at affordable prices' 
    },
    { 
        image: dvbg1, 
        heading: 'Luxury Apartments', 
        subheading: 'In the heart of the city with modern amenities' 
    },
    { 
        image: dvbg2, 
        heading: 'Beautiful Houses', 
        subheading: 'Spacious and comfortable, perfect for families' 
    },
];
    
    const location = useLocation();
    const [visibleSection,setVisibleSection] = useState(null);
    
    useEffect(()=>{
      const hash = location.hash;
      setVisibleSection(hash ? hash.substring(1) : null)
    },[location.hash])

  return (
    <div>
       <div>
          
          <Slideshow slides={slides} customClass='plot-sideShow'/>
        </div>
      {visibleSection === 'Aashiyana' && (
        <div id='Aashiyana'>
          <h1 className='title'>AASHIYANA RESIDENCY</h1>
          <p>Details about AASHIYANA</p>
        </div>
      )}
      {visibleSection ==='shriShyamVihar' && (
        <div id='shriShyamVihar'>
          <h1 className='title'>SHRI SHYAM VIHAR</h1>
          <p>Details about SHRI SHYAM VIHAR</p>
        </div>
      )}
      {visibleSection ==='dreamValley' && (
        <div id='dreamValley'>
          <DreamValley/>
        </div>
      )}
     
     
    </div>
  );
};



export default PlotAvailabilty;
