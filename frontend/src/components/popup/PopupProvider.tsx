import React from 'react';
import type { PopupProps } from './types';
import { popupStore } from './popupStore';
import { PopupModal } from './PopupModal';

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [popup, setPopup] = React.useState<PopupProps | null>(null);

  React.useEffect(() => {
    popupStore.setListener(setPopup);
  }, []);

  return (
    <>
      {children}
      {popup && <PopupModal {...popup} onClose={() => popupStore.close()} />}
    </>
  );
};
