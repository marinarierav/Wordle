import React, { useState } from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import Backdrop from "../../common/Backdrop";
import Modal from "../../common/Modal";
import { GROUNDTRUTH } from "../Game";
import {
  getFullShareable,
  getShareableLink,
  getShareableText,
} from "./getShareable";

function GameOverModal({ isModalOpenInitially, isSuccess, numberOfTries }) {
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
    const el = document.createElement("input");
    el.value = getFullShareable(numberOfTries);
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
          <p>The country was {GROUNDTRUTH}</p>
          <p className="share">Share:</p>

          <ul className="share--container">
            <li className="">
              <WhatsappShareButton
                url={getShareableLink()}
                title={getShareableText(numberOfTries)}
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
