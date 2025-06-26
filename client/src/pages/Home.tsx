// src/pages/Home.tsx
import styled from 'styled-components'

// Components for homepage sections
import HeroSection from '../components/HeroSection'
import InteractiveMap from '../components/InteractiveMap'
import Testimonials from '../components/Testimonials'
import BlogPreview from '../components/BlogPreview'
import SocialFeed from '../components/SocialFeed'
import BookingTracker from '../components/BookingTracker'

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(to right, #e0e7ff, #f0f5ff);
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 960px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1e40af;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #374151;
  max-width: 700px;
`

const Emoji = styled.span`
  font-size: 2rem;
  margin-left: 0.5rem;
`

const Home = () => {
  return (
    <>
      <Hero>
        <Title>
          Welcome to the Travel & Tourism Platform <Emoji>🧳</Emoji>
        </Title>
        <Subtitle>
          Book your dream destinations, create wishlists, and explore the world with ease.
        </Subtitle>
      </Hero>

      {/* Rest of homepage sections */}
      <HeroSection />
      <InteractiveMap />
      <Testimonials />
      <BlogPreview />
      <SocialFeed />
      <BookingTracker />
    </>
  )
}

export default Home
