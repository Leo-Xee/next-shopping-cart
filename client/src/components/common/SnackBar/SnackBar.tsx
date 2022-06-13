import ReactDOM from "react-dom";

import { useEffect, useState } from "react";
import Container from "./style";

type SnackBarProps = {
  message: string;
  duration: number;
};

function SnackBar({ message, duration }: SnackBarProps) {
  const [target, setTarget] = useState<Element | null>(null);

  const element = <Container duration={duration}>{message}</Container>;

  useEffect(() => {
    if (document) {
      setTarget(document.querySelector("#portal"));
    }
  }, []);

  if (!target) return <></>;

  return ReactDOM.createPortal(element, target);
}

export default SnackBar;
