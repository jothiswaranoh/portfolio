import React, { useEffect, useRef } from "react";

const posts = [
  {
    id: 1,
    title: "Software Development at Hash Agile",
    content:
      "Excited to share my journey as a Software Developer at Hash Agile Technologies! Building scalable solutions, integrating modern frameworks, and ensuring top-notch application security through rigorous VAPT. #InnovateElevateInspire",
    image: "/images/post1.jpg",
    link: "https://www.linkedin.com/in/jothiswaranoh/",
  },
  {
    id: 2,
    title: "VAPT & Ethical Hacking",
    content:
      "Security is not just an afterthought; it's a prerequisite. Proud to leverage my skills as an Ethical Hacker and VAPT Specialist to proactively secure full-stack applications against emerging threats.",
    image: "/images/post2.jpg",
    link: "https://www.linkedin.com/in/jothiswaranoh/",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Senior Developer",
    comment:
      "Well deserved recognition! Your contribution to application security and rigorous VAPT truly stand out.",
    likes: 14,
  },
  {
    id: 2,
    name: "Dr. Priya Raman",
    role: "Academic Coordinator",
    comment:
      "Your journey from Rathinam Technical Campus to a VAPT Specialist is truly inspiring for all our students.",
    likes: 9,
  },
];

const LinkedInFeed = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="linkedin-section"
      id="linkedin-feed"
    >
      <div className="linkedin-container">

        {/* Background glow effects */}
        <div className="glow-sphere sphere-1"></div>
        <div className="glow-sphere sphere-2"></div>

        {/* PROFILE HEADER */}
        <div className="profile-header">
          <div className="profile-image-container">
            <div className="ring-animation"></div>
            <img
              src="/images/jothis.jpg"
              alt="Jothiswaran R"
              className="profile-image"
            />
          </div>

          <h2 className="profile-name">
            Jothiswaran (jothis) R
          </h2>

          <p className="profile-headline">
            Software Developer @ Hash Agile | VAPT Specialist | Ethical Hacker
          </p>
          <div className="profile-badges">
            <span className="badge">#InnovateElevateInspire</span>
            <span className="badge">React & Rails</span>
            <span className="badge">Cybersecurity</span>
          </div>
        </div>

        {/* POSTS GRID */}
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="glass-card post-card">
              <div className="post-image-wrapper">
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-overlay">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-btn"
                  >
                    View on LinkedIn <span className="arrow">↗</span>
                  </a>
                </div>
              </div>

              <div className="post-content">
                <h4 className="post-title">{post.title}</h4>
                <p className="post-text">{post.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* COMMENTS SECTION */}
        <div className="comments-section">
          <h3 className="comments-title">
            <span className="text-gradient">Community Feedback</span>
          </h3>

          <div className="comments-list">
            {testimonials.map((item) => (
              <div key={item.id} className="glass-card comment-card">
                <div className="comment-header">
                  <div className="comment-avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div className="comment-meta">
                    <h4>{item.name}</h4>
                    <span className="role">{item.role}</span>
                  </div>
                </div>
                <p className="comment-text">"{item.comment}"</p>
                <div className="comment-actions">
                  <button className="like-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span>{item.likes}</span>
                  </button>
                  <button className="reply-btn">Reply</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>
        {`
.linkedin-section {
  position: relative;
  padding: 120px 20px;
  background: radial-gradient(circle at top, #0a0a0d 0%, #000000 100%);
  color: #ffffff;
  overflow: hidden;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1);
}

.linkedin-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
  z-index: 1;
}

.linkedin-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.linkedin-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* GORGEOUS GLOW EFFECTS */
.glow-sphere {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
  opacity: 0.5;
  animation: pulseGlow 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
}

.sphere-1 {
  top: -10%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: rgba(0, 119, 181, 0.25); /* LinkedIn Blue */
}

.sphere-2 {
  bottom: 10%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: rgba(138, 43, 226, 0.2); /* Deep Purple */
  animation-delay: -5s;
}

@keyframes pulseGlow {
  0% { transform: scale(1) translate(0, 0); opacity: 0.3; }
  100% { transform: scale(1.1) translate(30px, -30px); opacity: 0.6; }
}

/* PROFILE HEADER */
.profile-header {
  text-align: center;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image-container {
  position: relative;
  width: 180px;
  height: 180px;
  margin-bottom: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0));
  box-shadow: 0 0 50px rgba(0, 119, 181, 0.2), inset 0 0 20px rgba(0,0,0,0.5);
}

.ring-animation {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #0077b5, #8a2be2, #0077b5);
  animation: spin 6s linear infinite;
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff 0);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff 0);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #050505;
  box-shadow: 0 10px 30px rgba(0,0,0,0.8);
  transition: transform 0.5s ease;
}

.profile-image-container:hover .profile-image {
  transform: scale(1.02);
}

.profile-name {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 16px;
  background: linear-gradient(to right, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(255,255,255,0.1);
}

.profile-headline {
  font-size: 1.25rem;
  color: #a0a0a0;
  max-width: 650px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.profile-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.badge {
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #e0e0e0;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.badge:hover {
  background: rgba(0, 119, 181, 0.15);
  border-color: rgba(0, 119, 181, 0.4);
  transform: translateY(-3px) scale(1.02);
  color: #fff;
  box-shadow: 0 6px 15px rgba(0, 119, 181, 0.3);
}

/* GLASSMORPHISM CARDS */
.glass-card {
  background: linear-gradient(145deg, rgba(30, 30, 35, 0.8), rgba(15, 15, 15, 0.9));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
  z-index: 1;
  pointer-events: none;
}

.glass-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 119, 181, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

/* POSTS */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 40px;
  margin-bottom: 120px;
}

.post-card {
  display: flex;
  flex-direction: column;
}

.post-image-wrapper {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 28px 28px 0 0;
  z-index: 2;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.post-card:hover .post-image {
  transform: scale(1.08);
}

.post-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.post-card:hover .post-overlay {
  opacity: 1;
}

.read-btn {
  padding: 14px 28px;
  background: linear-gradient(135deg, #0077b5, #005582);
  color: white;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 10px;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.post-card:hover .read-btn {
  transform: translateY(0);
}

.read-btn:hover {
  background: linear-gradient(135deg, #0088cc, #0077b5);
  box-shadow: 0 8px 25px rgba(0, 119, 181, 0.5);
  transform: scale(1.05);
}

.arrow {
  transition: transform 0.3s ease;
}

.read-btn:hover .arrow {
  transform: translate(4px, -4px);
}

.post-content {
  padding: 32px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.post-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.post-card:hover .post-title {
  color: #0077b5;
}

.post-text {
  font-size: 1rem;
  color: #a8a8a8;
  line-height: 1.7;
  flex-grow: 1;
}

/* COMMENTS */
.comments-section {
  max-width: 900px;
  margin: 0 auto;
}

.comments-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 60px;
  letter-spacing: -1px;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff, #8a2be2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 30px rgba(138, 43, 226, 0.3);
}

.comments-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.comment-card {
  padding: 28px;
  border-radius: 20px;
  z-index: 2;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.comment-avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2a2a2a, #4a4a4a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.comment-meta h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 4px 0;
  color: #fff;
}

.comment-meta .role {
  font-size: 0.85rem;
  color: #888;
  font-weight: 500;
}

.comment-text {
  font-size: 1rem;
  color: #c4c4c4;
  line-height: 1.7;
  margin-bottom: 24px;
  font-style: italic;
  position: relative;
}

.comment-text::before {
  content: '"';
  font-size: 2rem;
  color: rgba(255,255,255,0.1);
  position: absolute;
  top: -10px;
  left: -10px;
}

.comment-actions {
  display: flex;
  gap: 20px;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 16px;
}

.like-btn, .reply-btn {
  background: none;
  border: none;
  color: #999;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  padding: 4px 8px;
  border-radius: 6px;
}

.like-btn:hover {
  color: #ff4757;
  background: rgba(255, 71, 87, 0.1);
}

.reply-btn:hover {
  color: #0077b5;
  background: rgba(0, 119, 181, 0.1);
}

@media (max-width: 768px) {
  .profile-name { font-size: 2.2rem; }
  .profile-headline { font-size: 1.1rem; }
  .posts-grid { grid-template-columns: 1fr; }
  .comments-list { grid-template-columns: 1fr; }
  .linkedin-section { padding: 80px 15px; }
}
`}
      </style>
    </section>
  );
};

export default LinkedInFeed;