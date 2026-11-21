import { useEffect, useState } from "react";

// Types and deletes each word in turn. Shows the first word instantly if the user prefers reduced motion.
export default function useTyping(words, speed = 70, pause = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }
    let timer;
    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      const next = word.slice(0, text.length + (deleting ? -1 : 1));
      timer = setTimeout(() => setText(next), deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}
