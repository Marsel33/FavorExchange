import React from 'react';


    function SearchMap() {
  
      let ymaps = window.ymaps;
    
      ymaps.ready(init);
      function init(){
          let myMap = new ymaps.Map("map", { 
              center: [55.76, 37.64],
              zoom: 10
          });
      }
    
      return (
        
          <div style={{ width: '600px', height: '580px', borderRadius: '7px' }} id="map" ></div>
          
        
      );
    }  

 export default SearchMap
