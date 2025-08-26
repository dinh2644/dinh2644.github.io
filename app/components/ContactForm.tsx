'use client'
import React, { useState } from 'react'

const ContactForm = () => {
    const [toggle, setToggle] = useState(false)
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');


    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (loading) return

        const form = e.target as HTMLFormElement
        const formValues = Object.fromEntries(new FormData(form).entries())

        setLoading(true)
        setSuccessMessage('')
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            await response.json();
            setSuccessMessage('Thank you for contacting! I will get back to you shortly :)')
            form.reset()
            
        } catch (err) {
            console.error(err)
            setErrorMessage('An error occurred. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    // Close modal & reset states 
    const handleClose = () => {
        setToggle(false);
        setSuccessMessage('');
        setErrorMessage('');
    }

    return (
        <>
            {toggle && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300"
                    onClick={handleClose}
                >
                    <div 
                        className="relative w-full max-w-lg p-8 mx-4 bg-white rounded-2xl shadow-xl transform transition-all duration-300 ease-out"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside the modal
                    >
                        {/* Close Button */}
                        <button 
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Close contact form"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>

                        {/* Form */}
                        <form onSubmit={onSubmit} className="space-y-5">
                            <label className="block">
                                <span className="text-gray-700 font-medium">Name</span>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required 
                                    className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-700 font-medium">Email</span>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-700 font-medium">Message</span>
                                <textarea 
                                    name="message" 
                                    required 
                                    rows={4}
                                    className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </label>
                            <button 
                                disabled={loading} 
                                type="submit"
                                className="w-full px-4 py-3 font-semibold text-white bg-black rounded-md hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                            {successMessage && <p className="text-green-600 text-center font-medium mt-4">{successMessage}</p>}
                            {errorMessage && <p className="text-red-600 text-center font-medium mt-4">{errorMessage}</p>}
                        </form>
                    </div>
                </div>
            )}

            {/* Trigger Button */}
            <button 
                onClick={() => setToggle(true)}
                className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900 transition-colors duration-300"
            >
                Contact Me
            </button>
        </>
    )
}

export default ContactForm
