import React from 'react';

export function DrawerOptions(props) {
  return (
    <div className="dropright">
      <div
        className="dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="pen"
          className="svg-inline--fa fa-pen fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
          ></path>
        </svg>
      </div>
      <div className="dropdown-menu drawer">
        <div className="pen-option-thin" onClick={props.selectRadius} id="1">
          Thin
        </div>
        <div className="pen-option-regular" onClick={props.selectRadius} id="2">
          Regular
        </div>
        <div className="pen-option-thick" onClick={props.selectRadius} id="3">
          Thick
        </div>
      </div>
    </div>
  );
}

export function EraserOptions(props) {
  return (
    <div className="dropright">
      <div
        className="dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="eraser"
          className="svg-inline--fa fa-eraser fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"
          ></path>
        </svg>
      </div>
      <div className="dropdown-menu drawer">
        <div className="pen-option-thin" onClick={props.selectRadius} id="1">
          Thin
        </div>
        <div className="pen-option-regular" onClick={props.selectRadius} id="2">
          Regular
        </div>
        <div className="pen-option-thick" onClick={props.selectRadius} id="3">
          Thick
        </div>
      </div>
    </div>
  );
}
