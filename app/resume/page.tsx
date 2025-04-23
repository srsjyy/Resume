export default function ResumePage() {
  return (
    <section className="bg-gray-50 min-h-screen pt-32 pb-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">My Resume</h1>
          <p className="text-xl text-gray-600 mb-6">
            A visual representation of my education, experience, and skills.
          </p>
          <a
            href="/Resume.pdf" // Replace with the actual path to your PDF
            download
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-md hover:bg-pink-500 transition"
            >
            📄 Download Resume
          </a>
        </div>

        <div className="text-center mt-8">
          <img
            src="/my-resume.jpg" // Replace with the path to your resume image
            alt="My Resume"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
