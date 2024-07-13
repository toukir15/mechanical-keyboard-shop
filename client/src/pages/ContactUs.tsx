const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 min-h-[calc(100vh-110px)] flex items-center justify-center">
      <div className="w-full max-w-lg">
        <p className="text-4xl  font-semibold text-white mb-8 mt-5 ">
          Send Us A Message
        </p>
        <form autoComplete="off" className="text-white">
          <div className="mb-5 sm:mb-7 md:mb-10">
            <label htmlFor="name">
              I am <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-gray appearance-none focus:outline-none"
              placeholder="Your name here.."
              required
              autoComplete="off"
              autoFocus={true}
            />
          </div>
          <div className="flex gap-12 justify-between mb-5 sm:mb-7 md:mb-10 mt-5">
            <div className="w-full">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-gray appearance-none focus:outline-none"
                placeholder="you@example.com"
                required
                autoComplete="off"
                autoFocus={true}
              />
            </div>
          </div>
          <div>
            <label htmlFor="projectDetails">
              Tell us about yourself <span>*</span>
            </label>
            <input
              type="text"
              name="projectDetails"
              id="projectDetails"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-gray appearance-none focus:outline-none"
              placeholder="e.g. about yourself"
              required
              autoComplete="off"
              autoFocus={true}
            />
          </div>
          <div className="flex items-center gap-3 mt-10 group">
            <button
              type="submit"
              className="py-3 px-7 rounded-full bg-orange-600 hover:bg-orange-700 transition duration-150 text-black text-body font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
