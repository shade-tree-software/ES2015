// named parameters and options objects

function setPosition(lat, lng, options){
   console.log('latitude: ' + lat);
   console.log('longitude: ' + lng);
   if (options){
     if (options.alt){
       console.log('altitude: ' + options.alt);
     }
     if (options.spd){
       console.log('speed: ' + options.spd);
     }
     if (options.dir){
       console.log('direction: ' + options.dir);
     }
   }
}

setPosition(33.333, -77.777, {alt: 300});