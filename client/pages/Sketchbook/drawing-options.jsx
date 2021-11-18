import React from 'react';

export function BrushOptions(props) {
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
        <div className="pen-option-thin" onClick={props.updateBrush} id="1">
          Thin
        </div>
        <div className="pen-option-regular" onClick={props.updateBrush} id="3">
          Regular
        </div>
        <div className="pen-option-thick" onClick={props.updateBrush} id="6">
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
        <div className="pen-option-thin" onClick={props.updateEraser} id="1">
          Thin
        </div>
        <div className="pen-option-regular" onClick={props.updateEraser} id="3">
          Regular
        </div>
        <div className="pen-option-thick" onClick={props.updateEraser} id="6">
          Thick
        </div>
      </div>
    </div>
  );
}

export function PromptOptions(props) {
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
          data-icon="paw"
          className="svg-inline--fa fa-paw fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
          ></path>
        </svg>
      </div>
      <div className="dropdown-menu drawer">
        <div className="pen-option-thin" onClick={props.updatePrompt} id="1">
          1
        </div>
        <div className="pen-option-regular" onClick={props.updatePrompt} id="2">
          2
        </div>
        <div className="pen-option-thick" onClick={props.updatePrompt} id="3">
          3
        </div>
        <div className="pen-option-regular" onClick={props.updatePrompt} id="4">
          4
        </div>
        <div className="pen-option-thick" onClick={props.updatePrompt} id="5">
          5
        </div>
        <div className="pen-option-thin" onClick={props.updatePrompt} id="6">
          6
        </div>
        <div className="pen-option-regular" onClick={props.updatePrompt} id="7">
          7
        </div>
        <div className="pen-option-thick" onClick={props.updatePrompt} id="8">
          8
        </div>
        <div className="pen-option-regular" onClick={props.updatePrompt} id="9">
          9
        </div>
        <div className="pen-option-thick" onClick={props.updatePrompt} id="10">
          10
        </div>
        <div className="pen-option-thin" onClick={props.updatePrompt} id="11">
          11
        </div>
        <div
          className="pen-option-regular"
          onClick={props.updatePrompt}
          id="12"
        >
          12
        </div>
        <div className="pen-option-thick" onClick={props.updatePrompt} id="13">
          13
        </div>
        <div
          className="pen-option-regular"
          onClick={props.updatePrompt}
          id="14"
        >
          14
        </div>
        <div className="pen-option-thick" onClick={props.updatePrompt} id="15">
          15
        </div>
      </div>
    </div>
  );
}
