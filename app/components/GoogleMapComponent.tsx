// GoogleMapComponent.tsx
'use client'
import React from 'react';
import { GoogleMap, LoadScript, Polygon, useJsApiLoader } from '@react-google-maps/api';

interface Props {
  apiKey: string;
}

const containerStyle = {
  width: '600px',
  height: '400px'
};

const kmlCoordinates = `
-99.18387951189455,29.34496842398161,0 -99.00416879348707,29.34364143029771,0 -98.79980892991718,29.35962694784834,0 -98.44011508263419,29.40149658821414,0 -98.26171141355087,29.47334953081059,0 -97.84959735349997,29.57887197250899,0 -97.84494082744874,29.89568540085921,0 -98.40735718754388,30.09263748843938,0 -99.12349729823369,30.04488090713364,0 -99.17651942567987,29.73301940764436,0 -99.20303441558636,29.55530925051297,0 -99.18387951189455,29.34496842398161,0
`;

const parseCoordinates = (coords: string) => {
  return coords.trim().split(' ').map(coord => {
    const [lng, lat] = coord.split(',').map(Number);
    return { lat, lng };
  });
};

const points = parseCoordinates(kmlCoordinates);

const GoogleMapComponent: React.FC<Props> = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey
  });

  const mapRef = React.useRef<google.maps.Map>();
  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new google.maps.LatLngBounds();
    points.forEach((point) => bounds.extend(point));
    map.fitBounds(bounds);
    mapRef.current = map;
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        zoom={9} // Default zoom
        center={{ lat: 29.5, lng: -98.5 }} // Default center
      >
        <Polygon
          paths={points}
          options={{
            fillColor: "grey",
            fillOpacity: 0.5,
            strokeColor: "black",
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </div>
  );
}

export default GoogleMapComponent;
