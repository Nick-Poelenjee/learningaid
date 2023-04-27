import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const courses = [
  {
    id: 1,
    title: 'Introduction to Programming',
    category: 'Computer Science',
    level: 'Beginner',
    price: 0,
    thumbnail: '/programming-thumbnail.jpg',
    description: 'Learn the fundamentals of programming and gain the skills you need to build your own applications.'
  },
  {
    id: 2,
    title: 'Data Analysis with Python',
    category: 'Data Science',
    level: 'Intermediate',
    price: 25,
    thumbnail: '/data-analysis-thumbnail.jpg',
    description: 'Use Python to analyze and visualize data, and gain insights that can inform business decisions.'
  },
  {
    id: 3,
    title: 'Web Development with React',
    category: 'Web Development',
    level: 'Advanced',
    price: 50,
    thumbnail: '/react-thumbnail.jpg',
    description: 'Build dynamic and responsive web applications using the React library and modern web technologies.'
  },
  // ... more courses
];

export default function CourseCatalog() {
  const [filter, setFilter] = useState('');

  const filteredCourses = courses.filter(course => {
    const searchFields = [course.title, course.category, course.level];
    const searchQuery = filter.toLowerCase();
    return searchFields.some(field => field.toLowerCase().includes(searchQuery));
  });

  return (
    <div className="container">
      <Head>
        <title>LearnAid - Course Catalog</title>
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
        <section className="course-catalog">
          <h1 className="course-catalog__title">Course Catalog</h1>
          <div className="course-catalog__filters">
            <input
              type="text"
              placeholder="Search courses by keyword, category, or level"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="">Filter by category</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Data Science">Data Science</option>
              <option value="Web Development">Web Development</option>
              {/* ... add more options for other categories */}
              </select>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="">Filter by level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              {/* ... add more options for other levels */}
            </select>
          </div>
          <div className="course-catalog__courses">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <div className="course-catalog__course">
                    <div className="course-catalog__thumbnail">
                      <Image src={course.thumbnail} alt={course.title} width={300} height={200} />
                    </div>
                    <div className="course-catalog__details">
                      <h2 className="course-catalog__course-title">{course.title}</h2>
                      <p className="course-catalog__course-description">{course.description}</p>
                      <div className="course-catalog__course-meta">
                        <span>{course.category}</span>
                        <span>{course.level}</span>
                        <span>{course.price === 0 ? 'Free' : `$${course.price}`}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No courses found.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__text">&copy; LearnAid, All rights reserved.</p>
      </footer>
    </div>
  );
}
