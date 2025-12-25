import type { PopupProps } from './types';

type Listener = (props: PopupProps | null) => void;

class PopupStore {
  private listener: Listener | null = null;

  setListener(listener: Listener) {
    this.listener = listener;
  }

  open(props: PopupProps) {
    this.listener?.(props);
  }

  close() {
    this.listener?.(null);
  }
}

export const popupStore = new PopupStore();
