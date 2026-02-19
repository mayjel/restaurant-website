function Contact() {
  return (
    <section className="w-full bg-white py-24 flex flex-col items-center">
      
      <h2 className="text-4xl md:text-7xl font-bold mb-6 text-center">
        Reserve a Table
      </h2>

      <p className="text-1xl md:text-3xl text-center mb-12 max-w-4xl">
        Select your details and we’ll try to get the best seats for you.
      </p>

      {/* Form */}
      <form className="w-full max-w-6xl flex flex-wrap justify-center gap-10">
        
        {/* Party Size */}
        <div className="w-[300px] flex flex-col">
          <label className="mb-3 text-xl font-semibold">
            Party Size
          </label>
          <select className="border rounded-xl p-4 text-xl text-gray-700">
            <option disabled defaultValue>
              Select
            </option>
            <option>1 person</option>
            <option>2 people</option>
            <option>3 people</option>
            <option>4 people</option>
            <option>5+ people</option>
          </select>
        </div>

        {/* Date */}
        <div className="w-[300px] flex flex-col">
          <label className="mb-3 text-xl font-semibold">
            Date
          </label>
          <input
            type="date"
            className="border rounded-xl p-4 text-xl text-gray-700"
          />
        </div>

        {/* Time */}
        <div className="w-[300px] flex flex-col">
          <label className="mb-3 text-xl font-semibold">
            Time
          </label>
          <select className="border rounded-xl p-4 text-xl text-gray-700">
            <option disabled defaultValue>
              Select
            </option>
            <option>10:00 AM</option>
            <option>12:00 PM</option>
            <option>2:00 PM</option>
            <option>6:00 PM</option>
            <option>8:00 PM</option>
          </select>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mt-10">
          <button
            type="submit"
            className="px-16 py-6 bg-[#452829] text-white rounded-2xl hover:bg-gray-600 transition text-3xl font-bold"
          >
            Find a Table
          </button>
        </div>

      </form>

    </section>
  );
}

export default Contact;
