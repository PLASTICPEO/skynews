import { useEffect, useRef, useState } from "react";
import otherNewsPhoto from "../../../../../assets/otherNews.png";

const data = [
  {
    time: "12",
    category: "პოლიტიკა",
    photo: otherNewsPhoto,
    text: "გენშტაბი: ბოლო ერთ დღეში უკრაინელებმა მტრის 70-ზე მეტი შეტევა მოიგერიეს ",
  },
  {
    time: "23",
    category: "მსოფლიო",
    photo: otherNewsPhoto,
    text: "გენშტაბი: ბოლო ერთ დღეში უკრაინელებმა მტრის 70-ზე მეტი შეტევა მოიგერიეს ",
  },
  {
    time: "12",
    category: "პოლიტიკა",
    photo: otherNewsPhoto,
    text: "გენშტაბი: ბოლო ერთ დღეში უკრაინელებმა მტრის 70-ზე მეტი შეტევა მოიგერიეს ",
  },
];

export const useOtherNews = () => {
  const [newData, setNewData] = useState<any[]>([]);
  const lastItemRef = useRef<any>(null);

  useEffect(() => {
    setNewData(data);
  }, []);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      setNewData((prev) => [
        ...prev,
        ...[
          {
            time: "12",
            category: "პოლიტიკა",
            photo: otherNewsPhoto,
            text: "გენშტაბი: ბოლო ერთ დღეში უკრაინელებმა მტრის 70-ზე მეტი შეტევა მოიგერიეს ",
          },
        ],
      ]);
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
  }, [newData]);

  return {
    lastItemRef,
    newData,
  };
};
