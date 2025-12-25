import type { PopupProps } from './types';
import "./style.scss";

interface Props extends PopupProps {
  onClose: () => void;
}

export const PopupModal: React.FC<Props> = ({
  messages,
  okButton,
  cancelButton,
  onClose
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup__body">
          {messages.map((msg, i) => (
            <p key={i}>{msg}</p>
          ))}
        </div>

        <div className="popup__footer">
          {cancelButton && (
            <button
              onClick={() => {
                cancelButton.onClick();
                onClose();
              }}
            >
              {cancelButton.label}
            </button>
          )}

          <button
            className='popup-btn'
            onClick={() => {
              okButton?.onClick();
              onClose();
            }}
          >
            {okButton?.label ?? 'OK'}
          </button>
        </div>
      </div>
    </div>
  );
};
