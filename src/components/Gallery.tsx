import { Card } from "@/components/ui/card";

const Gallery = () => {
  const works = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop&crop=center",
      title: "Френч с дизайном",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=400&h=400&fit=crop&crop=center",
      title: "Градиентный маникюр",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop&crop=center",
      title: "Стразы и блестки",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
      title: "Геометрический дизайн",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1609392266998-b4fbeebe6f6d?w=400&h=400&fit=crop&crop=center",
      title: "Цветочные мотивы",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=400&fit=crop&crop=center",
      title: "Минимализм",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1562887284-5c85c9e9e8c3?w=400&h=400&fit=crop&crop=center",
      title: "Омбре с золотом",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Галерея работ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите на наши лучшие работы и выберите дизайн для себя
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <Card
              key={work.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-pink-100"
            >
              <div className="relative group">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{work.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
