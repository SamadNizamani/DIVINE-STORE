const Contact = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6 text-center">Contact Us</h1>
        
        <p className="text-lg text-gray-700 mb-4 text-center">
          We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </p>
  
        <form className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500" 
              placeholder="Your Name" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500" 
              placeholder="Your Email" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500" 
              placeholder="Your Message" 
              required 
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  