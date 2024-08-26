import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Modal from '../Modal/Modal';
import validate from './Validate';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [errors, setErrors] = useState({}); //for modalbox

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate(name, email, message);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post("https://portfolio-5yi4.onrender.com/api/contact", { name, email, message });
            setModalMessage(response.data.message);
            setIsModalOpen(true);
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
        } catch (error) {
            if (error.response) {
                setModalMessage(error.response.data.message);
                setIsModalOpen(true);
            }
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="contact" id="contact">
            <div className="heading">
                <h2>Contact</h2>
                <span>Connect me</span>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <textarea
                        cols="20"
                        rows="8"
                        placeholder="Write Message Here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}

                    <input type="submit" value="Send" className="contact-button" />
                </form>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
        </section>
    );
}

export default Contact;