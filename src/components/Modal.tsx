import { GROUNDTRUTH } from "../App";

function Modal(props) {
  return (
    <div className="modal">
      <h2>Good job!</h2>
      <p>The word was "{GROUNDTRUTH}"</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        {props.onCancelText}
      </button>
      <button className="btn" onClick={props.onConfirm}>
        {props.onConfirmText}
      </button>
    </div>
  );
}

export default Modal;
