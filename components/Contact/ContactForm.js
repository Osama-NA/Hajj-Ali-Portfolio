import React, { useState } from 'react'
import InputGroup from './InputGroup'
import styles from '../../styles/Contact.module.scss'
import SuccessTab from '../SuccessTab'

const ContactForm = ({
    title2Ref,
    input1Ref,
    input2Ref,
    textareaRef,
    buttonRef
}) => {
    const [viewSuccessMessage, setViewSuccessMessage] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        email: ''
    })

    const handleInput = (name, text) => {
        setFormData({
            ...formData,
            [name]: text
        })
    }

    const isValid = str => {
        if (str === null) return false
        if (str === undefined) return false
        if (str.trim() === '') return false
        return true
    }

    const isValidEmail = email => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true
        }
        return false
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setShowLoader(true)

        const { name, email, message } = formData

        if (!isValid(email) || !isValid(name) || !isValid(message)) {
            alert('Please fill in all the fields')
            return
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address")
            return
        }

        sendEmail()
    }

    const sendEmail = async () => {
        const { name, email, message } = formData

        const emaiSubmittionResponse = await fetch('https://formsubmit.co/ajax/ossama.nae12@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                name,
                message
            })
        })

        if (emaiSubmittionResponse.status !== 200) {
            alert('Failed to send email. Please try again.')
            return
        }

        setShowLoader(false)
        setViewSuccessMessage(true)
        setTimeout(() => setViewSuccessMessage(false), 3000)
        resetForm()
    }

    const resetForm = () => {
        setFormData({
            name: '',
            message: '',
            email: ''
        })
    }

    return (
        <>
            <div className={styles.contact_form}>
                <h3 ref={title2Ref}>
                    Send a message<span>!</span>
                </h3>

                <form onSubmit={e => handleFormSubmit(e)}>
                    <InputGroup
                        type='email'
                        label='email'
                        text={formData.email}
                        setText={handleInput}
                        inputRef={input1Ref}
                    />
                    <InputGroup
                        type='text'
                        label='name'
                        text={formData.name}
                        setText={handleInput}
                        inputRef={input2Ref}
                    />
                    <InputGroup
                        type='textarea'
                        label='message'
                        text={formData.message}
                        setText={handleInput}
                        inputRef={textareaRef}
                    />

                    <button type='submit' ref={buttonRef}>
                        Send Email
                    </button>

                    {
                        showLoader &&
                        <div className={styles.loading_squares}>
                            <div className={styles.square}></div>
                            <div className={styles.square}></div>
                            <div className={styles.square}></div>
                        </div>
                    }
                </form>
            </div>

            {
                viewSuccessMessage &&
                <SuccessTab
                    setViewSuccessMessage={setViewSuccessMessage}
                    message='Email successfully sent'
                />
            }
        </>
    )
}

export default ContactForm