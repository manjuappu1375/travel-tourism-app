import { useState } from 'react';
import styled from 'styled-components';
import InteractiveMap from '../components/InteractiveMap';

const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchBar = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 12px;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 500;
  }

  button:hover {
    background-color: #1e40af;
  }
`;

const MapPage = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchTerm(query);
    }
  };

  return (
    <PageWrapper>
      <h2 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>🌍 Explore via Map</h2>
      <SearchBar onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a city, region, or landmark..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBar>
      <InteractiveMap searchTerm={searchTerm} />
    </PageWrapper>
  );
};

export default MapPage;
