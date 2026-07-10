import React, { useState, useEffect } from "react";

function Personality() {
  const [activeFact, setActiveFact] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const facts = [
    {
      icon: "💻",
      title: "Software Fun Facts",
      quotes: [
        "The first computer bug was an actual moth found in a Harvard Mark II computer in 1947.",
        "Programmers prefer dark mode because light attracts bugs.",
        "Java was originally going to be called 'Oak', but the name was already trademarked.",
        "Code is read much more often than it is written, so write it well!",
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
        "It’s not a bug. It’s an undocumented feature.",
        "First, solve the problem. Then, write the code.",
        "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "I'm not a great programmer; I'm just a good programmer with great habits."
      ]
    },
    {
      icon: "⚽",
      title: "Real Madrid Supporter",
      quotes: [
        "Tactical mindset inspired by Real Madrid. Always playing for the win. Hala Madrid!",
        "93:48 — Never give up until the final whistle.",
        "The Real Madrid shirt is white. It can stain of mud, sweat, and even blood, but never of shame.",
        "Winning is not an option, it's an obligation.",
        "We are Real Madrid, and we are capable of everything.",
        "At Real Madrid, you learn to win, but you also learn to fight until the end.",
        "This is the Bernabéu; 90 minutes here is a very long time.",
        "Nobody can match the history and the aura of Real Madrid.",
        "Talent wins games, but teamwork and intelligence win championships.",
        "A true champion plays every match like it's a final."
      ]
    },
    {
      icon: "👒",
      title: "Straw Hat Pirate",
      quotes: [
        "On a quest for the ultimate code. Inspired by the Straw Hat crew.",
        "Inherited will, the destiny of the age, and the dreams of the people.",
        "If you don't take risks, you can't create a future. — Monkey D. Luffy",
        "No matter how hard or impossible it is, never lose sight of your goal.",
        "There comes a time when a man has to stand and fight! That time is when his friends' dreams are being laughed at!",
        "Only those who have suffered long can see the light within the shadows. — Roronoa Zoro",
        "You can't bring back what you've lost, think about what you have now! — Jinbe",
        "A man's dream will never die! — Marshall D. Teach",
        "Fools who don't respect the past are likely to repeat it.",
        "I want to live! Take me out to sea with you! — Nico Robin"
      ]
    }
  ];

  // Rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade out
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % facts[activeFact].quotes.length);
        setFade(true); // trigger fade in
      }, 300); // Wait for fade out before changing text
    }, 5000);

    return () => clearInterval(interval);
  }, [activeFact, facts]);

  // Reset quote index when category changes
  const handleCategoryChange = (index) => {
    setActiveFact(index);
    setQuoteIndex(0);
    setFade(true);
  };

  return (
    <div className="bento-cell span-8 d-flex flex-column justify-content-center" data-aos="fade-up">
      <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", textTransform: "uppercase" }}>Beyond the Code</h3>

      <div className="d-flex align-items-center gap-4">
        <div className="d-flex flex-column gap-3">
          {facts.map((fact, index) => (
            <button 
              key={index}
              className="btn rounded-circle"
              onClick={() => handleCategoryChange(index)}
              style={{
                width: '60px', height: '60px', fontSize: '1.5rem',
                background: activeFact === index ? 'var(--card-text)' : 'var(--btn-bg)',
                color: activeFact === index ? 'var(--card-bg)' : 'var(--card-text)',
                border: `1px solid var(--card-border)`,
                transition: 'all 0.3s ease'
              }}
            >
              {fact.icon}
            </button>
          ))}
        </div>

        <div style={{ flexGrow: 1, background: "var(--btn-bg)", padding: "24px", borderRadius: "12px", border: "1px solid var(--card-border)" }}>
          <h4 style={{ color: "var(--card-text)", fontSize: "1.2rem", fontWeight: "800", marginBottom: "12px", textTransform: "uppercase" }}>
            {facts[activeFact].title}
          </h4>
          <p style={{ 
            margin: 0, 
            fontWeight: "500", 
            color: "var(--card-subtext)",
            minHeight: "60px",
            opacity: fade ? 1 : 0,
            transition: "opacity 0.3s ease"
          }}>
            "{facts[activeFact].quotes[quoteIndex]}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Personality;
