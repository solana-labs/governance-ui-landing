import { useState } from 'react';
import Modal from 'react-modal';

const TermsPopupModal = () => {
  const [openModal, setOpenModal] = useState(true);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#222222',
      border: 0,
      borderRadius: '16px',
    },
    overlay: {
      backgroundColor: 'rgb(0,0,0,60%)',
    },
  };

  return (
    <div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        onRequestClose={() => setOpenModal(false)}
        ariaHideApp={false}
      >
        <div className='flex w-60 flex-col items-center justify-center gap-6 sm:w-[21rem]'>
          <p>
            If you would like to discuss the changes to our policies, please
            contact admin@realms.today
          </p>
          <button
            className='rounded-md border-[1px] border-white px-2 py-1'
            onClick={() => setOpenModal(false)}
          >
            Ok
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TermsPopupModal;
