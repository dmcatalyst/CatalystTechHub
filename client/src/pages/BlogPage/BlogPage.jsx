import { useEffect, useState, useRef } from 'react';
import styles from './BlogPage.module.css';
import { courses } from '../../data/siteData';
import { blogs } from '../../data/blogs';
import { Link } from 'react-router-dom';

export default function BlogPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const itemRefs = useRef({});

  const filteredBlogs = selectedCourse
    ? blogs.filter(
        blog => blog.courseSlug === selectedCourse.slug
      )
    : blogs;

  return (
    <div className={styles.page}>

      <section className={styles.hero} aria-labelledby="blog-hero-title">
        <div className="container">
          <h1 id="blog-hero-title" className={styles.heroTitle}>
            Best Tech career courses in calicut
          </h1>

          <p className={styles.heroDesc}>
            Stay updated with the latest trends, tutorials, and career advice from industry experts at Catalyst Tech Hub.
          </p>
        </div>
      </section>

      <div className="container">
        <section className={styles.layout} aria-label="Blog posts">
  <aside className={styles.sidebar}>
    <button
      ref={(el) => (itemRefs.current["all"] = el)}
      className={`${styles.courseItem}
      ${selectedCourse === null ? styles.active : ''}`}

      onClick={() => {
        setSelectedCourse(null);

        itemRefs.current["all"]?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }}
    >
      All Blogs
    </button>

    {courses.map((course) => (
      <button
        key={course.id}

        ref={(el) => (itemRefs.current[course.id] = el)}

        className={`${styles.courseItem}
        ${selectedCourse?.id === course.id ? styles.active : ''}`}

        onClick={() => {
          setSelectedCourse(course);

          itemRefs.current[course.id]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
          });
        }}
      >
        {course.title}
      </button>
    ))}

  </aside>

          {/* RIGHT BLOG GRID */}
          <div className={styles.blogGrid}>
            {filteredBlogs.map(blog => (
              <article key={blog.id} className={styles.blogCard}>

                <img
                  src={blog.image}
                  alt={blog.title}
                  className={styles.blogImage}
                  loading="lazy"
                />

                <div className={styles.blogContent}>
                  <p className={styles.blogDate}>{blog.date} <span className={styles.read}>{blog.read}</span></p>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogDescription}>
            {blog.description}
          </p>
          <a
            className={styles.link}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', `/blogs/${blog.id}`);
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}>
            Read More
          </a>
                </div>

              </article>
            ))}
          </div>

        </section>
      </div>

    </div>
  );
}