import React from "react";
import Backdrop from "../../common/Backdrop";
import Modal from "../../common/Modal";
import { GROUNDTRUTH } from "../Game";

function GameOverModal(props: { isModalOpen: boolean }) {
  const [isModalOpen, setIsModalOpen] = React.useState(props.isModalOpen);

  function closeModalHandler(): void {
    setIsModalOpen(false);
  }

  function reloadWindow(): void {
    window.location.reload();
  }

  React.useEffect(() => {
    setIsModalOpen(props.isModalOpen);
  }, [props.isModalOpen]);

  return (
    <div>
      {isModalOpen && (
        <Modal
          onCancel={reloadWindow}
          onCancelText="Reintentar"
          onConfirm={closeModalHandler}
          onConfirmText="Acceptar"
          title="Molt bé!"
          text={"La paraula era " + GROUNDTRUTH}
        />
      )}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}{" "}
    </div>
  );
}

export default GameOverModal;
