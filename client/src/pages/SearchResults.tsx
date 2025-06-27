import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 960px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2563eb;
  margin-bottom: 1rem;
`;

const ResultCard = styled.div`
  padding: 1rem;
  border: 1px solid #c7d2fe;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: #f9fafb;
`;

const SearchResults = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]); // Replace string[] with your actual tour type

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q') || '';
    setQuery(q);

    // Mock filtering logic (replace with actual API call or state filtering)
    const mockTours = [
      'Goa Escape',
      'Leh-Ladakh Ride',
      'Kerala Backwaters',
      'Jaipur Heritage',
      'Andaman Adventure'
    ];

    const filtered = mockTours.filter(tour =>
      tour.toLowerCase().includes(q.toLowerCase())
    );

    setResults(filtered);
  }, [location.search]);

  return (
    <Container>
      <Title>Search Results for: "{query}"</Title>
      {results.length > 0 ? (
        results.map((tour, idx) => (
          <ResultCard key={idx}>{tour}</ResultCard>
        ))
      ) : (
        <p>No tours found matching your search.</p>
      )}
    </Container>
  );
};

export default SearchResults;
