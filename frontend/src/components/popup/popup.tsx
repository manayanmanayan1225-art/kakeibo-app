import type { PopupProps } from './types';
import { popupStore } from './popupStore';

export const popup = (props: PopupProps) => {
  popupStore.open(props);
};
