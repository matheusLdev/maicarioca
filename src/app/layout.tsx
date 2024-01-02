import type { Metadata } from 'next';
import { roboto } from './fonts';
import './globals.css';

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
        <html lang='PT-BR'>
            <head>
                <link rel='icon' href='icon.svg' type='image/x-icon' />
            </head>
            <body
                className={`w-full ${roboto.className} bg-page-color antialiased w-full my-0`}
            >
                {children}
            </body>
        </html>
    );
}
