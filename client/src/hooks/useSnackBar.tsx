import { useEffect, useRef, useState } from "react";

type Timer = ReturnType<typeof setTimeout>;

function useSnackBar(sec: number) {
  const [isShowing, setIsShowing] = useState(false);
  const timer = useRef<Timer>();

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    if (isShowing) {
      timer.current = setTimeout(() => setIsShowing(false), sec * 1000);
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, [isShowing, sec]);

  return { isShowing, setIsShowing };
}

export default useSnackBar;
