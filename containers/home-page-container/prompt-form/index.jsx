"use client";

import styles from "./styles.module.scss";
import { useHomePage } from "../useHomePage";
const PrompForm = () => {
  const { prompt, setPrompt } = useHomePage();

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const hamdleFormSubmit = (event) => {
    event.preventDefault();
    generateImage();
  };
  return (
    <div className={styles.promptForm}>
      <form className={styles.form} onSubmit={hamdleFormSubmit}>
        <textarea
          className={styles.promptTextarea}
          s
          rows={2}
          type="text"
          required
          onChange={handlePromptChange}
          placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
        />
        <button className={styles.generateButton} type="submit">
          Generate
        </button>
      </form>
    </div>
  );
};

export { PrompForm };
