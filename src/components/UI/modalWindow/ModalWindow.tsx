import React from 'react';

import './ModalWindow.scss';

interface IPropsModalWindow {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export function ModalWindow(props: IPropsModalWindow): JSX.Element {
  const { active, setActive, children } = props;
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__close">
          <span className="modal__close-line" onClick={() => setActive(false)}></span>
          <span className="modal__close-line" onClick={() => setActive(false)}></span>
        </div>
        {children}
      </div>
    </div>
  );
}
