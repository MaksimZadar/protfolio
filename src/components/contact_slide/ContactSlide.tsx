import { useState } from 'react';
import './ContactSlide.scss'
export default function ContactSlide() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="hero fullscreen bg-gray-800" id="contact">
      <div className="hero-body">
        <div className="content">
          <div className="row">
            <div className="col-6">
              <h1 className="title text-white">Contact me</h1>
              <h3 className="subtitle text-success">using this form.</h3>
            </div>
            <div className="col-6">
              <form name="contact-form" method="POST">
                <input type="hidden" name="form-name" value="contact-form" />
                <div className="row col-12">
                  <label className="font-bold text-white">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={val => setName(val.target.value)}
                    className="form-group-input"
                    placeholder="John Doe"
                    name='name'
                    required />
                </div>
                <div className="row col-12">
                  <label className="font-bold text-white">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={val => setEmail(val.target.value)}
                    className="form-group-input"
                    placeholder="example@mail.com"
                    name='email'
                    required />
                </div>
                <div className="row col-12 mb-2">
                  <label className="font-bold text-white">Message</label>
                  <textarea
                    value={message}
                    onChange={val => setMessage(val.target.value)}
                    placeholder="Enter your message"
                    name='message'
                    required></textarea>
                </div>
                <div className="row col-12">
                  <button type="submit" className="btn-success">Send!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}