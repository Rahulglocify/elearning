import React, { useState } from 'react'
import { useForm } from "react-hook-form";


function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [subjectErr, setSubjectErr] = useState({});
    const [messageErr, setMessageErr] = useState({});

    const [successMessage, setSuccessMessage] = useState("");

    async function onSubmit(e) {
        e.preventDefault();

        let item = { name, email, subject, message }

        const isValid = formValidation();

        if (isValid) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("subject", subject);
            formData.append("message", message);
            console.log(formData);

            let result = await fetch('http://127.0.0.1:8000/api/contact-us', {
                method: "POST",
                body: formData
            });
            setSuccessMessage("Contact form has been submited successfully");
            document.getElementById("contact-form").reset();
            //alert("Data saved successfully")
        }
    }

    function formValidation() {
        const nameErr = {};
        const emailErr = {};
        const subjectErr = {};
        const messageErr = {};
        let isValid = true;
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (name.trim() == "") {
            nameErr.nameEmpty = "Please enter your name";
            isValid = false
        }

        else if (name.trim().length < 5) {
            nameErr.nameShort = "Name is too short.";
            isValid = false
        }

        else if (name.trim().length > 10) {
            nameErr.nameLong = "Name is too long.";
            isValid = false
        }

        if (email.trim() == "") {
            emailErr.emailEmpty = "Please enter your email address.";
            isValid = false
        }

        else if (email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                emailErr.emailpattern = "Please enter valid email address.";
                isValid = false;
            }
        }

        if (subject.trim() == "") {
            subjectErr.subjectEmpty = "Please enter subject.";
            isValid = false
        }

        else if (subject.trim().length < 20) {
            subjectErr.subjectShort = "Subject should be 20 character.";
            isValid = false
        }

        if (message.trim() == "") {
            messageErr.messageEmpty = "Please enter message.";
            isValid = false
        }

        else if (message.trim().length < 100) {
            messageErr.messageShort = "Message should be 100 character.";
            isValid = false
        }

        setNameErr(nameErr);
        setEmailErr(emailErr);
        setSubjectErr(subjectErr);
        setMessageErr(messageErr);

        return isValid

    }
    return (
        <div>
            <main id="main">

                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Contact Us</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                    </div>
                </div>

                <section id="contact" className="contact">
                    <div data-aos="fade-up">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                    </div>

                    <div className="container" data-aos="fade-up">

                        <div className="row mt-5">

                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="icofont-google-map"></i>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>

                                    <div className="email">
                                        <i className="icofont-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="icofont-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55s</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0">
                                <div>
                                    <h4 style={{ color: "green" }} >{successMessage}</h4>
                                </div>
                                <form className="php-email-form" id="contact-form" onSubmit={onSubmit}>
                                    <div className="form-row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Your Name" />
                                            {Object.keys(nameErr).map((key) => {
                                                return <div style={{ color: "red" }}>{nameErr[key]}</div>
                                            })
                                            }

                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            {Object.keys(emailErr).map((key) => {
                                                return <div style={{ color: "red" }}>{emailErr[key]}</div>
                                            })
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        {Object.keys(subjectErr).map((key) => {
                                            return <div style={{ color: "red" }}>{subjectErr[key]}</div>
                                        })
                                        }
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        {Object.keys(messageErr).map((key) => {
                                            return <div style={{ color: "red" }}>{messageErr[key]}</div>
                                        })
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </div>
    )
}

export default Contact