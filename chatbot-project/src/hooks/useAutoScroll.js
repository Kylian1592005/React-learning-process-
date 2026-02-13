import { useRef, useEffect } from "react"

function useAutoScroll(dependencies) {
  const ref = useRef(null);

  useEffect(() => {
    const containerElm = ref.current;
    if (containerElm) {
      containerElm.scrollTop = containerElm.scrollHeight;
    }
  }, [dependencies]);

  return ref;
}

export default useAutoScroll;
