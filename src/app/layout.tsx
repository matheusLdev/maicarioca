import type { Metadata } from 'next';
import { roboto } from './fonts';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
    title: '@MaiCarioca',
    description: '',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='PT-BR' className='!scroll-smooth'>
            <head>
                <link rel='icon' href='icon.svg' type='image/x-icon' />
            </head>
            <body
                className={`w-full ${roboto.className} bg-gradient-pulse animate-pulse antialiased w-full my-0`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
