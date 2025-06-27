import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Wrapper = styled.main`
  padding: 2rem;
  background: #f8fafc;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  padding: 1rem;

  @media(min-width: 768px) {
    flex-direction: row;
  }

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
    object-fit: cover;
  }

  div {
    flex: 1;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #1e3a8a;
  margin: 0;
`;

const Price = styled.p`
  font-weight: bold;
  color: #10b981;
  font-size: 1.2rem;
`;

const Desc = styled.p`
  color: #64748b;
  font-size: 1rem;
  margin: 1rem 0;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;

    &:first-child {
      background: #3b82f6;
      color: #fff;

      &:hover {
        background: #2563eb;
      }
    }

    &:last-child {
      background: #10b981;
      color: #fff;

      &:hover {
        background: #059669;
      }
    }
  }
`;

type Tour = {
  id: string;
  name: string;
  region: string;
  price: number;
  description: string;
  img: string;
};

const mockTours: Tour[] = [
  { id: '1', name: 'Paris Adventure', region: 'Europe', price: 1200, description: 'Explore the city of love with guided tours and hidden gems.', img: 'https://source.unsplash.com/600x400/?paris' },
  { id: '2', name: 'Tokyo Explorer', region: 'Asia', price: 1500, description: 'Discover Tokyo’s vibrant culture, food and nightlife.', img: 'https://source.unsplash.com/600x400/?tokyo' },
  { id: '3', name: 'Dubai Luxury', region: 'Middle East', price: 1800, description: 'Experience ultimate luxury in Dubai with premium packages.', img: 'https://source.unsplash.com/600x400/?dubai' },
];

const TourDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tour, setTour] = useState<Tour | null>(null);

  useEffect(() => {
    const found = mockTours.find(t => t.id === id);
    setTour(found || null);
  }, [id]);

  const handleAddToCart = () => {
    alert(`Added ${tour?.name} to cart!`);
  };

  const handleBookNow = () => {
    navigate(`/book/${tour?.id}`, { state: { tour } });
  };

  if (!tour) return <Wrapper><p>Loading tour details...</p></Wrapper>;

  return (
    <Wrapper>
      <Card initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <img src={tour.img} alt={tour.name} />
        <div>
          <Title>{tour.name}</Title>
          <Price>${tour.price}</Price>
          <Desc>{tour.description}</Desc>
          <p>Region: {tour.region}</p>
          <Buttons>
            <button onClick={handleAddToCart}>🛒 Add to Cart</button>
            <button onClick={handleBookNow}>🚀 Book Now</button>
          </Buttons>
        </div>
      </Card>
    </Wrapper>
  );
};

export default TourDetails;
