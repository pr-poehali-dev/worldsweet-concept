import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Product {
  id: number;
  name: string;
  country: string;
  category: string;
  price: number;
  image: string;
  description: string;
  weight: string;
  ingredients: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Японское Моти Ассорти',
    country: 'Япония',
    category: 'Мармелад',
    price: 890,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/815f9792-6f2e-40f9-bd7f-4db0426b2d57.jpg',
    description: 'Нежные рисовые лепёшки моти с разнообразными начинками: клубника, матча, красная фасоль',
    weight: '250 г',
    ingredients: 'Рис, сахар, начинка (клубника, зеленый чай матча, красная фасоль), крахмал'
  },
  {
    id: 2,
    name: 'Pocky Strawberry',
    country: 'Япония',
    category: 'Печенье',
    price: 450,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/815f9792-6f2e-40f9-bd7f-4db0426b2d57.jpg',
    description: 'Хрустящие палочки с клубничной глазурью — классика японских сладостей',
    weight: '45 г',
    ingredients: 'Пшеничная мука, сахар, клубничный порошок, какао-масло, молоко'
  },
  {
    id: 3,
    name: 'Reeses Peanut Butter Cups',
    country: 'США',
    category: 'Шоколад',
    price: 520,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/a1b5f883-00ae-4fd2-bd73-bc76951df0b7.jpg',
    description: 'Легендарные шоколадные чашечки с арахисовым маслом от Reeses',
    weight: '42 г',
    ingredients: 'Молочный шоколад, арахисовое масло, сахар, какао, соевый лецитин'
  },
  {
    id: 4,
    name: 'Sour Patch Kids',
    country: 'США',
    category: 'Мармелад',
    price: 380,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/a1b5f883-00ae-4fd2-bd73-bc76951df0b7.jpg',
    description: 'Кислые мармеладки в форме человечков — сначала кислые, потом сладкие',
    weight: '141 г',
    ingredients: 'Сахар, инвертный сироп, кукурузный крахмал, лимонная кислота, натуральные ароматизаторы'
  },
  {
    id: 5,
    name: 'Niederegger Marzipan',
    country: 'Германия',
    category: 'Шоколад',
    price: 1200,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/837f9df8-6419-4b20-a510-57547ed4fd81.jpg',
    description: 'Премиальный марципан в темном шоколаде от легендарного производителя из Любека',
    weight: '200 г',
    ingredients: 'Миндаль 68%, сахар, темный шоколад, инвертный сироп'
  },
  {
    id: 6,
    name: 'Ritter Sport Knusperflakes',
    country: 'Германия',
    category: 'Шоколад',
    price: 290,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/837f9df8-6419-4b20-a510-57547ed4fd81.jpg',
    description: 'Молочный шоколад с хрустящими кукурузными хлопьями',
    weight: '100 г',
    ingredients: 'Сахар, какао-масло, сухое молоко, кукурузные хлопья, ваниль'
  },
  {
    id: 7,
    name: 'Pepsi Cola Classic',
    country: 'США',
    category: 'Напитки',
    price: 180,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/42add35c-844c-45fc-aa82-ef36c9e136bd.jpg',
    description: 'Легендарный газированный напиток с оригинальным вкусом колы от PepsiCo',
    weight: '330 мл',
    ingredients: 'Вода, сахар, двуокись углерода, краситель, натуральные ароматизаторы, кофеин'
  },
  {
    id: 8,
    name: 'Lays Classic',
    country: 'США',
    category: 'Чипсы',
    price: 150,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/42add35c-844c-45fc-aa82-ef36c9e136bd.jpg',
    description: 'Классические картофельные чипсы с солью — легендарный вкус от Lays',
    weight: '150 г',
    ingredients: 'Картофель, растительное масло, соль'
  },
  {
    id: 9,
    name: 'Doritos Nacho Cheese',
    country: 'США',
    category: 'Чипсы',
    price: 190,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/42add35c-844c-45fc-aa82-ef36c9e136bd.jpg',
    description: 'Кукурузные чипсы с насыщенным вкусом сыра начо',
    weight: '150 г',
    ingredients: 'Кукуруза, растительное масло, сырная приправа, соль, специи'
  },
  {
    id: 10,
    name: 'Mountain Dew',
    country: 'США',
    category: 'Напитки',
    price: 190,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/42add35c-844c-45fc-aa82-ef36c9e136bd.jpg',
    description: 'Энергетический газированный напиток с цитрусовым вкусом',
    weight: '330 мл',
    ingredients: 'Вода, сахар, лимонный сок, кофеин, натуральные ароматизаторы, консерванты'
  },
  {
    id: 11,
    name: 'Cheetos Crunchy',
    country: 'США',
    category: 'Чипсы',
    price: 170,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/42add35c-844c-45fc-aa82-ef36c9e136bd.jpg',
    description: 'Хрустящие кукурузные снеки с сырным вкусом',
    weight: '130 г',
    ingredients: 'Кукуруза, растительное масло, сырный порошок, соль'
  },
  {
    id: 12,
    name: 'Pepsi Max',
    country: 'США',
    category: 'Напитки',
    price: 180,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/42add35c-844c-45fc-aa82-ef36c9e136bd.jpg',
    description: 'Pepsi без сахара с максимальным вкусом',
    weight: '330 мл',
    ingredients: 'Вода, подсластители (аспартам, ацесульфам К), двуокись углерода, натуральные ароматизаторы, кофеин'
  },
  {
    id: 13,
    name: 'Lays Sour Cream & Onion',
    country: 'США',
    category: 'Чипсы',
    price: 160,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/42add35c-844c-45fc-aa82-ef36c9e136bd.jpg',
    description: 'Чипсы Lays со вкусом сметаны и лука',
    weight: '150 г',
    ingredients: 'Картофель, растительное масло, сметанно-луковая приправа, соль'
  },
  {
    id: 14,
    name: 'Mirinda Orange',
    country: 'США',
    category: 'Напитки',
    price: 170,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/42add35c-844c-45fc-aa82-ef36c9e136bd.jpg',
    description: 'Апельсиновый газированный напиток от PepsiCo',
    weight: '330 мл',
    ingredients: 'Вода, сахар, апельсиновый сок, двуокись углерода, натуральные ароматизаторы'
  },
  {
    id: 15,
    name: 'Doritos Cool Ranch',
    country: 'США',
    category: 'Чипсы',
    price: 190,
    image: 'https://cdn.poehali.dev/projects/635d7c78-5637-4eee-911f-f1a763f2c8d6/files/42add35c-844c-45fc-aa82-ef36c9e136bd.jpg',
    description: 'Кукурузные чипсы со вкусом прохладного ранча',
    weight: '150 г',
    ingredients: 'Кукуруза, растительное масло, приправа ранч, молочный порошок, специи'
  }
];

