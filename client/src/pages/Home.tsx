import styled from 'styled-components';
import { useState } from 'react';

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  color: #fff;
  text-align: center;
  border-radius: 12px;
  margin: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  width: 250px;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #1e40af;
  }
`;

const Highlights = styled.section`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const HighlightCard = styled.div`
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  text-align: center;
`;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log(`Searching for: ${searchTerm}`);
    }
  };

  return (
    <>
      <Hero>
        <HeroTitle>🌍 Discover Your Next Adventure</HeroTitle>
        <HeroSubtitle>Explore unique destinations around the world with TravelX</HeroSubtitle>
        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Search tours or places..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </Hero>

      <Highlights>
        <HighlightCard>
          <h3>✨ Curated Tours</h3>
          <p>Hand-picked destinations to match every vibe.</p>
        </HighlightCard>
        <HighlightCard>
          <h3>🔥 Trending Spots</h3>
          <p>See what’s hot this season across the globe.</p>
        </HighlightCard>
        <HighlightCard>
          <h3>💬 Traveler Stories</h3>
          <p>Get inspired by experiences shared by real travelers.</p>
        </HighlightCard>
      </Highlights>
    </>
  );
};

export default Home;
