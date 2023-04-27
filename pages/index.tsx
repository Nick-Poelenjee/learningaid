import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LearnAid - Your Online Learning Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <nav className="nav">
          <div className="nav__logo">
            <h2>LearnAid</h2>
          </div>
          <ul className="nav__list">
            <li className="nav__item"><Link href="/"><div className="nav__link">Home</div></Link></li>
            <li className="nav__item"><Link href="/courses"><div className="nav__link">Courses</div></Link></li>
            <li className="nav__item"><Link href="/login"><div className="nav__link">Login</div></Link></li>
            <li className="nav__item"><Link href="/creator-site"><div className="nav__link">Switch to Creator Site</div></Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="main">
          <div className="main-content">
            <h1 className="main__title">LearnAid</h1>
            <h2 className="main__subtitle">Empowering your learning journey</h2>
            <p className="main__description">Access a wide range of courses and enhance your skills with LearnAid. Whether you're looking to boost your career or pursue a personal passion, we have the courses and resources to help you achieve your goals.</p>
            <Link href="/courses"><div className="button">Get started</div></Link>
          </div>
          <div className="main-image">
            <Image src="/main-image.jpg" alt="Banner image" width={500} height={350} />
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <Image src="/feature-1.jpg" alt="Feature 1" width={300} height={200} />
            <h2 className="feature__title">Flexible learning</h2>
            <p className="feature__description">Learn at your own pace, on your own schedule, and from anywhere in the world.</p>
          </div>
          <div className="feature">
            <Image src="/feature-2.jpg" alt="Feature 2" width={300} height={200} />
            <h2 className="feature__title">Expert instructors</h2>
            <p className="feature__description">Our courses are taught by industry experts with years of experience.</p>
          </div>
          <div className="feature">
            <Image src="/feature-3.jpg" alt="Feature 3" width={300} height={200} />
            <h2 className="feature__title">Engaging content</h2>
            <p className="feature__description">Enjoy interactive learning experiences and engaging content that keeps you motivated and on track.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__text">&copy; LearnAid, All rights reserved.</p>
      </footer>
    </div>
  );
}
