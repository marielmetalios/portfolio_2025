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
        setFormInfo({ name: '', email: '', message: '' });
    }



    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-left">
                <h2 className="text-3xl font-bold text-left text-gray-800">Get in Touch</h2>
                <p className="mx-w-sm mt-4 text-lg/8 text-gray-600">Please submit the form below! Looking forward to hearing from you.</p>

                <form className="mx-auto mt-16 max-w-xl sm:mt-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900" htmlFor="name">Name</label>
                            <input
                                className="mt-2 block w-1/2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                                id="name" name="name" type="text" value={formInfo.name} onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900" htmlFor="email">Email</label>
                            <input
                                className="mt-2 block w-1/2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                                id="email" name="email" type="text" value={formInfo.email} onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900" htmlFor="message">Message</label>
                            <textarea
                                className="mt-2 block w-1/2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                                id="message" name="message" value={formInfo.message} onChange={handleChange}
                            />
                        </div>

                        <button className="mt-4 w-1/2 bg-dark-600 text-gray-900 py-2 rounded-md" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;



