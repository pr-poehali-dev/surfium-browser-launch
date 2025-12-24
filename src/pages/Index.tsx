import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.innerHTML = '❄';
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
      snowflake.style.opacity = (Math.random() * 0.6 + 0.4).toString();
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 8000);
    };

    const snowInterval = setInterval(createSnowflake, 300);
    return () => clearInterval(snowInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#1e2a3d] to-[#1A1F2C]">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Globe" className="text-background" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">Surfium</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors">
              Возможности
            </button>
            <button onClick={() => scrollToSection('download')} className="text-foreground hover:text-primary transition-colors">
              Скачать
            </button>
            <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">
              Конфиденциальность
            </Link>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 flex justify-center gap-2">
            <span className="text-6xl animate-bounce">🎄</span>
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎁</span>
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
            Surfium
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Новогодний подарок для вашей приватности. Браузер будущего уже скоро!
          </p>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">Запуск через:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Дней', value: timeLeft.days },
                { label: 'Часов', value: timeLeft.hours },
                { label: 'Минут', value: timeLeft.minutes },
                { label: 'Секунд', value: timeLeft.seconds },
              ].map((item) => (
                <Card key={item.label} className="p-6 bg-card border-2 border-primary/50 twinkle">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-semibold text-lg px-8 py-6">
              <Icon name="Bell" className="mr-2" size={20} />
              Уведомить о запуске
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть трейлер
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Возможности Surfium
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Защита данных',
                description: 'Встроенное шифрование всех данных и защита от трекеров по умолчанию',
                color: 'from-primary to-yellow-400',
              },
              {
                icon: 'Lock',
                title: 'Приватность',
                description: 'Полная анонимность в сети без компромиссов с удобством использования',
                color: 'from-secondary to-red-400',
              },
              {
                icon: 'Zap',
                title: 'Скорость',
                description: 'Мгновенная загрузка страниц с оптимизированным движком',
                color: 'from-primary to-white',
              },
              {
                icon: 'Eye',
                title: 'Блокировка слежки',
                description: 'Автоматическая блокировка всех видов отслеживания активности',
                color: 'from-secondary to-pink-400',
              },
              {
                icon: 'Database',
                title: 'Локальное хранение',
                description: 'Все ваши данные хранятся локально, никогда не попадая на серверы',
                color: 'from-primary to-blue-400',
              },
              {
                icon: 'Smartphone',
                title: 'Кроссплатформенность',
                description: 'Доступен на Windows, macOS, Linux, iOS и Android',
                color: 'from-secondary to-orange-400',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border-2 border-primary/30"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 mx-auto`}>
                  <Icon name={feature.icon} className="text-background" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
              Скачать Surfium
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Браузер станет доступен для загрузки 1 января 2026 года в 00:00
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Monitor', name: 'Windows', version: '10/11' },
                { icon: 'Apple', name: 'macOS', version: '12+' },
                { icon: 'Laptop', name: 'Linux', version: 'Ubuntu/Debian' },
              ].map((platform, index) => (
                <Card key={index} className="p-8 bg-card hover:bg-card/80 transition-all border-2 border-primary/30">
                  <Icon name={platform.icon} className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground mb-6">{platform.version}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-background" disabled>
                    <Icon name="Download" className="mr-2" size={18} />
                    Скоро доступно
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-secondary/10 border-2 border-secondary rounded-lg">
              <p className="text-lg">
                <Icon name="Gift" className="inline mr-2 text-secondary" size={24} />
                <span className="font-semibold text-secondary">Новогодняя акция:</span> Первые 10,000 пользователей получат премиум-функции бесплатно навсегда!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Есть вопросы? Мы всегда рады помочь!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card hover:bg-card/80 transition-all border-2 border-primary/30">
              <Icon name="Mail" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:support@surfium.com" className="text-primary hover:underline">
                support@surfium.com
              </a>
            </Card>

            <Card className="p-8 bg-card hover:bg-card/80 transition-all border-2 border-primary/30">
              <Icon name="MessageCircle" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-xl font-bold mb-2">Telegram</h3>
              <a href="https://t.me/surfium" className="text-primary hover:underline">
                @surfium
              </a>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Globe" className="text-background" size={18} />
            </div>
            <span className="font-bold text-primary">Surfium</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Конфиденциальность
            </Link>
            <span className="text-muted-foreground">© 2025 Surfium Browser</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
