import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import { useState } from 'react';
//import L from 'leaflet';

const PageWrapper = styled.div`
  padding: 2rem;
`;

const SearchBox = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 1rem;
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [position, setPosition] = useState<[number, number] | null>([12.9716, 77.5946]); // Default: Bangalore

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm)}`
    );
    const data = await response.json();
    if (data.length > 0) {
      setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
    } else {
      alert('Location not found');
    }
  };

  return (
    <PageWrapper>
      <form onSubmit={handleSearch}>
        <SearchBox
          type="text"
          placeholder="Search location (e.g. Goa)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {position && (
        <MapContainer center={position} zoom={10} style={{ height: '500px', marginTop: '1rem' }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{searchTerm || 'Selected Location'}</Popup>
          </Marker>
        </MapContainer>
      )}
    </PageWrapper>
  );
};

export default SearchPage;
