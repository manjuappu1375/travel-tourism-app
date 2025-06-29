import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

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

  .badge {
    position: absolute;
    top: 8px;
    left: 8px;
    background: #facc15;
    color: #92400e;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 4px;
  }

  .wishlist-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: #fff;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    color: #f43f5e;
    border: none;
  }
`;

interface TourCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onViewDetails: () => void;
  onBookNow: () => void;
}

const TourCard = ({
  title,
  location,
  price,
  image,
  isWishlisted,
  onToggleWishlist,
  onViewDetails,
  onBookNow,
}: TourCardProps) => {
  return (
    <Card whileHover={{ scale: 1.03 }}>
      <div className="badge">Top Pick</div>
      <button className="wishlist-btn" onClick={onToggleWishlist}>
        {isWishlisted ? <FaHeart /> : <FaRegHeart />}
      </button>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{location}</p>
        <p>₹{price.toLocaleString()}</p>
        <div className="actions">
          <button className="details-btn" onClick={onViewDetails}>
            View
          </button>
          <button className="book-btn" onClick={onBookNow}>
            Book
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;
