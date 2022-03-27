import React from 'react';
import ReactDom from 'react-dom';
import ModalPropsType from './Modal.type';
import { StyledModal } from './modal.style';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import { Close32 } from '@carbon/icons-react';

const Modal: React.FC<ModalPropsType> = (props: ModalPropsType) => {
  const { children, open, title } = props;

  const portalDiv = document.getElementById('portals');

  return portalDiv && open
    ? ReactDom.createPortal(
        <StyledModal>
          <section className="modal-overlay"></section>
          <section className="modal-window">
            <section className="modal-window---heading">
              <Heading headingLevel="h2" dark={true}>
                {title}
              </Heading>
              <Button variant="icon-button">
                <Close32 aria-label="search" className="input-icon" />
              </Button>
            </section>
            <section className="modal-window--content">{children}</section>
          </section>
        </StyledModal>,
        portalDiv,
      )
    : null;
};

export default Modal;
