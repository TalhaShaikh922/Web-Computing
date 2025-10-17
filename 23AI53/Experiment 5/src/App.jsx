import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    password: "",
    email: "",
    mobile: "",
    address: ""
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    setMessage("");
  }

  function validate() {
    const errs = {};
    const fname = form.fname.trim();
    if (!/^[A-Za-z]+$/.test(fname)) {
      errs.fname = "First name: alphabets only.";
    } else if (fname.length < 6) {
      errs.fname = "First name must be at least 6 characters.";
    }

    if (!form.lname.trim()) errs.lname = "Last name cannot be empty.";

    if (!form.password || form.password.length < 6) {
      errs.password = "Password must be at least 6 characters.";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(form.email.trim())) {
      errs.email = "Enter a valid email (name@domain.com).";
    }

    if (!/^\d{10}$/.test(form.mobile.trim())) {
      errs.mobile = "Mobile must be exactly 10 digits.";
    }

    if (!form.address.trim()) errs.address = "Address cannot be empty.";

    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setMessage(`✔ Registration successful — Welcome, ${form.fname}!`);
      setForm({ fname: "", lname: "", password: "", email: "", mobile: "", address: "" });
    } else {
      setMessage("");
    }
  }

  return (
    <div className="page-root">
      <header className="site-header">
        <div className="header-inner">
          <h1>Anjuman-I-Islam's Kalsekar Technical Campus</h1>
          <p>Affiliated to University of Mumbai • AICTE Approved</p>
        </div>
      </header>

      <nav className="site-nav">
        <a href="#home">Home</a>
        <a href="#departments">Departments</a>
        <a href="#facilities">Facilities</a>
        <a href="#contact">Contact</a>
      </nav>

      <main className="main">
        <section className="panel">
          <h2>Student Registration</h2>
          <p className="lead">Fill the details below. Client-side validation will check fields.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label>First Name</label>
              <input name="fname" value={form.fname} onChange={handleChange} placeholder="First name" />
              {errors.fname && <div className="err">{errors.fname}</div>}
            </div>

            <div className="form-row">
              <label>Last Name</label>
              <input name="lname" value={form.lname} onChange={handleChange} placeholder="Last name" />
              {errors.lname && <div className="err">{errors.lname}</div>}
            </div>

            <div className="form-row">
              <label>Password</label>
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
              {errors.password && <div className="err">{errors.password}</div>}
            </div>

            <div className="form-row">
              <label>Email</label>
              <input name="email" value={form.email} onChange={handleChange} placeholder="name@domain.com" />
              {errors.email && <div className="err">{errors.email}</div>}
            </div>

            <div className="form-row">
              <label>Mobile</label>
              <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit mobile" />
              {errors.mobile && <div className="err">{errors.mobile}</div>}
            </div>

            <div className="form-row">
              <label>Address</label>
              <textarea name="address" value={form.address} onChange={handleChange} placeholder="Your address"></textarea>
              {errors.address && <div className="err">{errors.address}</div>}
            </div>

            <div className="actions">
              <button type="submit" className="btn primary">Register</button>
              <button type="button" className="btn neutral" onClick={() => { setForm({ fname: "", lname: "", password: "", email: "", mobile: "", address: "" }); setErrors({}); setMessage(""); }}>Clear</button>
            </div>

            {message && <div className="success">{message}</div>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>© 2025 Anjuman-I-Islam's Kalsekar Technical Campus</div>
        <div>Prepared by: <strong>Shaikh Shahbaz Alam</strong> | Roll No: <strong>23AI56</strong> | Batch: <strong>03</strong></div>
      </footer>
    </div>
  );
}