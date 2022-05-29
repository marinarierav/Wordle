import React from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import Backdrop from "../common/Backdrop";
import Modal from "../common/Modal";
import { getShareableLink } from "../Game/GameOverModal/getShareable";
import ValidLanguageWordButton from "../Game/ValidLanguageWordButton";

function AppMenu({ isModalOpenInitially }): JSX.Element {
  const [isModalOpen, setIsModalOpen] = React.useState(isModalOpenInitially);

  function closeModalHandler(): void {
    setIsModalOpen(false);
  }

  function openModalHandler(): void {
    setIsModalOpen(true);
  }

  function reloadWindow(): void {
    window.location.reload();
  }

  React.useEffect(() => {
    setIsModalOpen(isModalOpenInitially);
  }, [isModalOpenInitially]);

  return (
    <div className="title-menu">
      <button onClick={openModalHandler}>
        Menu
        <hr className="title-menu--hr"></hr>
        <span className="title-menu--icon">☰</span>
      </button>
      {isModalOpen && (
        <Modal
          onCancel={reloadWindow}
          onCancelText="Retry"
          onCancelExtraClasses="hidden"
          onConfirm={closeModalHandler}
          onConfirmText="Back to game"
          onConfirmExtraClasses="btn--alt share--confirm"
          extraClass="menu"
          title={"Settings"}
        >
          <ValidLanguageWordButton></ValidLanguageWordButton>
          <p className="menu--separator">***</p>
          <p className="share">How it works?</p>
          <p className="">
            You have 6 attemps to guess the 5-letter daily word. Use the
            keyboard to enter a word. Once submitted, you will see:
          </p>
          <ul className="tutorial--list">
            <li>In green: Letter is present and correctly placed.</li>
            <li>In yellow: Letter is present but misplaced.</li>
            <li>In white: Letter is not present.</li>
          </ul>
          <p>Come back every day for a different puzzle!</p>
          <p className="menu--separator">***</p>
          <p className="share">Invite your friends!</p>
          <ul className="share--container">
            <li className="">
              <WhatsappShareButton
                url={getShareableLink()}
                title={"Can you solve this?\r\n"}
              >
                <WhatsappIcon size={32} round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </li>
          </ul>
        </Modal>
      )}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default AppMenu;
