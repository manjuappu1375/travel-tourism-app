import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const TourDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.tour) {
    return <Wrapper><p>❌ No tour data found. Please go back to Explore.</p></Wrapper>;
  }

  const tour = state.tour;

  const handleAddToCart = () => {
    alert(`Added ${tour.title} to cart!`);
  };

  const handleBookNow = () => {
    navigate(`/book/${tour.id}`, { state: { tour } });
  };

  return (
    <Wrapper>
      <Card initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <img src={tour.image} alt={tour.title} />
        <div>
          <Title>{tour.title}</Title>
          <Price>₹{tour.price.toLocaleString()}</Price>
          <Desc>{tour.description}</Desc>
          <p>Location: {tour.location}</p>
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
