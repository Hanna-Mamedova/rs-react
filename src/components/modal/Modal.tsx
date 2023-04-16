import './Modal.css';
import { MouseEventHandler, useEffect } from 'react';
import { Character } from 'models/card.model';

type ModalOnCloseHandler = MouseEventHandler<HTMLDivElement> | MouseEventHandler<HTMLButtonElement>;

interface ModalProps {
  open: boolean;
  character: Character | undefined;
  onClose: ModalOnCloseHandler;
}

function Modal({ open, character, onClose }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <>
      {open ? (
        <div className="overlay" onClick={onClose as MouseEventHandler<HTMLDivElement>}>
          <div
            className="modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-container">
              <button
                className="modal-close-btn"
                onClick={onClose as MouseEventHandler<HTMLButtonElement>}
              >
                X
              </button>
              <div>
                <img src={character?.image} alt="Image" />
              </div>
              <div className="modal-content">
                <h1 className="modal-name">{character?.name}</h1>
                <div className="modal-text">
                  <div className="modal-text__item">
                    <span>Status: </span>
                    {character?.status}
                  </div>
                  <div className="modal-text__item">
                    <span>Species: </span>
                    {character?.species}
                  </div>
                  <div className="modal-text__item">
                    <span>Gender: </span>
                    {character?.gender}
                  </div>
                  <div className="modal-text__item">
                    <span>Origin: </span>
                    {character?.origin.name}
                  </div>
                  <div className="modal-text__item">
                    <span>Creation Date: </span>
                    {character?.created.substring(0, 10)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
