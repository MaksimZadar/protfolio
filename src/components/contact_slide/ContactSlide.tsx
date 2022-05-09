import './ContactSlide.scss'
export default function ContactSlide() {
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
              <div className="row col-12">
                <label className="font-bold text-white">Name</label>
                <input type="name" className="form-group-input" placeholder="John Doe" required />
              </div>
              <div className="row col-12">
                <label className="font-bold text-white">Email</label>
                <input type="email" className="form-group-input" placeholder="example@mail.com" required />
              </div>
              <div className="row col-12 mb-2">
                <label className="font-bold text-white">Message</label>
                <textarea placeholder="Enter your message" required></textarea>
              </div>
              <div className="row col-12">
                <button className="btn-success">Send!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}