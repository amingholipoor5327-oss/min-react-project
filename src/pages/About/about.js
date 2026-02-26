import "./about.css"

export const About = () => {
  return (
    <div className="about-container">

      <section className="about-hero">
        <h1>About This Project</h1>
        <p>
          This is a simple React project built to practice API calls,
          React Query, and modern UI styling.
        </p>
      </section>

      <section className="about-section">
        <h2>📌 What is this?</h2>
        <p>
          A small app that fetches random cat facts using an external API.
          It demonstrates clean component structure and data fetching.
        </p>
      </section>

      <section className="about-section">
        <h2>🛠 Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Axios</li>
          <li>React Query</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🎯 Goal</h2>
        <p>
          The goal of this project is to improve frontend skills and understand
          better state management and API handling.
        </p>
      </section>

    </div>
  )
}