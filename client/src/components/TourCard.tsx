import styled from 'styled-components';
import { motion } from 'framer-motion';

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

    button {
      padding: 0.4rem 0.6rem;
      border: none;
      border-radius: 6px;
      font-size: 0.85rem;
      cursor: pointer;
      text-align: center;
      color: #fff;
    }

    .details-btn {
      background: #3b82f6;
      &:hover {
        background: #2563eb;
      }
    }

    .book-btn {
      background: #10b981;
      &:hover {
        background: #059669;
      }
    }
  }
`;

interface TourCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  onViewDetails: () => void;
  onBookNow: () => void;
}

const TourCard = ({
  title,
  location,
  price,
  image,
  onViewDetails,
  onBookNow,
}: TourCardProps) => {
  return (
    <Card whileHover={{ scale: 1.03 }}>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{location}</p>
        <p>₹{price.toLocaleString()}</p>
        <div className="actions">
          <button className="details-btn" onClick={onViewDetails}>
            View Details
          </button>
          <button className="book-btn" onClick={onBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;
