// import React, { useState, useEffect } from "react";
// import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";

// const anvale =  {
//     addresses: [{"address":"936 The East Mall, Toronto, ON M9B 6J9",
//         "infobox_content":"",
//         "marker":"\/wp-content\/uploads\/2017\/08\/anvale_map_pin.png",
//         "coordinates":false,"cache":true,"latitude":"43.6709715",
//         "longitude":"-79.57127600000001"
//     }],
//     animations: true,
//     infobox_background_color: '#48a7d6',
//     infobox_styling: 'custom',
//     infobox_text_color: '',
//     map_style: 'custom',
//     map_type: 'terrain',
//     marker_icon: '/wp-content/uploads/2017/08/anvale_map_pin.png',
//     overlay_color: '#bfbfbf',
//     overlay_color_hsl: {"hue":0,"sat":0,"lum":75},
//     pan_control: false,
//     show_address: false,
//     scale_control: false,
//     scrollwheel: false,
//     zoom: 14,
//     zoom_control: false,
//     }

// const GMap= () => {
//   const [selectedPark, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

//   return (
//     <GoogleMap
//         defaultZoom={14}
//         defaultCenter={{ lat: 43.67, lng: -79.77 }}
//         defaultOptions={{ 
//             overlayColor: '#bfbfbf',
//             overlayColorHsl: {"hue":0,"sat":0,"lum":75},
//             zoomControl: false,
//             animations: true,
//             panControl: false,
//             scaleControl: false,
//             scrollwheel: true,
//         }}
//     >
//         {/* <Marker
//           position={{
//             lat: '43.6709715',
//             lng: '-79.57127600000001'
//           }}
//         /> */}
//         <Marker 
//             position={{ lat: 43.67, lng: -79.77 }}
//             onClick={() => {
//                 setSelectedPark(true);
//               }}
//               icon={{
//                 url: `map_pin.png`,
//                 // scaledSize: new window.google.maps.Size(25, 25)
//               }}
//         />
//       {selectedPark && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedPark(null);
//           }}
//           position={{ lat: 43.67, lng: -79.77 }}
//         >
//           <div style={{backgroundColor: '#48a7d6', }}>
//             <h2>{'Anvale Homes'}</h2>
//             <p>{"936 The East Mall, Toronto, ON M9B 6J9"}</p>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// }

// export default withScriptjs(withGoogleMap(GMap));

// // https://developers.google.com/maps/documentation/javascript/controls

// // https://github.com/leighhalliday/google-maps-react-demo/blob/master/src/App.js

// // https://tomchentw.github.io/react-google-maps/#groundoverlay

// // https://codesandbox.io/s/react-google-maps-example-forked-gu6t32?file=/index.js