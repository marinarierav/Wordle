function Modal(props): JSX.Element {
  return (
    <div className="modal">
      <h2>{props.title}</h2>
      {props.children}
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
