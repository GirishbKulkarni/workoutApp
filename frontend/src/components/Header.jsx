import React from 'react';

const quotes = [
  "Train Hard Today",
  "Discipline Beats Motivation",
  "One Day or Day One?",
  "Push Yourself, Because No One Else Is Going To Do It For You",
  "Sore Today, Strong Tomorrow"
];

const Header = ({ userName }) => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  
  // Pick a random quote based on the current day to keep it consistent for the day
  const quoteIndex = new Date().getDay() % quotes.length;
  const dailyQuote = quotes[quoteIndex];

  return (
    <header style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1rem'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Good morning, <span style={{ color: 'var(--accent-primary)' }}>{userName}</span>
      </h1>
      <div style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
        {today}
      </div>
      <div style={{ 
        fontStyle: 'italic', 
        color: 'var(--accent-secondary)',
        marginTop: '0.5rem',
        padding: '0.75rem',
        backgroundColor: 'var(--glass-bg)',
        borderLeft: '4px solid var(--accent-secondary)',
        borderRadius: '0 var(--radius-md) var(--radius-md) 0'
      }}>
        "{dailyQuote}"
      </div>
    </header>
  );
};

export default Header;
