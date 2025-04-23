export default function FuturePlans() {
  const plans = [
    {
      title: "💻 Learn New Things",
      content: "I want to explore and master different software tools and platforms that will strengthen my technical abilities and expand my versatility as a future developer."
    },
    {
      title: "📚 Focus More on Studying",
      content: "I aim to be more disciplined with my time and avoid procrastination. Prioritizing my studies will help me stay on track and reach my academic goals more effectively."
    },
    {
      title: "🎓 Graduate with a Degree",
      content: "One of my biggest goals is to finish my studies and graduate. Earning my degree will be a major milestone that opens doors to better opportunities."
    },
    {
      title: "👨‍👩‍👧 Support My Family",
      content: "I want to give back to my family for everything they've done for me. Helping them financially and emotionally is a strong personal motivation for my success."
    },
    {
      title: "🌱 Prioritizing Personal Growth",
      content: "I want to grow as an individual and learn to put myself first when necessary. This includes building self-respect, confidence, and emotional resilience."
    }
  ];

  return (
    <section className="bg-gray-50 min-h-screen pt-32 pb-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">My Future Plans and Aspirations</h1>
          <p className="text-xl text-gray-600">
            The path I envision for my personal and professional growth
          </p>
        </div>

        <div className="relative">
          {/* Vertical dotted line */}
          <div className="hidden md:block absolute left-1/2 top-4 h-full w-0.5 border-dotted border-l-2 border-pink-300 transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-2">
            {plans.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} items-start relative`}
              >
                <div className="absolute top-22 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 border-4 border-white rounded-full z-10"></div>

                <div
                  className={`w-full md:w-5/12 rounded-2xl shadow-lg p-5 bg-white border border-gray-100 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
      <blockquote className="text-l italic text-gray-600 max-w-2xl mx-auto">
        “The future belongs to those who believe in the beauty of their dreams.”<br />
        <span className="block mt-2 font-semibold text-gray-800">– Eleanor Roosevelt</span>
      </blockquote>
    </div>
      </div>
    </section>
  );
}
