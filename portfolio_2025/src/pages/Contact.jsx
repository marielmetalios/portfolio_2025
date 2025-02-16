import { useState } from "react";

const Contact = () => {
    const [formInfo, setFormInfo] = useState({
        name: '',
        email: '',
        message: ''
    });

    // boolean for submitted, set to false initiallity
    const [submitted, setSubmitted] = useState(false)

    function handleChange(event) {
        setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formInfo.name || !formInfo.email || !formInfo.message) {
            console.log('fields not filled out')
        } else {
            console.log('form submitted', formInfo)
            setSubmitted(true);
        }

        localStorage.setItem('form info', JSON.stringify(formInfo));
        setFormInfo({name: '', email: '', message: ''});
    }



    return (
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={formInfo.name} onChange={handleChange}>
                </input>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" value={formInfo.email} onChange={handleChange}>
                </input>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formInfo.message} onChange={handleChange}>
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;