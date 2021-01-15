import { useState, useEffect } from 'react';

const useHistory = (initialHistory = []) => {
  const key = 'history';
  const [storedHistory, setStoredHistory] = useState(() => (
    JSON.parse(localStorage.getItem(key)) || initialHistory
  ));

  const setHistory = (history) => {
    if (storedHistory.length >= 5) {
      const filteredHistory = [...storedHistory, history].slice(-5).reverse();
      // console.log('pre reverse', filteredHistory);
      // console.log('post reverse', filteredHistory.reverse());

      setStoredHistory(filteredHistory);
    } else {
      setStoredHistory([...storedHistory, history]);
    }
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedHistory));
  }, [storedHistory]);

  return [storedHistory, setHistory];
};

export default useHistory;