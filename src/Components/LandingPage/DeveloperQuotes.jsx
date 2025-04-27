import React from "react";
import styles from "./components.module.css";

const QuoteCard = ({ imageUrl, quote }) => (
  <article className={styles.quoteCard}>
    <img src={imageUrl} alt="Developer" className={styles.developerImage} />
    <p className={styles.quoteText}>{quote}</p>
  </article>
);

const DeveloperQuotes = () => {
  const quotes = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9232253bb6ac8f35536c1887ffa89f2aae7802a?placeholderIfAbsent=true",
      quote: '"Yes, the chicken is the final boss. Why wouldn\'t it be?"',
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c23710a348809930725939b3ca2f48a34ca33ce9?placeholderIfAbsent=true",
      quote: '"We\'re not behind schedule. The schedule is just… dynamic."',
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7364b8aefb12483ed9d2b79538cf72d77f3513e6?placeholderIfAbsent=true",
      quote: "\"Let's pretend the player won't try that.\"",
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9232253bb6ac8f35536c1887ffa89f2aae7802a?placeholderIfAbsent=true",
      quote: '"Our game engine is held together by hope and duct tape."',
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c23710a348809930725939b3ca2f48a34ca33ce9?placeholderIfAbsent=true",
      quote: '"Player fell through the world again? That\'s the true ending."',
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7364b8aefb12483ed9d2b79538cf72d77f3513e6?placeholderIfAbsent=true",
      quote: '"I programmed it to be dumb, not this dumb."',
    },
  ];

  return (
    <section className={styles.quotesSection}>
      <h2 className={styles.sectionTitle}>Game Developers</h2>
      <div className={styles.quotesGrid}>
        {quotes.map((quote, index) => (
          <QuoteCard key={index} {...quote} />
        ))}
      </div>
    </section>
  );
};

export default DeveloperQuotes;
