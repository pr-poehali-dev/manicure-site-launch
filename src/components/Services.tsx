import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Наращивание ногтей",
      description:
        "Гелевое и акриловое наращивание любой длины и формы. Прочность и красота на долгое время.",
      features: ["Гель", "Акрил", "Любая форма", "До 4 недель носки"],
    },
    {
      icon: "Palette",
      title: "Дизайн ногтей",
      description:
        "Уникальные дизайны от простых до сложных. Роспись, стразы, градиенты и авторские техники.",
      features: ["Роспись", "Стразы", "Градиент", "Авторский дизайн"],
    },
    {
      icon: "RefreshCw",
      title: "Коррекция",
      description:
        "Своевременная коррекция для поддержания идеального вида ваших ногтей.",
      features: ["Быстро", "Качественно", "Доступно", "Регулярно"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг для красоты ваших ногтей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-pink-100 animate-fade-in"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center space-x-2"
                    >
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
