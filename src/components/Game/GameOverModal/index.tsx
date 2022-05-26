import React, { useState } from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import Backdrop from "../../common/Backdrop";
import Modal from "../../common/Modal";
import { GROUNDTRUTH } from "..";
import { GameContext, GameContextType } from "../GameContext";
import {
  getFullShareable,
  getShareableLink,
  getShareableText,
} from "./getShareable";
import { LetterInterface } from "../Word/Letter";

function GameOverModal({ isModalOpenInitially, isSuccess }): JSX.Element {
  const currentWordIndex = parseInt(localStorage.getItem("currentWordIndex"));
  const currentWords: LetterInterface[][] = JSON.parse(
    localStorage.getItem("currentWords")
  ).slice(0, currentWordIndex);

  const [isModalOpen, setIsModalOpen] = React.useState(isModalOpenInitially);

  function closeModalHandler(): void {
    setIsModalOpen(false);
  }

  function reloadWindow(): void {
    window.location.reload();
  }

  React.useEffect(() => {
    setIsModalOpen(isModalOpenInitially);
  }, [isModalOpenInitially]);

  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement("textarea");
    el.value = getFullShareable(currentWords, isSuccess);

    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    setCopied(true);
  }

  return (
    <div>
      {isModalOpen && (
        <Modal
          onCancel={reloadWindow}
          onCancelText="Retry"
          onConfirm={closeModalHandler}
          onConfirmText="Ok"
          title={isSuccess ? "Very good!" : "Ooops"}
        >
          <p>The word was {GROUNDTRUTH}</p>
          <p>
            Current streak:{" "}
            <span className="share">
              {localStorage.getItem("currentCombo") || "0"}
            </span>
          </p>
          <p>
            Total Wins:{" "}
            <span className="share">
              {localStorage.getItem("totalWins") || "0"}
            </span>
          </p>
          <p className="share">Share:</p>

          <ul className="share--container">
            <li className="">
              <WhatsappShareButton
                url={getShareableLink()}
                title={getShareableText(currentWords, isSuccess)}
              >
                <WhatsappIcon size={32} round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </li>
            <li>
              <button className="btn share--button" onClick={copy}>
                {!copied ? "Copy 📋" : "Copied!✅"}
              </button>
            </li>
          </ul>
        </Modal>
      )}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}{" "}
    </div>
  );
}

export default GameOverModal;
