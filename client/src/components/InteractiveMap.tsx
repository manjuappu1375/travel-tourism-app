// src/components/InteractiveMap.tsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MarkerClusterGroup from 'react-leaflet-cluster';

const MapSection = styled.section`
  padding: 2rem;
  background: #eef2ff;
`;

const MapTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e3a8a;
  margin-bottom: 1rem;
`;

const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const MapSearchZoom = ({ coords }: { coords: LatLngExpression }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) map.setView(coords, 10);
  }, [coords, map]);
  return null;
};

interface NominatimPlace {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
}

const InteractiveMap = ({ searchTerm }: { searchTerm: string }) => {
  const [places, setPlaces] = useState<{ id: string; name: string; coords: [number, number] }[]>([]);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchPlaces = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm)}`
        );
        const data: NominatimPlace[] = await res.json();
        const formatted = data.map((item) => ({
          id: item.place_id,
          name: item.display_name,
          coords: [parseFloat(item.lat), parseFloat(item.lon)] as [number, number],
        }));
        setPlaces(formatted);
      } catch (err) {
        console.error('Map search API error:', err);
      }
    };

    fetchPlaces();
  }, [searchTerm]);

  const center: LatLngExpression = places.length ? places[0].coords : [20.5937, 78.9629]; // India center fallback

  return (
    <MapSection>
      <MapTitle>🗺️ Interactive Map</MapTitle>
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: '400px', width: '100%', borderRadius: '12px' }}
      >
        <MapSearchZoom coords={center} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {places.map((place) => (
            <Marker key={place.id} position={place.coords} icon={customIcon}>
              <Popup>{place.name}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </MapSection>
  );
};

export default InteractiveMap;
