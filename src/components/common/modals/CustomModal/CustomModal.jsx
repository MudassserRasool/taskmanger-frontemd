import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CrossModal } from '../../../../assets';

const CustomModal = ({
  open,
  onClose,
  title,
  children,
  width,
  isClosable,
  hideCrossButton,
  className,
}) => {
  const modalRoot = useRef(null);

  useEffect(() => {
    modalRoot.current = document.createElement('div');
    modalRoot.current.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot.current);

    return () => {
      if (modalRoot.current) {
        document.body.removeChild(modalRoot.current);
      }
    };
  }, []);

  if (!open || !modalRoot.current) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 py-5">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity"
          aria-hidden="true"
          onClick={isClosable ? onClose : undefined}
        />

        <div
          className={`relative z-[10000] flex flex-col w-full max-w-[800px] rounded-lg bg-white ${className}`}
          style={{ width: width || '700px' }}
        >
          <div className="flex justify-between items-center px-8 py-[22px]">
            {title && <div className="text-lg font-medium">{title}</div>}
            {!hideCrossButton && (
              <div onClick={onClose}>
                <img
                  className="rounded-full w-[18px] h-[18px] cursor-pointer"
                  src={CrossModal}
                  alt="Close"
                />
              </div>
            )}
          </div>
          <hr className="border-t-[0.7px] border-[#696969] opacity-55" />
          <div className="px-8 py-10">{children}</div>
        </div>
      </div>
    </div>,
    modalRoot.current
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  isClosable: PropTypes.bool,
  hideCrossButton: PropTypes.bool,
  className: PropTypes.string,
};

export default CustomModal;
