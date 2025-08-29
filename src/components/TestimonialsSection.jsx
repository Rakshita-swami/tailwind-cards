import user1 from '../assets/user1.webp';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.webp';
import user5 from '../assets/user5.jpg';
import user6 from '../assets/user6.jpg';

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: user1,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    name: "John De Marli",
    image: user2,
    text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: user3,
    text: "When she reached the first hills of the Mountains, she had a last view back on the skyline of her hometown.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: user4,
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: user5,
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: user6,
    text: "What impressed me most was how quickly they responded to my requests. The team is professional and helpful.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What our happy clients say
        </h2>
        <p className="text-gray-600">
          Things that make it the best place to start trading
        </p>
      </div>

      {/* Scrollable on mobile, grid on desktop */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:overflow-visible scrollbar-hide">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-[80%] sm:min-w-0 bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition snap-center"
          >
            {/* Avatar */}
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Name */}
            <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>

            {/* Text */}
            <p className="text-gray-600 text-sm">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
