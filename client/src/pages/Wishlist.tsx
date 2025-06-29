import { useWishlist } from '../contexts/WishlistContext';
import { useNavigate } from 'react-router-dom';
import TourCard from '../components/TourCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const Wishlist = () => {
  const { wishlist, removeFromWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <Wrapper>
        <p>Your wishlist is empty! Start adding tours.</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>Your Wishlist ❤️</h2>
      <Grid>
        {wishlist.map((t) => (
          <TourCard
            key={t.id}
            {...t}
            isWishlisted={isWishlisted(t.id)}
            onToggleWishlist={() => removeFromWishlist(t.id)}
            onViewDetails={() => navigate(`/tour/${t.id}`)}
            onBookNow={() => navigate(`/book/${t.id}`)}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Wishlist;
