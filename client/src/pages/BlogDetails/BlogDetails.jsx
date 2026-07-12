import React, { useState, useEffect } from 'react';
import styles from './BlogDetails.module.css';
import { blogs } from '../../data/blogs';
import { Turnstile } from '@marsidev/react-turnstile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const BlogDetails = ({ navigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);

  const [activeSection, setActiveSection] = useState(0);

  const path = window.location.pathname;
  const id = path.split('/blogs/')[1];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.id.replace('section-', ''), 10);
            setActiveSection(index);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [id]);

  const blog = blogs.find(
    item => item.id.toString() === id
  );

  if (!blog) return <NotFoundPage navigate={navigate} />;

  const { content } = blog;

  const handleEnroll = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      alert("Please enter your phone number to enroll.");
      return;
    }
    
    // Simple basic phone format check
    const cleanPhone = phone.trim();
    if (cleanPhone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!turnstileToken) {
      alert("Please complete the captcha.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: name.trim() + " (Blog Lead)",
      phone: cleanPhone,
      email: "N/A",
      course: blog.title,
      center: "N/A",
      pageUrl: window.location.href,
      turnstileToken: turnstileToken
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error('Server error or form API is down');
      }

      setIsSuccess(true);
      setPhone('');
      setTurnstileToken(null);
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);
    } catch (error) {
      console.error(error);
      const mailtoLink = `mailto:hello@catalysthub.in?subject=Blog Lead&body=${encodeURIComponent(
        `Phone: ${payload.phone}\nCourse: ${payload.course}`
      )}`;
      
      if (window.confirm("Our form server is currently experiencing issues. Would you like to send your details via your email app instead?")) {
        window.location.href = mailtoLink;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <article className={styles.page}>

      <div className={`container ${styles.contentWrapper}`}>

        <header className={styles.blogHeader}>
          <h1 className={styles.title}>
            {content.heroTitle}
          </h1>

          <div className={styles.metaSection}>
            <div className={styles.authorText}>by {blog.author || "Benaseer"}</div>
          </div>
        </header>

        {/* LEFT CONTENT */}

        <div className={styles.left}>

          <div className={styles.metaBottom}>
            <div className={styles.metaLeft}>
              <span>Updated on {blog.date || "May 20, 2026"}</span>
              <span className={styles.pipe}>|</span>
              <span>{blog.read || "4 min read"}</span>
            </div>
            <div className={styles.metaRight}>
              <span className={styles.shareText}>Share:</span>
              <button 
                className={styles.shareBtn} 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: blog.title || content.heroTitle,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                title="Copy Link"
                aria-label="Copy link to this blog"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </button>
            </div>
          </div>

          <img
            src={content.heroImage}
            alt={content.heroTitle}
            className={styles.heroImage}
          />

          <div className={`${styles.card} ${styles.mobileToc}`}>
            <h3 className={styles.cardTitle}>
              Table of Content
            </h3>
            <nav aria-label="Table of Contents">
              <ol>
              {content.tableOfContents.map((item,index)=>(
                <li key={index}>
                  <a 
                    href={`#section-${index}`} 
                    className={`${styles.tocLink} ${activeSection === index ? styles.tocLinkActive : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(`section-${index}`);
                      if (element) {
                        const y = element.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
              </ol>
            </nav>
          </div>

          {content.sections.map((section,index)=>(

            <section
              key={index}
              className={styles.section}
              id={`section-${index}`}
              aria-labelledby={`section-heading-${index}`}
            >

              <h2 id={`section-heading-${index}`} className={styles.heading}>
                {section.heading}
              </h2>

              <p className={styles.text}>
                {section.text.trim()}
              </p>

            </section>

          ))}

        </div>

        {/* RIGHT SIDEBAR */}

        <aside className={styles.sidebar} aria-label="Blog sidebar">

          <div className={`${styles.card} ${styles.desktopToc}`}>

            <h3 className={styles.cardTitle}>
              Table of Content
            </h3>

            <nav aria-label="Table of Contents">
              <ol>

              {content.tableOfContents.map((item,index)=>(

                <li key={index}>
                  <a 
                    href={`#section-${index}`} 
                    className={`${styles.tocLink} ${activeSection === index ? styles.tocLinkActive : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(`section-${index}`);
                      if (element) {
                        const y = element.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                  </a>
                </li>

              ))}

              </ol>
            </nav>

          </div>

          <div className={styles.card}>

            {isSuccess ? (
              <div className={styles.successBlock}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 0.75rem', display: 'block' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 className={styles.successTitle}>Successfully Enrolled!</h3>
                <p className={styles.successText}>We have received your number. Our team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <h3 className={styles.cardTitle}>
                  {content.cta.title}
                </h3>

                <p className={styles.ctaText}>
                  {content.cta.description}
                </p>

                <form onSubmit={handleEnroll}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                    aria-label="Full Name"
                    autoComplete="name"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                    aria-label="Phone Number"
                    autoComplete="tel"
                    required
                  />

                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <Turnstile 
                      siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} 
                      onSuccess={(token) => setTurnstileToken(token)} 
                      onError={(err) => console.error("Turnstile Error:", err)}
                    />
                  </div>

                  <button type="submit" className={styles.button} disabled={isSubmitting}>
                    {isSubmitting ? 'Enrolling...' : content.cta.buttonText}
                  </button>
                </form>
              </>
            )}

          </div>

        </aside>

      </div>

    </article>
  );
};

export default BlogDetails;