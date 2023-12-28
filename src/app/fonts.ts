import { Roboto, Roboto_Condensed } from 'next/font/google';

export const roboto = Roboto({ 
  weight: ['500', '700'], 
  subsets: ['latin'] 
});

export const roboto_condensed = Roboto_Condensed({
  weight: '700',
  style: 'italic',
  subsets: ['latin']
});