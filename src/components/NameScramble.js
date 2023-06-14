import TextScramble from "@twistezo/react-text-scramble";
import "../styles/NameScramble.scss";
import { Fade } from "react-reveal";

const scrambleTexts = ["Chris Schreiner.", "Chris Schreiner. "];

const NameScramble = () => {
  return (
    <div className="NameScramble">
      <span className="NameScramble__blinker"></span>
      <TextScramble
        texts={scrambleTexts}
        letterSpeed={5}
        nextLetterSpeed={75}
        pauseTime={5000}
      />
    </div>
  );
};

export default NameScramble;
