import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Loader from "../loader";

const InfiniteScroll = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const lastItemRef = useRef<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => {
        setData((prevData) => [...prevData, ...response.data.results]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // IntersectionObserver callback
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      fetchData();
      console.log(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "100px",
      threshold: 1,
    });

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }

    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
      }
    };
  }, [data]);

  return (
    <div>
      <div
        style={{
          backgroundColor: "yellowgreen",
          height: "160px",
          overflow: "scroll",
        }}
      >
        <ul>
          {data.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
          <li ref={lastItemRef}></li>
        </ul>
      </div>

      {loading && <Loader />}
    </div>
  );
};

export default InfiniteScroll;
