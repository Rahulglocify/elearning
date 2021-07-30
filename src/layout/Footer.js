import React, { useState } from "react";

function Footer() {
    const [email, setEmail] = useState("");

    const [emailErr, setEmailErr] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    async function newsLetter(e) {
        e.preventDefault();

        let isValid = formValidation();
        let item = { email }
        if (isValid) {
            let result = await fetch('http://127.0.0.1:8000/api/newsletter', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            console.log(result.status);
            if (result.status == false) {
                emailErr.emailAlreadyRegistered = result.message;
                setEmailErr(emailErr);
                setSuccessMessage(null);
            }
            if (result.status == true) {
                setSuccessMessage(result.message);
                setEmail("");
                setEmailErr({});
            }
        }
    }

    function formValidation() {
        const emailErr = {};
        let isValid = true;
        if (email.trim() === "") {
            emailErr.emailEmpty = "Please enter E-mail address!";
            isValid = false;
        } else if (email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                emailErr.emailPattern = "Please Enter Valid E-mail Address."
                isValid = false;
            }
        }
        setSuccessMessage(null);
        setEmailErr(emailErr);

        return isValid
    }
    return (
        <div>
            <footer id="footer">

                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h3>Mentor</h3>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>

                            <div class="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <p id="success" style={{ color: "green" }}>{successMessage}</p>
                                <form action="" method="post" onSubmit={newsLetter}>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                                {
                                    Object.keys(emailErr).map((key) => {
                                        return <div style={{ color: "red" }}>{emailErr[key]}</div>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container d-md-flex py-4">

                    <div class="mr-md-auto text-center text-md-left">
                        <div class="copyright">
                            &copy; Copyright <strong><span>Mentor</span></strong>. All Rights Reserved
                        </div>
                    </div>
                    <div class="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </footer>
            <a className="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
            <div id="preloader"></div>
        </div>
    );
}

export default Footer