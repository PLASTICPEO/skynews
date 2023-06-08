import { useEffect, useState } from "react";


export const useMobileSearch = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpenMobileSearchField, setIsOpenMobileSearchField] = useState(false);

    const toggleMobileSearchField = () => {
    setIsOpenMobileSearchField(!isOpenMobileSearchField);

    };

    

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return {
        isMobile,
        isOpenMobileSearchField,
        toggleMobileSearchField
    }
}