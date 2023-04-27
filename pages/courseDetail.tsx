import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function CourseDetail() {
  return (
    <div className="container">
      <Head>
        <title>Course Name - LearnAid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><Link href="/">Home</Link></li>
            <li className="nav__item"><Link href="/courses">Courses</Link></li>
            <li className="nav__item"><Link href="/login">Login</Link></li>
            <li className="nav__item"><Link href="/creator-site">Switch to Creator Site</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="course-detail">
          <div className="course-detail__image">
            <Image src="/course-image.jpg" alt="Course Image" width={500} height={350} />
          </div>
          <div className="course-detail__content">
            <h1 className="course-detail__title">Course Name</h1>
            <h2 className="course-detail__subtitle">Instructor Name</h2>
            <p className="course-detail__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec justo orci. Pellentesque
              ullamcorper, metus sed efficitur mollis, massa felis elementum ex, vel faucibus enim turpis ac ipsum.
              Quisque euismod ligula sit amet turpis vestibulum, ac rhoncus eros semper. Maecenas eu magna vel
              mauris malesuada eleifend. In nec lacinia elit. Fusce non varius neque. Fusce congue est id risus
              rhoncus faucibus.
            </p>
            <div className="course-detail__info">
              <div className="course-detail__info-item">
                <h3 className="course-detail__info-title">Course Duration:</h3>
                <p className="course-detail__info-value">10 weeks</p>
              </div>
              <div className="course-detail__info-item">
                <h3 className="course-detail__info-title">Level:</h3>
                <p className="course-detail__info-value">Intermediate</p>
              </div>
            </div>
            <div className="course-detail__cta">
              <Link href="/enroll"><div className="button">Enroll Now</div></Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__text">&copy; LearnAid, All rights reserved.</p>
      </footer>
    </div>
  );
};
