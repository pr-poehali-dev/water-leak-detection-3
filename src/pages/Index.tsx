import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '22+', label: 'Лет опыта', icon: 'Award' },
    { value: '100М+', label: 'м³ воды сохранено', icon: 'Droplet' },
    { value: '50%', label: 'Снижение потерь', icon: 'TrendingDown' },
    { value: '24/7', label: 'Техподдержка', icon: 'HeadphonesIcon' }
  ];

  const services = [
    {
      icon: 'Search',
      title: 'Обнаружение утечек',
      description: 'Комплексная проверка водопроводных сетей с применением передовых технологий акустической диагностики'
    },
    {
      icon: 'MapPin',
      title: 'Точная локализация',
      description: 'Определение точного местоположения скрытых подземных утечек с точностью до метра'
    },
    {
      icon: 'Activity',
      title: 'Мониторинг сетей',
      description: 'Постоянный контроль состояния трубопроводов и раннее выявление проблемных участков'
    },
    {
      icon: 'FlaskConical',
      title: 'R&D разработки',
      description: 'Исследования и внедрение инновационных методов диагностики водопроводных систем'
    }
  ];

  const technologies = [
    {
      name: 'Акустическая корреляция',
      description: 'Высокоточное оборудование для обнаружения утечек по звуковым волнам'
    },
    {
      name: 'Цифровые логгеры',
      description: 'Интеллектуальные устройства для круглосуточного мониторинга водопроводных сетей'
    },
    {
      name: 'Геофоны последнего поколения',
      description: 'Сверхчувствительные датчики для точной локализации места утечки'
    },
    {
      name: 'AI анализ данных',
      description: 'Машинное обучение для прогнозирования и предотвращения аварий'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-primary/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
                <Icon name="Droplet" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-primary">TDI</h1>
                <p className="text-xs text-muted-foreground">Technical Diagnostics International</p>
              </div>
            </div>
            
            <div className="hidden md:flex gap-6">
              {['Главная', 'О компании', 'Услуги', 'Технологии', 'Контакты'].map((item) => {
                const id = item === 'Главная' ? 'home' : 
                          item === 'О компании' ? 'about' :
                          item === 'Услуги' ? 'services' :
                          item === 'Технологии' ? 'technologies' : 'contacts';
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === id ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm">🌊 Решаем водный кризис с 2002 года</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Инновационные технологии обнаружения утечек воды
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы помогаем сохранить водные ресурсы планеты, обнаруживая скрытые утечки с точностью до метра. 
                Более 100 миллионов кубометров воды сохранено для потребления.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all"
                  onClick={() => scrollToSection('services')}
                >
                  <Icon name="Droplets" className="mr-2" size={20} />
                  Наши услуги
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                >
                  О компании
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
              <div className="relative bg-gradient-to-br from-secondary to-primary p-8 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={index} className="p-6 bg-white/95 backdrop-blur hover:shadow-lg transition-all hover:-translate-y-1">
                      <Icon name={stat.icon as any} className="text-primary mb-3" size={32} />
                      <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary">О компании</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Technical Diagnostics International — лидер в области обнаружения скрытых утечек воды в Израиле
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-t-primary">
              <Icon name="Target" className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-heading font-bold mb-3">Наша миссия</h3>
              <p className="text-muted-foreground">
                Сохранение водных ресурсов планеты через инновационные технологии обнаружения и локализации утечек
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-t-accent">
              <Icon name="History" className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-heading font-bold mb-3">Опыт</h3>
              <p className="text-muted-foreground">
                Основатель Владимир Фрумс начал работу в 1988 году, постоянно разрабатывая новые технологии и системы
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-t-secondary">
              <Icon name="TrendingUp" className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-heading font-bold mb-3">Результаты</h3>
              <p className="text-muted-foreground">
                Более 100 миллионов кубометров воды сохранено. Экономия растёт в геометрической прогрессии ежегодно
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для диагностики водопроводных сетей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary">Технологии</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Передовое оборудование и методы диагностики
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all hover:border-primary group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon name="Cpu" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Готовы начать экономить воду и финансовые средства? Свяжитесь с нашими специалистами для консультации
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <Icon name="Phone" className="text-white mx-auto mb-2" size={24} />
              <p className="font-semibold">Телефон</p>
              <p className="text-sm opacity-90">+972-XX-XXX-XXXX</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <Icon name="Mail" className="text-white mx-auto mb-2" size={24} />
              <p className="font-semibold">Email</p>
              <p className="text-sm opacity-90">info@tdi.co.il</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <Icon name="MapPin" className="text-white mx-auto mb-2" size={24} />
              <p className="font-semibold">Адрес</p>
              <p className="text-sm opacity-90">Израиль</p>
            </Card>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            <Icon name="Send" className="mr-2" size={20} />
            Отправить запрос
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 bg-secondary/10 border-t border-primary/10">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Technical Diagnostics International. Все права защищены.</p>
          <p className="text-sm mt-2">Сохраняем водные ресурсы планеты с 2002 года</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
