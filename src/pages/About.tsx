import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-4xl">🍬</div>
            <div>
              <h1 className="text-2xl font-bold text-primary">WorldSweet</h1>
              <p className="text-sm text-muted-foreground">Сладости со всего мира</p>
            </div>
          </Link>
          
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Icon name="Home" size={20} className="mr-2" />
              На главную
            </Button>
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">О нашей компании</h2>
            <p className="text-xl text-muted-foreground">
              WorldSweet — это страсть к уникальным вкусам со всего мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-3">Наша миссия</h3>
                <p className="text-muted-foreground">
                  Мы открываем для вас мир эксклюзивных сладостей, которые невозможно найти 
                  в обычных магазинах. Каждый продукт — это маленькое гастрономическое путешествие.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3">Что нас отличает</h3>
                <p className="text-muted-foreground">
                  Прямые поставки от производителей, строгий контроль качества и проверенная 
                  логистика. Мы гарантируем свежесть и оригинальность каждого продукта.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl font-bold mb-8 text-center">История WorldSweet</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary font-bold text-xl">2018</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Начало пути</h4>
                  <p className="text-muted-foreground">
                    Все началось с небольшого магазинчика в Москве, где мы продавали японские 
                    сладости. Мы заметили огромный интерес покупателей к необычным вкусам.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary font-bold text-xl">2020</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Расширение географии</h4>
                  <p className="text-muted-foreground">
                    Добавили в ассортимент сладости из США и Европы. Наладили партнёрство с 
                    ведущими производителями. Начали онлайн-продажи по всей России.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary font-bold text-xl">2022</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Собственный склад</h4>
                  <p className="text-muted-foreground">
                    Открыли современный склад с климат-контролем для правильного хранения 
                    деликатесных продуктов. Увеличили штат до 25 сотрудников.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary font-bold text-xl">2024</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Сегодня</h4>
                  <p className="text-muted-foreground">
                    Более 500 уникальных продуктов в каталоге, доставка в 85 регионов России, 
                    10 000+ довольных клиентов. WorldSweet — лидер по импорту редких сладостей.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Товаров в каталоге</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">85</div>
                <p className="text-muted-foreground">Регионов доставки</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Наши ценности</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <div className="text-3xl mb-2">✨</div>
                  <h4 className="font-semibold mb-2">Качество</h4>
                  <p className="text-sm opacity-90">
                    Работаем только с проверенными производителями
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold mb-2">Быстрая доставка</h4>
                  <p className="text-sm opacity-90">
                    Отправляем заказы в день оформления
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💝</div>
                  <h4 className="font-semibold mb-2">Забота</h4>
                  <p className="text-sm opacity-90">
                    Каждый клиент важен для нас
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Link to="/">
              <Button size="lg">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🍬</span>
                WorldSweet
              </h3>
              <p className="text-sm text-muted-foreground">
                Лучшие сладости со всего мира с доставкой по России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Япония</li>
                <li>США</li>
                <li>Германия</li>
                <li>Все товары</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@worldsweet.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-35-35
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 WorldSweet. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}
