import React, { useState, useEffect } from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

const anvale = {
  addresses: [
    {
      address: '936 The East Mall, Toronto, ON M9B 6J9',
      infobox_content: '',
      // "marker":"\/wp-content\/uploads\/2017\/08\/anvale_map_pin.png",
      coordinates: false,
      cache: true,
      latitude: '43.6709715',
      longitude: '-79.57127600000001',
    },
  ],
  animations: true,
  infobox_background_color: '#48a7d6',
  infobox_styling: 'custom',
  infobox_text_color: '',
  map_style: 'custom',
  map_type: 'terrain',
  // marker_icon: '/wp-content/uploads/2017/08/anvale_map_pin.png',
  overlay_color: '#bfbfbf',
  overlay_color_hsl: { hue: 0, sat: 0, lum: 75 },
  pan_control: false,
  show_address: false,
  scale_control: false,
  scrollwheel: false,
  zoom: 14,
  zoom_control: false,
};


const defaultMarkers = [
    //burlington
    { lat: 43.32075, lng: -79.81012 },
    { lat: 43.32076, lng: -79.81117 },
    { lat: 43.32505, lng: -79.81042 },
    { lat: 43.32683, lng: -79.81249 },
    { lat: 43.31733, lng: -79.82291 },
    //mississuaga
    { lat: 43.59424, lng: -79.66002 },
    { lat: 43.58946, lng: -79.66991 },
    { lat: 43.58724, lng: -79.66634 },
    { lat: 43.5839, lng: -79.66915 },
    { lat: 43.57616, lng: -79.66003 },
    { lat: 43.58258, lng: -79.65912 },
    { lat: 43.58022, lng: -79.64112 },
    { lat: 43.58521, lng: -79.63762 },
    // //Oakville
    {lat: 43.5191, lng: -79.6934},
    {lat: 43.520, lng: -79.6937},
    {lat: 43.520, lng: -79.6960},
    {lat: 43.525, lng: -79.6986},
    // //milton
    { lat: 43.52022, lng: -79.88632 },
    { lat: 43.51996, lng: -79.88439 },
    // //brampton
    { lat: 43.70427, lng: -79.75355 },
    { lat: 43.70515, lng: -79.75514 },
    { lat: 43.70670, lng: -79.75274 },
    // //tronoto
    {lat: 43.70117, lng: -79.41215},
    {lat: 43.70239, lng: -79.41273},
    // //kitchner
    {lat: 43.41129, lng: -80.47265},
    // //Halton Hills
    {lat: 43.62852, lng: -79.89041},
    // // Guelph, ON, Canada
    {lat: 43.53568, lng: -80.26756},
    // canguah 
    {lat: 43.83, lng: -79.5736},
  
  ];

const GMap = ({ markers }) => {
  markers = markers ?? defaultMarkers
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPark(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 43.67, lng: -79.77 }}
      defaultOptions={{
        overlayColor: '#bfbfbf',
        overlayColorHsl: { hue: 0, sat: 0, lum: 75 },
        zoomControl: false,
        animations: true,
        panControl: false,
        scaleControl: false,
        scrollwheel: true,
      }}
    >
      {/* <Marker
          position={{
            lat: '43.6709715',
            lng: '-79.57127600000001'
          }}
        /> */}
      {markers.map((marker) => (
        <Marker
            key={`${marker.lat}-${marker.lng}`}
          position={{ lat: marker.lat, lng: marker.lng }}
          // onClick={() => {
          //     setSelectedPark(true);
          //   }}
          icon={{
            url: '/pins/logo-header_HORNS.svg',
            scaledSize: new window.google.maps.Size(70,100),
          }}
        />
      ))}

      {/* {selectedPark && (
        <InfoWindow
        //   onCloseClick={() => {
        //     setSelectedPark(null);
        //   }}
          position={{ lat: 43.67, lng: -79.77 }}
        >
          <div style={{backgroundColor: '#48a7d6', }}>
            <h2>{'Anvale Homes'}</h2>
            <p>{"936 The East Mall, Toronto, ON M9B 6J9"}</p>
          </div>
        </InfoWindow>
      )} */}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(GMap));

// https://developers.google.com/maps/documentation/javascript/controls

// https://github.com/leighhalliday/google-maps-react-demo/blob/master/src/App.js

// https://tomchentw.github.io/react-google-maps/#groundoverlay

// https://codesandbox.io/s/react-google-maps-example-forked-gu6t32?file=/index.js
