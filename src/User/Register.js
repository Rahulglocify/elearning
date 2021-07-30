import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

function Register() {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("user-token")) {
            history.push('/');
        }
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confimPassword, setConfirmPassword] = useState("");

    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const [confimPasswordErr, setConfirmPasswordErr] = useState({});

    const [successMessage, setSuccessMessage] = useState("");

    async function register(e) {
        e.preventDefault();

        let isValid = formValidation();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        if (isValid) {
            let result = await fetch('http://127.0.0.1:8000/api/register', {
                method: "POST",
                body: formData,
            });
            result = await result.json();
            //console.log(result.token);
            localStorage.setItem("user-token", JSON.stringify(result.token));
            setSuccessMessage("You have registered successfully");
        }
    }

    function formValidation() {
        const nameErr = {};
        const emailErr = {};
        const passwordErr = {};
        const confimPasswordErr = {};
        let isValid = true;

        if (name.trim() === "") {
            nameErr.nameEmpty = "Please Enter Your Name.";
            isValid = false;
        }

        if (email.trim() === "") {
            emailErr.emailEmpty = "Please Enter Your E-mail Address.";
            isValid = false;
        } else if (email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                emailErr.emailPattern = "Please Enter Valid E-mail Address."
                isValid = false;
            }
        }

        if (password.trim() === "") {
            passwordErr.passwordEmpty = "Please Enter Your Password.";
            isValid = false;
        } else if (password.length < 6) {
            passwordErr.passwordShort = "Password Should Be 6 Digits.";
            isValid = false;
        }

        if (confimPassword != password) {
            confimPasswordErr.passwordNotSame = "Password And Confirm Password Should Be Same.";
            isValid = false;
        }

        setNameErr(nameErr);
        setEmailErr(emailErr);
        setPasswordErr(passwordErr);
        setConfirmPasswordErr(confimPasswordErr);

        return isValid
    }
    return (
        <div>
            <main id="main">

                <div className="breadcrumbs" data-aos="fade-in">
                    <div className="container">
                        <h2>Register</h2>
                    </div>
                </div>

                <section id="contact" className="contact">

                    <div className="container" data-aos="fade-up">

                        <div className="row mt-5">

                            <div className="col-lg-8 mt-5 mt-lg-0">
                                <div>
                                    <h4 style={{ color: "green" }} >{successMessage}</h4>
                                </div>
                                <form className="php-email-form" id="contact-form" onSubmit={register}>
                                    <div className="form-row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Enter Name" />
                                            {
                                                Object.keys(nameErr).map((key) => {
                                                    return <div style={{ color: "red" }}>{nameErr[key]}</div>
                                                })
                                            }
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" id="email" placeholder="Enter Email" />
                                            {
                                                Object.keys(emailErr).map((key) => {
                                                    return <div style={{ color: "red" }}>{emailErr[key]}</div>
                                                })
                                            }
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" id="password" placeholder="Enter Password" />
                                            {
                                                Object.keys(passwordErr).map((key) => {
                                                    return <div style={{ color: "red" }}>{passwordErr[key]}</div>
                                                })
                                            }
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <input type="password" value={confimPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" name="confirm_password" id="confirm_password" placeholder="Enter confirm Password" />
                                            {
                                                Object.keys(confimPasswordErr).map((key) => {
                                                    return <div style={{ color: "red" }}>{confimPasswordErr[key]}</div>
                                                })
                                            }
                                        </div>

                                    </div>
                                    <div className="text-center">
                                        <button type="submit">Register</button>
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

export default Register;