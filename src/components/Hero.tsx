import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 leading-tight">
              Наращивание ногтей
              <span className="text-primary block">и дизайн</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Создаем красивые и прочные ногти с уникальным дизайном.
              Профессиональные материалы и индивидуальный подход к каждому
              клиенту.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на прием
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Icon name="Image" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop&crop=center"
                alt="Красивый маникюр с дизайном"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">
                    Довольных клиентов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-600">Года опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
