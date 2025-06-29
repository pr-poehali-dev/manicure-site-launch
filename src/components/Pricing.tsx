import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const services = [
    {
      category: "Наращивание",
      items: [
        { name: "Гелевое наращивание", price: "2500₽" },
        { name: "Акриловое наращивание", price: "2800₽" },
        { name: "Коррекция наращенных", price: "1800₽" },
      ],
    },
    {
      category: "Дизайн",
      items: [
        { name: "Простой дизайн", price: "500₽" },
        { name: "Сложный дизайн", price: "1000₽" },
        { name: "Стразы (за 1 шт)", price: "50₽" },
      ],
    },
    {
      category: "Другие услуги",
      items: [
        { name: "Маникюр классический", price: "1200₽" },
        { name: "Покрытие гель-лаком", price: "1500₽" },
        { name: "Снятие покрытия", price: "300₽" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Цены на услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Прозрачные цены без скрытых доплат
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((category, index) => (
            <Card
              key={index}
              className="border-pink-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            >
              <CardHeader className="text-center bg-gradient-to-r from-primary to-secondary text-white">
                <CardTitle className="text-xl font-montserrat font-semibold">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex justify-between items-center py-2 border-b border-pink-100 last:border-b-0"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-semibold text-primary">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-md mx-auto border-primary bg-gradient-to-br from-pink-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <Icon
                name="Phone"
                size={32}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">
                Записаться на прием
              </h3>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами для записи на удобное время
              </p>
              <Button asChild size="lg" className="w-full">
                <a href="tel:+79586358975">
                  <Icon name="Phone" size={20} className="mr-2" />
                  8(958)635-89-75
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
