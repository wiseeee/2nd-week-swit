import React from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input() {
  return (
    <div>
      <input type="text" />
      <button type="button">
        <FontAwesomeIcon icon={faCamera} size="2x" />
      </button>
    </div>
  );
}

export default Input;
