import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const Wrapper = styled.main`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a8a;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  padding: 0.75rem;
  background: #10b981;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #059669;
  }
`;

const BookingForm = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const tour = location.state?.tour;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on tour: ${tour?.name || id}`);
    navigate('/explore');
  };

  return (
    <Wrapper>
      <Title>Book Your Tour</Title>
      {tour && (
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <strong>{tour.name}</strong> — ${tour.price}
        </p>
      )}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          min={1}
          onChange={handleChange}
          required
        />
        <SubmitBtn type="submit">✅ Confirm Booking</SubmitBtn>
      </Form>
    </Wrapper>
  );
};

export default BookingForm;
