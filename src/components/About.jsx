
function About() {
  return (
    <section className="relative w-full h-screen" id="about">
      {/* Background Image (absolute + fixed) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/6140b4dd4dbc473a0148e51c/1631918829528-2UTXPMQKUD4TTEHVMFQO/ravioli.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content Box */}
      <div className="relative z-20 flex justify-center items-center h-full px-6">
        <div className="bg-white/90 py-20 px-16 min-h-[500px] shadow-xl max-w-4xl w-full text-center">
          <h3 className="text-4xl font-semibold mb-8">
            A Fresh and <br /> Seasonal Cuisine
          </h3>
          <p className="text-black text-lg mb-8">
            Experience the best of seasonal cuisine with our chef’s signature creations.
          </p>
          <a
            href="#menu"
            className="bg-[#452829] text-white px-8 py-4 text-sm tracking-widest hover:bg-yellow-900 transition"
          >
            About Lawrence
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;