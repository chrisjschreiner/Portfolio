import { useRef, useEffect } from "react";
import "../styles/TextScramble.css";

const TextScramble = () => {
  const ref = useRef(null);

  useEffect(() => {
    const h1 = ref.current;

    const letters = "abcdefghijklmnopqrstuvwxyz";

    let interval = null;

    h1.onmouseover = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };
  }, []);

  return (
    <div>
      <h1 className="TextScramble" data-value="Chris Schreiner." ref={ref}>
        Chris Schreiner.
      </h1>
    </div>
  );
};

export default TextScramble;
