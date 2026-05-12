import { useState } from 'react';

const FAQS = [
  {
    q: '1. Is my investment / property secure?',
    a: (
      <p>
        Absolutely. We prioritize transparency and legal compliance. Every property comes with a comprehensive set of government-approved documentation
        and all necessary regulatory clearances, ensuring your investment is safe and legally sound.
      </p>
    ),
  },
  {
    q: '2. What is a "Greenfield City"?',
    a: (
      <p>
        A greenfield city is a meticulously master-planned urban development built from the ground up on previously undeveloped land. Unlike &quot;Brownfield&quot;
        projects (which involve redeveloping existing cities), Greenfield projects like Dholera offer superior infrastructure, optimized layouts, and modern
        technology integrated into the city&apos;s foundation.
      </p>
    ),
  },
  {
    q: '3. What is the ABCD Building?',
    a: (
      <p>
        The Administrative and Business Centre for Dholera (ABCD) serves as the &quot;brain&quot; of the city. It is a state-of-the-art command center that houses
        the administrative offices and the Central Control Center, monitoring and managing the city&apos;s smart infrastructure in real-time.
      </p>
    ),
  },
  {
    q: '4. Why should I consider investing in Dholera SIR?',
    a: (
      <>
        <p>Dholera represents India&apos;s most ambitious urban development project. Key reasons to invest include:</p>
        <ul>
          <li>
            <strong>Strategic Government Support:</strong> A flagship project under the DMIC corridor.
          </li>
          <li>
            <strong>Superior Infrastructure:</strong> Designed to meet global standards of living and business.
          </li>
          <li>
            <strong>High ROI Potential:</strong> Early-stage investment in a high-growth zone offers significant capital appreciation.
          </li>
          <li>
            <strong>Integrated Ecosystem:</strong> A balanced mix of industrial, residential, and commercial zones.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: '5. What are the primary growth drivers for the region?',
    a: (
      <>
        <p>Several mega-projects are accelerating Dholera&apos;s development:</p>
        <ul>
          <li>
            <strong>High-Tech Industry:</strong> The upcoming Tata Semiconductor Plant.
          </li>
          <li>
            <strong>Connectivity:</strong> Proximity to the Dedicated Freight Corridor (DFC).
          </li>
          <li>
            <strong>Economic Hubs:</strong> Rapidly emerging manufacturing and IT clusters.
          </li>
          <li>
            <strong>Political Will:</strong> Strong backing from both the Gujarat State and Central Governments.
          </li>
          <li>
            <strong>Global Interest:</strong> Rising FDIs and interest from international institutional investors.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: '6. What are the key benefits of investing now?',
    a: (
      <>
        <p>Investing at this stage offers a competitive edge through:</p>
        <ul>
          <li>
            <strong>Low Entry Barriers:</strong> Highly affordable pricing compared to established Tier-1 cities.
          </li>
          <li>
            <strong>Long-term Wealth Creation:</strong> Exceptional potential for capital appreciation as the city matures.
          </li>
          <li>
            <strong>Transparency:</strong> Development driven by professional governance and clear timelines.
          </li>
          <li>
            <strong>Future-Ready:</strong> Ideal for both high-yield commercial ventures and modern residential living.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: '7. What are the infrastructure highlights of Dholera?',
    a: (
      <>
        <p>Dholera is engineered for the future with world-class amenities:</p>
        <ul>
          <li>
            <strong>Mobility:</strong> A massive 6/8-lane Expressway connecting to Ahmedabad.
          </li>
          <li>
            <strong>Smart Utilities:</strong> 100% underground cabling and advanced waste management systems.
          </li>
          <li>
            <strong>Sustainability:</strong> Home to Asia&apos;s largest Solar Power Park.
          </li>
          <li>
            <strong>Digital Integration:</strong> A fully ICT-enabled (Information and Communication Technology) city.
          </li>
          <li>
            <strong>Cultural Landmark:</strong> Proximity to the world&apos;s largest Maritime Museum at Lothal.
          </li>
        </ul>
      </>
    ),
  },
];

export function FaqSection() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub">Everything you need to know before investing.</p>
        <div className="faq-list">
          {FAQS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={idx}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">{item.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
