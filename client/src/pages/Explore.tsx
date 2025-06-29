import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import TourCard from '../components/TourCard';

const ExploreWrapper = styled.main`
  padding: 2rem;
  background: #f8fafc;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;

  input {
    padding: 0.5rem 0.75rem;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 0.95rem;

    &:focus {
      border-color: #3b82f6;
      outline: none;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const tours = [
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters Cruise',
    location: 'Alleppey, Kerala',
    price: 14500,
    image: '/assets/kerala-backwaters.jpg',
  },
  {
    id: 'ooty-hills',
    title: 'Ooty Hills Getaway',
    location: 'Ooty, Tamil Nadu',
    price: 12000,
    image: '/assets/ooty-hills.jpg',
  },
  {
    id: 'coorg-estate',
    title: 'Coorg Coffee Estate Retreat',
    location: 'Coorg, Karnataka',
    price: 11000,
    image: '/assets/coorg-coffee.jpg',
  },
  {
    id: 'pondy-beach',
    title: 'Pondicherry French Beach Vibes',
    location: 'Pondicherry',
    price: 9500,
    image: '/assets/pondicherry-beach.jpg',
  },
];

const Explore = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  const filtered = tours.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ExploreWrapper>
      <Filters>
        <input
          type="text"
          placeholder="Search tours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Filters>
      <Grid>
        {filtered.map((t) => (
          <TourCard
            key={t.id}
            {...t}
            isWishlisted={isWishlisted(t.id)}
            onToggleWishlist={() =>
              isWishlisted(t.id) ? removeFromWishlist(t.id) : addToWishlist(t)
            }
            onViewDetails={() => navigate(`/tour/${t.id}`)}
            onBookNow={() => navigate(`/book/${t.id}`)}
          />
        ))}
      </Grid>
    </ExploreWrapper>
  );
};

export default Explore;
