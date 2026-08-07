"use client";

import { useState } from "react";

// EDITABLE CONTENT — update text, prices and links here.
const content = {
  phone: "+1 301 383 5022",
  phoneLink: "tel:+13013835022",
  email: "myp.skinandbody@gmail.com",
  address: "3454 Ellicott Center Dr, Suite 104",
  bookingLink: "#contact",
  services: [
    { number: "01", title: "Signature Facial", meta: "90 min · $285", text: "A deeply restorative, personalized facial designed around what your skin needs today.", image: "ADD SERVICE IMAGE 01" },
    { number: "02", title: "Vacuum Therapy", meta: "8 sessions · $899", text: "A body-focused treatment plan created to smooth, sculpt and support your wellness goals.", image: "ADD SERVICE IMAGE 02" },
    { number: "03", title: "Body Rituals", meta: "From $500", text: "Intentional care and advanced techniques for a lighter, more confident feeling.", image: "ADD SERVICE IMAGE 03" },
  ],
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="MYP Skin and Body home"><span>MYP</span><small>SKIN &amp; BODY</small></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>MENU</button>
        <nav className={menuOpen ? "nav open" : "nav"} onClick={() => setMenuOpen(false)}>
          <a href="#treatments">Treatments</a><a href="#about">Our story</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
        <a className="book-nav" href={content.bookingLink}>Book a visit <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Bespoke skin &amp; body care · Maryland</p>
          <h1>Care that feels<br/><em>entirely yours.</em></h1>
          <p className="hero-text">Thoughtful facial and body treatments that meet you where you are—and leave you glowing from within.</p>
          <div className="hero-actions"><a className="button dark" href={content.bookingLink}>Book your ritual <Arrow /></a><a className="text-link" href="#treatments">Explore treatments ↓</a></div>
          <div className="trust"><span>20+</span><p>Years of hands-on<br/>skincare expertise</p></div>
        </div>
        <div className="hero-visual image-placeholder"><span>ADD HERO IMAGE<br/><small>Recommended: 1600 × 1900 px</small></span></div>
        <div className="hero-note"><i>✦</i><p>Tailored to every<br/>skin tone &amp; type</p></div>
      </section>

      <section className="intro" id="treatments">
        <p className="section-label">01 · SIGNATURE CARE</p>
        <div><h2>Your skin has a story.<br/><em>We listen first.</em></h2><p>Every treatment begins with you—your goals, your skin, your moment. We pair over two decades of experience with an intuitive, personal approach.</p></div>
      </section>

      <section className="services">
        {content.services.map((service) => (
          <article className="service" key={service.title}>
            <div className="service-image image-placeholder"><span>{service.image}</span><b>{service.number}</b></div>
            <div className="service-head"><h3>{service.title}</h3><span>{service.meta}</span></div>
            <p>{service.text}</p><a href={content.bookingLink}>Discover the treatment <Arrow /></a>
          </article>
        ))}
      </section>

      <section className="marquee" aria-label="Our approach"><div>RESTORE <i>✦</i> RENEW <i>✦</i> RECONNECT <i>✦</i> RESTORE <i>✦</i> RENEW</div></section>

      <section className="about" id="about">
        <div className="about-image image-placeholder"><span>ADD LILIBETH PORTRAIT<br/><small>Recommended: 1200 × 1500 px</small></span><div className="seal">20 YEARS<br/>OF CARE</div></div>
        <div className="about-copy"><p className="section-label">02 · MEET YOUR ESTHETICIAN</p><h2>Expert hands.<br/><em>A generous heart.</em></h2><p className="lead">I’m Lilibeth Diaz, founder of MYP Skin &amp; Body.</p><p>For more than 20 years, I’ve cared for skin across Venezuela, Chile and the United States—including work with Miss Venezuela. My philosophy is simple: advanced care should always feel personal, unhurried and deeply restorative.</p><p>Here, your treatment is never one-size-fits-all. It’s a ritual designed for you.</p><a className="text-link" href="#contact">Let’s meet <Arrow /></a></div>
      </section>

      <section className="experience" id="experience">
        <p className="section-label light">03 · THE MYP EXPERIENCE</p><h2>More than a treatment.<br/><em>A return to yourself.</em></h2>
        <div className="steps"><article><b>01</b><h3>We listen</h3><p>We begin with a thoughtful consultation about your skin, body and goals.</p></article><article><b>02</b><h3>We personalize</h3><p>Every detail of your ritual is selected for your unique needs.</p></article><article><b>03</b><h3>You exhale</h3><p>Settle in, switch off and let experienced hands take care of the rest.</p></article></div>
      </section>

      <section className="offer"><div><p className="section-label">LIMITED RITUAL</p><h2>A moment for<br/><em>mothers-to-be.</em></h2><p>Our gentle pregnancy spa ritual makes space for rest, comfort and care.</p><div className="price"><span>$300</span><b>$250</b></div><a className="button dark" href={content.bookingLink}>Reserve this ritual <Arrow /></a></div><div className="offer-image image-placeholder"><span>ADD PROMOTION IMAGE<br/><small>Recommended: 1400 × 1200 px</small></span></div></section>

      <section className="contact" id="contact">
        <div className="contact-info"><p className="section-label light">04 · COME AS YOU ARE</p><h2>Ready for your<br/><em>best skin yet?</em></h2><p>Tell us what you’re looking for. We’ll help you choose the right place to begin.</p><div className="details"><a href={content.phoneLink}>{content.phone}</a><a href={`mailto:${content.email}`}>{content.email}</a><span>{content.address}<br/>Ellicott City, Maryland</span><span>Mon–Fri 10:00–6:00<br/>Saturday 9:00–2:00</span></div></div>
        <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}}><label>YOUR NAME<input required name="name" placeholder="How should we call you?"/></label><label>EMAIL ADDRESS<input required type="email" name="email" placeholder="you@email.com"/></label><label>WHAT ARE YOU INTERESTED IN?<select name="interest" defaultValue=""><option value="" disabled>Select a treatment</option><option>Signature Facial</option><option>Vacuum Therapy</option><option>Body Rituals</option><option>Pregnancy Spa Ritual</option><option>I’m not sure yet</option></select></label><label>MESSAGE<textarea name="message" placeholder="Tell us a little about your goals..."/></label><button className="button cream" type="submit">Send my request <Arrow /></button>{submitted && <p className="success" role="status">Thank you! Your request is ready to be connected to your preferred inbox.</p>}</form>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span>MYP</span><small>SKIN &amp; BODY</small></a><p>PERSONALIZED SKIN &amp; BODY CARE<br/>ELLICOTT CITY, MARYLAND</p><div><a href="https://www.instagram.com/myp.skinbody/" target="_blank" rel="noreferrer">Instagram ↗</a><a href={content.phoneLink}>Call us ↗</a></div><small>© 2026 MYP SKIN &amp; BODY</small></footer>
    </main>
  );
}
