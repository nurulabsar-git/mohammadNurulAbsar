import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const customStyles = {
  content: {
    top: '50%',
    left: '155px',
    right: 'auto',
    width: '310px',
    height: '100vh' ,
    boxShadow: '6px 6px 12px gray',
    borderRadius: '17px',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
const Sidebar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
     <div>
      <div style={{borderRadius: '5px'}}> <button onClick={openModal} style={{borderRadius: '8px'}} ><i style={{ width: '50px'}} className="fa fa-align-justify" aria-hidden="true"></i></button></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div style={{float: 'right', paddingBottom: '40px', paddingTop: '0'}}>
       <button  onClick={closeModal} style={{ border: 'none', marginTop: '10px', textShadow: '2px 4px white'}}><i className="fa fa-times mh-100 w-100 h-100" aria-hidden="true"></i></button>
       </div>
        <div style={{marginTop: '50px'}}>
        <form>
          <Link to="/" className="text-decorations">
          <li className="blog"> Home</li>
          </Link>
          <Link to="/myProject" className="text-decorations">
          <li className="blog">Projects</li>
          </Link>
          <Link to="/blogs" className="text-decorations">
          <li className="blog">Blogs</li>
          </Link>
          <Link to="/contactMe" className="text-decorations">
          <li  className="blog">Contact</li>
          </Link>
        </form>
        </div>
      </Modal>
    </div>
    );
};

export default Sidebar;