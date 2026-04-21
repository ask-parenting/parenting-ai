import { faqs } from "@/lib/content";

export default function FaqSection() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <h2 id="faq-title">Frequently asked questions</h2>

      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
