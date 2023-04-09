import { BASE_URL } from '../../data/api-data';
import './Modal.css';
import { Character } from 'models/card.model';
import { MouseEventHandler, useEffect, useState } from 'react';

type ModalOnCloseHandler = MouseEventHandler<HTMLDivElement> | MouseEventHandler<HTMLButtonElement>;

interface ModalProps {
  open: boolean;
  id: number;
  onClose: ModalOnCloseHandler;
}

function Modal({ open, id, onClose }: ModalProps) {
  const [data, setData] = useState<Character | null>();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  useEffect(() => {
    const getData = async () => {
      if (id) {
        try {
          const response = await fetch(`${BASE_URL}/${id}`);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data: Character = await response.json();
          setData(data);
        } catch (e) {
          console.error('Error fetching data:', e);
        }
      }
    };

    getData();
    return () => setData(null);
  }, [id]);

  if (open) {
    return (
      <div className="overlay" onClick={onClose as MouseEventHandler<HTMLDivElement>}>
        <div
          className="modal"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-container">
            <h1>{data?.name}</h1>
            <button
              className="modal-close-btn"
              onClick={onClose as MouseEventHandler<HTMLButtonElement>}
            >
              x
            </button>
            <div className="modal-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magnam, quia eius
                sunt cumque dignissimos deserunt temporibus distinctio eos rem quis. Assumenda
                voluptatibus neque fugit aliquam beatae fuga saepe cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default Modal;
