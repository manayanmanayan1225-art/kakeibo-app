export type PopupType = 'alert' | 'confirm';

export interface PopupButton {
  label: string;
  onClick: () => void;
}

export interface PopupProps {
  type: PopupType;
  messages: string[];
  okButton?: PopupButton;
  cancelButton?: PopupButton;
}
