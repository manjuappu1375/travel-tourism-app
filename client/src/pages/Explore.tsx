import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ExploreWrapper = styled.main`
  padding: 2rem;
  background: #f8fafc;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;

  input, select {
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

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  div {
    padding: 0.75rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
    color: #1e3a8a;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0.25rem 0;
  }

  .actions {
    margin-top: auto;
    display: flex;
    gap: 0.5rem;

    a, button {
      padding: 0.4rem 0.6rem;
      border: none;
      border-radius: 6px;
      font-size: 0.85rem;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
    }

    a {
      background: #3b82f6;
      color: #fff;

      &:hover {
        background: #2563eb;
      }
    }

    button {
      background: #10b981;
      color: #fff;

      &:hover {
        background: #059669;
      }
    }
  }
`;

const mockTours = [
  { id: '1', name: 'Paris Adventure', region: 'Europe', price: 1200, type: 'City', img: 'https://source.unsplash.com/400x300/?paris' },
  { id: '2', name: 'Tokyo Explorer', region: 'Asia', price: 1500, type: 'City', img: 'https://source.unsplash.com/400x300/?tokyo' },
  { id: '3', name: 'Dubai Luxury', region: 'Middle East', price: 1800, type: 'Luxury', img: 'https://source.unsplash.com/400x300/?dubai' },
];

const Explore = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ search: '', region: '', type: '', price: '' });

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredTours = mockTours.filter(tour =>
    tour.name.toLowerCase().includes(filters.search.toLowerCase()) &&
    (filters.region ? tour.region === filters.region : true) &&
    (filters.type ? tour.type === filters.type : true) &&
    (filters.price ? tour.price <= parseInt(filters.price) : true)
  );

  const handleBookNow = (tour: typeof mockTours[0]) => {
    navigate(`/book/${tour.id}`, { state: { tour } });
  };

  return (
    <ExploreWrapper>
      <Filters>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={filters.search}
          onChange={handleFilter}
        />
        <select name="region" value={filters.region} onChange={handleFilter}>
          <option value="">All Regions</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Middle East">Middle East</option>
        </select>
        <select name="type" value={filters.type} onChange={handleFilter}>
          <option value="">All Types</option>
          <option value="City">City</option>
          <option value="Luxury">Luxury</option>
        </select>
        <input
          type="number"
          placeholder="Max Price"
          name="price"
          value={filters.price}
          onChange={handleFilter}
        />
      </Filters>

      <Grid>
        {filteredTours.map(tour => (
          <Card key={tour.id} whileHover={{ scale: 1.03 }}>
            <img src={tour.img} alt={tour.name} />
            <div>
              <h2>{tour.name}</h2>
              <p>{tour.region} • {tour.type}</p>
              <p>${tour.price}</p>
              <div className="actions">
                <Link to={`/tour/${tour.id}`}>View Details</Link>
                <button onClick={() => handleBookNow(tour)}>Book Now</button>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </ExploreWrapper>
  );
};

export default Explore;
