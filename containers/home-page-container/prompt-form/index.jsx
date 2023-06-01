"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
const PrompForm = () => {
  const [prompt, setPrompt] = useState("");

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const hamdleFormSubmit = () => {};
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
