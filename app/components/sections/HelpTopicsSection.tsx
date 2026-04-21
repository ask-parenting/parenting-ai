import { helpTopics } from "@/lib/content";

export default function HelpTopicsSection() {
  return (
    <section
      className="section trust-section"
      aria-labelledby="helps-title"
    >
      <h2 id="helps-title">
        ✨ Everything you worry about as a parent—handled gently
      </h2>

      <div className="trust-grid">
        {helpTopics.map((item) => (
          <div key={item.title} className="trust-item">
            <div className="trust-icon">{item.icon}</div>
            <div className="trust-item-body">
              <h3>{item.title}</h3>
              <p>{item.question}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
