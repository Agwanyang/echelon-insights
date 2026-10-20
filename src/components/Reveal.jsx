import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("js")) return;

    let observer;
    const reveal = () => {
      setVisible(true);
      observer?.disconnect();
      window.removeEventListener("scroll", revealIfPassed);
    };
    const revealIfPassed = () => {
      if (el.getBoundingClientRect().top < window.innerHeight) reveal();
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { rootMargin: "15% 0px", threshold: 0.01 }
    );
    observer.observe(el);
    window.addEventListener("scroll", revealIfPassed, { passive: true });
    revealIfPassed();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealIfPassed);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}