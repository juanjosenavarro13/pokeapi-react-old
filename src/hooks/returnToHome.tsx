import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const useReturnToHome = (time = 10000) => {

  const Navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
        Navigate("/");
    }, time);
    return () => clearInterval(interval);
  }, [Navigate, time]);

  return true;
}