import { useEffect, useRef } from "react";

export function useOutsideClick(handler: any, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e: any) {
      // @ts-ignore
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
