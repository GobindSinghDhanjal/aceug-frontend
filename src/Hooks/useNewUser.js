import { useState, useEffect } from 'react';
import axios from 'axios';

export function useNewUser(url, options = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url+"student/profile", {
          headers: {
            Authorization: options.authorization
          }
        });
        setResponse(res.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, options]);

  return { response, error, isLoading };
}