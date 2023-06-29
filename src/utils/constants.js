import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
    'To make time and multiverse travel available to all beings (except humans and jwuvryefiodytes) in all places in all times.'
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
    'As a collective conscious being we see and know everything, everywhere, for all time all space. Are we taking this section too literally?'
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'The concept known as history is a waste of time; but hey, you do you.'
  },
]

export const products_url = '/.netlify/functions/products';

export const single_product_url = `/.netlify/functions/single-product?id=`;
