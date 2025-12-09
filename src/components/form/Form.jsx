"use client"
//===== Imports
import React, { useState, useEffect } from 'react';
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'
//===== Icons
import { BsArrowRight } from "react-icons/bs";

const Form = () => {
    //========== Form
    const [ip, setIP] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Submit');
    const [isDisabled, setIsDisabled] = useState(false);
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    //========== Fetch IP data from the API
    const getIPData = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=229b1c3fa2e54c');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setIP(data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };

    useEffect(() => {
        getIPData();
    }, []);

    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const formValidateHandle = () => {
        let errors = {};
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        const phoneRegex = /^[0-9]+$/;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone number is required";
        }
        const messageRegex = /.+/;
        if (!data.message.match(messageRegex)) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            const currentdate = new Date().toLocaleString();
            const dataToSend = {
                ...data,
                IP: `${ip.country} - ${ip.city}`,
                currentdate: currentdate,
            };
            const JSONdata = JSON.stringify(dataToSend);

            try {
                //========== First API call to your server
                await fetch('/api/email/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSONdata
                });

                setFormStatus("Success...");
                setTimeout(() => {
                    window.location.href = '/thank-you';
                }, 2000);
            } catch (error) {
                console.error('Error during form submission:', error);
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }
    };

    return (
        <>
            <motion.form
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='flex flex-1 flex-col gap-4 md:gap-6 w-full mx-auto'>
                {/* Input Group */}
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-6 w-full'>
                    <div className="relative w-full">
                        <input type='text' name='name' placeholder='Name' required className='input' onChange={handleDataChange} />
                        {errors.name && (
                            <span className="text-[12px] block p-2 font-sans font-medium text-accent absolute left-0 bottom-[-55%]">
                                {errors.name}
                            </span>
                        )}
                    </div>
                    <div className="relative w-full">
                        <input type='tel' name='phone' placeholder='Number' maxLength={15} minLength={7} required className='input' onChange={handleDataChange} />
                        {errors.phone && (
                            <span className="text-[12px] block p-2 font-sans font-medium text-accent absolute left-0 bottom-[-55%]">
                                {errors.phone}
                            </span>
                        )}
                    </div>
                </div>
                <div className="relative w-full">
                    <input type='email' name='email' placeholder='Email' required className='input' onChange={handleDataChange} />
                    {errors.email && (
                        <span className="text-[12px] block p-2 font-sans font-medium text-accent absolute left-0 bottom-[-55%]">
                            {errors.email}
                        </span>
                    )}
                </div>
                <div className="relative">
                    <textarea name='message' placeholder='Message' required className='textarea' onChange={handleDataChange}></textarea>
                    {errors.message && (
                        <span className="text-[12px] block p-2 font-sans font-medium text-accent absolute left-0 bottom-[-12%]">
                            {errors.message}
                        </span>
                    )}
                </div>
                <div>
                    <button className='btn rounded-lg border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' onClick={handleFormSubmit} disabled={isDisabled}>
                        <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>{formStatus}</span>
                        <BsArrowRight className='translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                    </button>
                </div>
            </motion.form>
        </>
    )
}

export default Form
