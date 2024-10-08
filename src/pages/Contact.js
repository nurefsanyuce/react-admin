import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "../redux/auth/authSlice";
import PageLayout from "../components/PageLayout";

// Contact Form Component
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      password,
    };

    // Redux'a kullanıcıyı kaydet
    dispatch(setUser(userData));

    // Kullanıcı bilgilerini göstereceğimiz sayfaya yönlendir
    navigate("/user-details");
  };

  return (
    <PageLayout>
      <div className="d-flex align-items-center justify-content-center w-100 h-100">
        <form className="contact-form w-50 " onSubmit={handleSubmit}>
          <div className="mb-2 row ">
            <label className="col-2">Ad:</label>
            <input
              className="form-control col"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-2 row">
            <label className="col-2">Soyad:</label>
            <input
              className="form-control col"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-2 row">
            <label className="col-2">Şifre:</label>
            <input
              className="form-control col"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-100 text-center">
            <button type="submit" className="btn btn-danger text-center">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

// User Details Component

export default Contact;
