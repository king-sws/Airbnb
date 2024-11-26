const Contact = () => {
  return (
    <section id="contact" className="py-10 ">
      <div className="container mx-auto px-6">
        <div className="text-start mb-10">
          <p className="text-orange-500 font-semibold text-2xl lg:text-3xl">Our Contact Us</p>
          <p className="font-bold text-3xl text-blue-900 lg:text-4xl mt-2">Easy to Contact Us</p>
          <p className="text-gray-600 mt-3 text-base leading-6 max-w-[470px] tracking-wide">
            We are always ready to help by providing the best services to you. We believe a good place to live can make your life better.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex flex-col lg:flex-row gap-4">
              <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300" 
            />
            </div>
            
            <textarea 
              placeholder="Message" 
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 h-40 resize-none" 
            ></textarea>
            <button 
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full lg:w-auto"
            >
              Send Message
            </button>
          </div>
          <div className="hidden justify-center items-center md:flex">
            <img 
              src="./contact.jpg" 
              alt="Contact Us" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
