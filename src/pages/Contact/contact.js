import "./contact.css"

export const Contact = () => {
  return (
    <div className="contact-container">

      <h1>Contact Me</h1>
      <p className="contact-subtitle">
        Feel free to reach out for collaboration or questions.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
        <span>call number : 0917-803-6862</span>
    </div>
  )
}