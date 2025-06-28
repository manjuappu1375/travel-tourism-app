import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

const southIndiaTours = [
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters Cruise',
    location: 'Alleppey, Kerala',
    price: 14500,
    image: '/assets/kerala-backwaters.jpg',
    description: 'Enjoy a serene houseboat cruise through Kerala’s backwaters.',
    region: 'South India',
  },
  {
    id: 'ooty-hills',
    title: 'Ooty Hills Getaway',
    location: 'Ooty, Tamil Nadu',
    price: 12000,
    image: '/assets/ooty-hills.jpg',
    description: 'Explore the lush green hills of Ooty and scenic viewpoints.',
    region: 'South India',
  },
  {
    id: 'coorg-estate',
    title: 'Coorg Coffee Estate Retreat',
    location: 'Coorg, Karnataka',
    price: 11000,
    image: '/assets/coorg-coffee.jpg',
    description: 'Stay in a coffee estate and experience nature at its best.',
    region: 'South India',
  },
  {
    id: 'pondy-beach',
    title: 'Pondicherry French Beach Vibes',
    location: 'Pondicherry',
    price: 9500,
    image: '/assets/pondicherry-beach.jpg',
    description: 'Relax at Pondicherry’s beautiful beaches with French charm.',
    region: 'South India',
  },
];

const Explore = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredTours = southIndiaTours.filter(
    (tour) =>
      tour.title.toLowerCase().includes(search.toLowerCase()) ||
      tour.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ExploreWrapper>
      <Filters>
        <input
          type="text"
          placeholder="Search South Indian Tours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Filters>

      <Grid>
        {filteredTours.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            title={tour.title}
            location={tour.location}
            price={tour.price}
            image={tour.image}
            onViewDetails={() => navigate(`/tour/${tour.id}`, { state: { tour } })}
            onBookNow={() => navigate(`/book/${tour.id}`, { state: { tour } })}
          />
        ))}
      </Grid>
    </ExploreWrapper>
  );
};

export default Explore;
