import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";

export default function TransitionOutlet() {
  const location = useLocation();
  const element = useOutlet();

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 500);

  return (
    <AnimatePresence>
      {element && cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
