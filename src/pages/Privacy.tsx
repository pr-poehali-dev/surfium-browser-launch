import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#1e2a3d] to-[#1A1F2C]">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Globe" className="text-background" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">Surfium</span>
          </Link>
          <Link to="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              На главную
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <Icon name="ShieldCheck" className="text-background" size={48} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Политика конфиденциальности
            </h1>
            <p className="text-xl text-muted-foreground">
              Ваша приватность — наш главный приоритет
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-card border-2 border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Eye" className="text-background" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Что мы НЕ собираем</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Историю посещённых вами сайтов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Личную информацию и данные о вас</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Куки и трекеры для рекламы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>IP-адреса и местоположение</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-secondary mt-1 flex-shrink-0" size={18} />
                      <span>Данные для продажи третьим лицам</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Lock" className="text-background" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Как мы защищаем ваши данные</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Сквозное шифрование:</strong> Все данные шифруются на вашем устройстве до отправки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Локальное хранение:</strong> Закладки, пароли и настройки хранятся только на вашем устройстве</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Блокировка трекеров:</strong> Автоматическая защита от рекламных и аналитических трекеров</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>DNS-over-HTTPS:</strong> Защищённые DNS-запросы для скрытия вашей активности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Открытый код:</strong> Исходный код доступен для аудита безопасности</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Database" className="text-background" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Минимальные технические данные</h2>
                  <p className="text-muted-foreground mb-4">
                    Для работы браузера мы собираем только необходимый минимум анонимных технических данных:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Версия браузера и операционной системы (для обновлений)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Анонимные отчёты о сбоях (только если вы разрешите)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Базовая статистика производительности для улучшения браузера</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <p className="text-sm text-foreground">
                      <Icon name="AlertCircle" className="inline mr-2 text-primary" size={18} />
                      Все эти данные полностью анонимны и не могут быть связаны с вами лично
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="text-background" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Ваши права</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Право на забвение:</strong> Вы можете удалить все данные в любой момент</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Прозрачность:</strong> Мы открыто рассказываем о наших методах защиты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Контроль:</strong> Вы полностью контролируете свои настройки приватности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>Без рекламы:</strong> Мы никогда не будем показывать таргетированную рекламу</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" className="text-background" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Соблюдение законодательства</h2>
                  <p className="text-muted-foreground mb-4">
                    Surfium полностью соответствует международным стандартам защиты данных:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>GDPR:</strong> Европейский регламент по защите персональных данных</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>CCPA:</strong> Калифорнийский закон о защите прав потребителей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span><strong>152-ФЗ:</strong> Российский закон о персональных данных</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-secondary/10 border-2 border-secondary">
              <div className="text-center">
                <Icon name="Mail" className="mx-auto mb-4 text-secondary" size={48} />
                <h2 className="text-2xl font-bold mb-4">Есть вопросы?</h2>
                <p className="text-muted-foreground mb-6">
                  Если у вас есть вопросы о нашей политике конфиденциальности, свяжитесь с нами
                </p>
                <a href="mailto:privacy@surfium.com">
                  <Button className="bg-secondary hover:bg-secondary/90 text-background">
                    <Icon name="Mail" className="mr-2" size={18} />
                    privacy@surfium.com
                  </Button>
                </a>
              </div>
            </Card>

            <div className="text-center text-sm text-muted-foreground pt-8">
              <p>Последнее обновление: Декабрь 2025</p>
              <p className="mt-2">Документ вступает в силу с момента запуска Surfium - 1 января 2026 года</p>
            </div>
          </div>
        </div>
      </div>

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

export default Privacy;
