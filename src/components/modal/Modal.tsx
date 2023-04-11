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
            <button
              className="modal-close-btn"
              onClick={onClose as MouseEventHandler<HTMLButtonElement>}
            >
              X
            </button>
            <div>
              <img src={data?.image} alt="Image" />
            </div>
            <div className="modal-content">
              <h1 className="modal-name">{data?.name}</h1>
              <div className="modal-text">
                <div className="modal-text__item">
                  <span>Status: </span>
                  {data?.status}
                </div>
                <div className="modal-text__item">
                  <span>Species: </span>
                  {data?.species}
                </div>
                <div className="modal-text__item">
                  <span>Gender: </span>
                  {data?.gender}
                </div>
                <div className="modal-text__item">
                  <span>Origin: </span>
                  {data?.origin.name}
                </div>
                <div className="modal-text__item">
                  <span>Creation Date: </span>
                  {data?.created.substring(0, 10)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default Modal;
