import React, { useEffect, useRef } from "react";
interface InfiniteScrollProps {
  fetchMore: () => void;
}

function InfinityScroll({ fetchMore }: InfiniteScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchMore();
        observer.disconnect();
      }
    }, options);

    if (containerRef?.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchMore]);

  return <div ref={containerRef} />;
}

export default InfinityScroll;
