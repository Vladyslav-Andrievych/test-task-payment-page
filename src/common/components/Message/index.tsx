import Toastify from 'toastify-js';
import type { MessageConfig } from './configs';

import 'toastify-js/src/toastify.css';

export const showNotification = ({ type, message }: MessageConfig): void =>
  Toastify({
    text: message,
    duration: 2000,
    gravity: 'top',
    position: 'center',
    style: {
      background: type === 'success' ? '#028837' : '#f00',
      color: '#fff',
    },
  }).showToast();
