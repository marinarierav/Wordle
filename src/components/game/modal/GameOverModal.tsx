import React from "react";
import Backdrop from "../../common/Backdrop";
import Modal from "../../common/Modal";
import { GROUNDTRUTH } from "../Game";

function GameOverModal({ isModalOpenInitially, isSuccess }) {
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

  return (
    <div>
      {isModalOpen && (
        <Modal
          onCancel={reloadWindow}
          onCancelText="Retry"
          onConfirm={closeModalHandler}
          onConfirmText="Ok"
          title={isSuccess ? "Very good!" : "Ooops"}
          text={"The country was " + GROUNDTRUTH}
        />
      )}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}{" "}
    </div>
  );
}

export default GameOverModal;
