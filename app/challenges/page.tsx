export default function Challenges() {
  const learnings = [
    {
      title: "Stepping Out of My Comfort Zones",
      content: "I used to fear making mistakes and receiving criticism, which made it difficult to try new things. However, I gradually learned to embrace new experiences and accept feedback as a tool for improvement. This shift in mindset allowed me to grow more comfortable with challenges and become more open to learning, helping me step outside of my comfort zone."
    },
    {
      title: "Accepting That Not Everything Will Turn Out According to Plan",
      content: "It was hard to let go of my expectations and accept that my dreams might not unfold exactly as I envisioned. Over time, I learned to trust that everything happens for a reason, and I began to embrace flexibility. By adjusting my goals and being open to new paths, I discovered that setbacks could lead to unexpected opportunities."
    },
    {
      title: "Take the Risk or Lose the Chance",
      content: "I often hesitated, thinking there would always be another chance. However, I eventually realized that waiting for the “perfect moment“ could result in missed opportunities. I learned to be braver, taking risks and acting decisively. This change in perspective taught me that growth often comes from stepping into the unknown and seizing the moment."
    }
  ];

  return (
    <section className="bg-gray-50 min-h-screen pt-32 pb-16">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Challenges and How Did I Overcome Them</h1>
          <p className="text-xl text-gray-600">
            Reflections on challenges that shaped me as a person
          </p>
        </div>

        <div className="space-y-12">
          {learnings.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="leading-relaxed">{item.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
