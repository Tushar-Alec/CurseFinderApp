import React, { useState, useEffect } from 'react';

function QuoteDisplay() {
  const [quote, setQuote] = useState({ text: 'Loading an inspiring quote...', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setLoading(true);
    setRefreshKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    const API_URL = 'https://api.kanye.rest/?t=' + Date.now();

    const fetchQuote = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setQuote({ text: data.quote, author: 'Kanye West' });
        setError(null);
      } catch (e) {
        console.error('Failed to fetch quote:', e);
        setError('Could not load quote. Switching to local quote.');
        setQuote({
          text: 'This is a quote. Stay motivated!',
          author: 'Tushar',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [refreshKey]);


  return (
    <div className="quote-box">
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">— {quote.author}</p>
      <button className="quote-refresh-btn" onClick={handleRefresh}>
        Get New Kanye Quote
      </button>
    </div>
  );
}

export default QuoteDisplay;
