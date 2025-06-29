import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-pink-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <h1 className="text-2xl font-montserrat font-bold text-primary">
              NailArt Studio
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              О мастере
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Прайс
            </a>
          </nav>

          <Button asChild className="hidden md:flex items-center space-x-2">
            <a href="tel:+79586358975">
              <Icon name="Phone" size={16} />
              <span>8(958)635-89-75</span>
            </a>
          </Button>

          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
