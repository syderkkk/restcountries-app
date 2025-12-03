import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            setErrors({});
        } else {
            setErrors(newErrors);
            setSubmitted(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0 rounded-4">
                        <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
                            <h3 className="mb-0 fw-bold">¡Contáctanos!</h3>
                        </div>
                        <div className="card-body p-4 bg-white">
                            {submitted ? (
                                <div className="alert alert-primary text-center border-0 bg-opacity-10 bg-primary text-primary" role="alert">
                                    <h4 className="alert-heading fw-bold">¡Mensaje enviado!</h4>
                                    <p>Gracias por escribir.</p>
                                    <button className="btn btn-primary rounded-pill mt-2 px-4" onClick={() => {
                                        setSubmitted(false);
                                        setFormData({ name: '', email: '', message: '' });
                                    }}>Enviar otro mensaje</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label text-primary fw-bold small">NOMBRE</label>
                                        <input
                                            type="text"
                                            className={`form-control bg-light border-0 py-2 ${errors.name ? 'is-invalid' : ''}`}
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Italo Mendoza"
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label text-primary fw-bold small">EMAIL</label>
                                        <input
                                            type="email"
                                            className={`form-control bg-light border-0 py-2 ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="correo@gmail.com"
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label text-primary fw-bold small">MENSAJE</label>
                                        <textarea
                                            className="form-control bg-light border-0"
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Escribe tu mensaje..."
                                        ></textarea>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary rounded-pill py-2 fw-bold shadow-sm">
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;