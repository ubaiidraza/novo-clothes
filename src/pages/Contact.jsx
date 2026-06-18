const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-bold mb-10">
        Contact Us
      </h1>

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-4 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-4 rounded-lg"
        />

        <textarea
          rows="6"
          placeholder="Message"
          className="w-full border p-4 rounded-lg"
        />

        <button className="bg-black text-white px-8 py-3 rounded-lg">
          Send Message
        </button>

      </form>

    </div>
  );
};

export default Contact;