const countries = [
  { name: 'Все страны', flag: '🌍', color: 'bg-secondary' },
  { name: 'Япония', flag: '🇯🇵', color: 'bg-red-50 border-red-200' },
  { name: 'США', flag: '🇺🇸', color: 'bg-blue-50 border-blue-200' },
  { name: 'Германия', flag: '🇩🇪', color: 'bg-yellow-50 border-yellow-200' }
];

const categories = ['Все', 'Шоколад', 'Мармелад', 'Печенье', 'Чипсы', 'Напитки'];

export default function Index() {
  const [selectedCountry, setSelectedCountry] = useState('Все страны');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    delivery: 'courier',
    comment: ''
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const countryMatch = selectedCountry === 'Все страны' || product.country === selectedCountry;
      const categoryMatch = selectedCategory === 'Все' || product.category === selectedCategory;
      const searchMatch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return countryMatch && categoryMatch && searchMatch;
    });
  }, [selectedCountry, selectedCategory, searchQuery]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🍬</div>
            <div>
              <h1 className="text-2xl font-bold text-primary">WorldSweet</h1>
              <p className="text-sm text-muted-foreground">Сладости со всего мира</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden md:block">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="ghost" size="sm" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                  {cart.length}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center text-center relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">🎉 Новая коллекция</Badge>
            <h2 className="text-5xl font-bold mb-4 text-foreground">
              Эксклюзивные сладости из Японии, США и Европы
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Более 500 уникальных вкусов, которые невозможно найти в обычных магазинах
            </p>
            <Button size="lg" className="text-lg px-8">
              Смотреть каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Выберите страну</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries.map((country) => (
              <Card
                key={country.name}
                className={`cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                  selectedCountry === country.name ? 'ring-2 ring-primary' : ''
                } ${country.color}`}
                onClick={() => setSelectedCountry(country.name)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-2">{country.flag}</div>
                  <p className="font-semibold">{country.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="w-full justify-start">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold">
            Найдено товаров: {filteredProducts.length}
          </h3>
          <Button variant="outline">
            <Icon name="SlidersHorizontal" size={18} className="mr-2" />
            Фильтры
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-accent">
                  {product.country}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge variant="outline">{product.category}</Badge>
                </div>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
                  <p className="text-sm text-muted-foreground">{product.weight}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Icon name="Eye" size={16} />
                  </Button>
                  <Button size="sm" onClick={() => addToCart(product)}>
                    <Icon name="ShoppingCart" size={16} className="mr-1" />
                    В корзину
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card className="w-80 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Корзина</span>
                <Badge>{cart.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="max-h-60 overflow-auto">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between mb-2 pb-2 border-b last:border-0">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-primary font-semibold">{item.price} ₽</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeFromCart(index)}
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex-col gap-3">
              <div className="w-full flex justify-between text-lg font-bold">
                <span>Итого:</span>
                <span className="text-primary">{totalPrice} ₽</span>
              </div>
              <Button className="w-full" size="lg" onClick={() => setShowCheckout(true)}>
                Оформить заказ
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription>
                  {selectedProduct.country} • {selectedProduct.category}
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full rounded-lg"
                />
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Описание</h4>
                    <p className="text-muted-foreground">{selectedProduct.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Состав</h4>
                    <p className="text-sm text-muted-foreground">{selectedProduct.ingredients}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Вес</h4>
                    <p className="text-muted-foreground">{selectedProduct.weight}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-3xl font-bold text-primary mb-4">{selectedProduct.price} ₽</p>
                    <Button size="lg" className="w-full" onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}>
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Добавить в корзину
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Оформление заказа</DialogTitle>
            <DialogDescription>
              Заполните данные для доставки. Мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="bg-secondary/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Ваш заказ ({cart.length} товаров)</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.price} ₽</span>
                  </div>
                ))}
              </div>
              <div className="border-t mt-3 pt-3 flex justify-between font-bold text-lg">
                <span>Итого:</span>
                <span className="text-primary">{totalPrice} ₽</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">ФИО *</Label>
                <Input
                  id="name"
                  placeholder="Иван Иванов"
                  value={checkoutForm.name}
                  onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  placeholder="+7 (999) 123-45-67"
                  value={checkoutForm.phone}
                  onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                value={checkoutForm.email}
                onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Город *</Label>
              <Input
                id="city"
                placeholder="Москва"
                value={checkoutForm.city}
                onChange={(e) => setCheckoutForm({...checkoutForm, city: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Адрес доставки *</Label>
              <Textarea
                id="address"
                placeholder="Улица, дом, квартира"
                value={checkoutForm.address}
                onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="delivery">Способ доставки</Label>
              <Select value={checkoutForm.delivery} onValueChange={(value) => setCheckoutForm({...checkoutForm, delivery: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="courier">Курьером (300 ₽)</SelectItem>
                  <SelectItem value="pickup">Самовывоз (Бесплатно)</SelectItem>
                  <SelectItem value="post">Почта России (от 200 ₽)</SelectItem>
                  <SelectItem value="cdek">СДЭК (от 250 ₽)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Комментарий к заказу</Label>
              <Textarea
                id="comment"
                placeholder="Пожелания по доставке, подарочная упаковка и т.д."
                value={checkoutForm.comment}
                onChange={(e) => setCheckoutForm({...checkoutForm, comment: e.target.value})}
                rows={2}
              />
            </div>
          </div>

          <DialogFooter className="flex gap-3 mt-6">
            <Button variant="outline" onClick={() => setShowCheckout(false)}>
              Отмена
            </Button>
            <Button 
              size="lg" 
              onClick={() => {
                alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время');
                setShowCheckout(false);
                setCart([]);
              }}
            >
              Подтвердить заказ
              <Icon name="Check" size={18} className="ml-2" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
                <li><Link to="/about" className="hover:text-primary transition-colors">О нас</Link></li>
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