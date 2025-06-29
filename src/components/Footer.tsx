import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" className="text-primary" size={24} />
              <h3 className="text-xl font-montserrat font-bold">
                NailArt Studio
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональное наращивание ногтей и уникальный дизайн для
              каждого клиента.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="User" size={16} />
                <span>Кира Сергеевна</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Дмитров, рп Рыбное, д. 36</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <a
                  href="tel:+79586358975"
                  className="hover:text-primary transition-colors"
                >
                  8(958)635-89-75
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Вс: 10:00 - 21:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Наращивание ногтей</li>
              <li>Дизайн ногтей</li>
              <li>Коррекция</li>
              <li>Маникюр</li>
              <li>Покрытие гель-лаком</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NailArt Studio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
