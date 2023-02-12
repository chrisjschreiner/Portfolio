import TextScramble from "@twistezo/react-text-scramble";
import "../styles/NameScramble.scss";

const scrambleTexts = ["Chris Schreiner", "Chris Schreiner "];

const NameScramble = () => {
  return (
    <div className="NameScramble">
      <span className="NameScramble__blinker"></span>
      <TextScramble
        texts={scrambleTexts}
        letterSpeed={5}
        nextLetterSpeed={100}
      />
    </div>
  );
};

export default NameScramble;
