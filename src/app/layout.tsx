import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import clsx from 'clsx';
import Providers from '../components/Providers';
import ParticleCanvas from '../components/Canvas';

const inter = Inter({
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={inter.className} lang="en">
    <body
      className={clsx(
        'font-inter text-primary-light bg-white dark:bg-[#0b0b10] dark:text-primary-dark',
        'scrollbar scrollbar-thumb-teal-500 scrollbar-thumb-rounded-md scrollbar-thin',
        'hover:scrollbar-thumb-teal-600 active:scrollbar-thumb-teal-700 transition duration-100'
      )}
    >
      <Providers>
        <div className="min-h-screen flex flex-col">
          <Header />
          <ParticleCanvas />
          <Wrapper className="flex-grow overflow-hidden ">
            <main className="pt-16">{children}</main>
          </Wrapper>
          <Footer />
        </div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
