import './Modal.css';

function Modal({ isOpen, onClose, message }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Success</h2>
                <p>{message}</p>
                <button onClick={onClose} className="modal-button">Close</button>
            </div>
        </div>
    );
}

export default Modal;
