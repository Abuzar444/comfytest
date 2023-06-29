import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
          As a collective conscious entity, we realized all beings yearn for the multiverse experience. In 487932 IC 10 we put together a used time travel device dealership on the corner of J2000:0: 002::021:9000 and B196:0: 001::738:8663. From these humble beginnings our reputation for quality and trust spanned the multiverse. Today we have exclusive partnerships with brand names you know and trust like The Multiversinal Corporate Espionage Group as well as the renowned artisan Splegygy Arsxedzq, founder of Elegant Steam Commune. Stop by anytime, any multiverse, to see our assortment of high quality new or preowned, time or multidimensional, travel vehicles and accessories. We're here literally all the time.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
