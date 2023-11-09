import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '183bb5d67fmshd1f40954870003bp14e7e5jsna31990507643',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      console.log(response.data);

      setData(response.data.data);
      setLoading(false);
    } catch (error) {
        setError(error)
        alert('There is an error')
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  }

  return { data, loading, error, refetch };
};

export default useFetch;