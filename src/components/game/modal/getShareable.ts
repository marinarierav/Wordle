import { MAX_LETTERS } from "../Game";

export function getShareableLink(): string {
  return "marinarierav-worldle.herokuapp.com";
}

export function getShareableText(numberOfTries): string {
  return (
    `#Worldle (English) 1º ${numberOfTries}/${MAX_LETTERS}\r\n` +
    `⬜⬜⬜⬜🟨 \r\n` +
    `🟨🟨⬜⬜🟩 \r\n` +
    `⬜🟨🟩🟨🟩 \r\n` +
    `🟩🟩🟩🟩🟩 \r\n`
  );
}

export function getFullShareable(numberOfTries): string {
  return getShareableText(numberOfTries) + getShareableLink();
}
