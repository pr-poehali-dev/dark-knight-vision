import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedQuote, setSelectedQuote] = useState(0);

  const quotes = [
    {
      text: "Я — месть.",
      character: "Бэтмен",
      context: "Первое появление"
    },
    {
      text: "Они думают, что я прячусь в тени. Но я сам — тень.",
      character: "Бэтмен",
      context: "Дневник мстителя"
    },
    {
      text: "Страх — это инструмент. Они боятся меня больше, чем своих боссов.",
      character: "Бэтмен",
      context: "Допрос"
    },
    {
      text: "Город не твой. Он принадлежит всем нам.",
      character: "Бэтмен",
      context: "Противостояние с Загадочником"
    },
    {
      text: "Я не спаситель. Я месть за тех, кто больше не может постоять за себя.",
      character: "Бэтмен",
      context: "Финал"
    }
  ];

  const timeline = [
    {
      year: "Детство",
      title: "Трагедия семьи Уэйнов",
      description: "Томас и Марта Уэйн убиты на глазах маленького Брюса. Эта ночь навсегда изменила его."
    },
    {
      year: "Юность",
      title: "Путь возмездия",
      description: "Брюс покидает Готэм, чтобы изучить криминальный мир изнутри и обучиться боевым искусствам."
    },
    {
      year: "Год второй",
      title: "Рождение Бэтмена",
      description: "Возвращение в Готэм. Создание костюма и личности темного мстителя, наводящего ужас на преступников."
    },
    {
      year: "Настоящее",
      title: "Война с коррупцией",
      description: "Охота на Загадочника раскрывает глубокую связь между элитой Готэма и преступным миром."
    }
  ];

  const enemies = [
    {
      name: "Загадочник",
      realName: "Эдвард Нэштон",
      description: "Гениальный серийный убийца, оставляющий загадки на месте преступлений. Его цель — раскрыть коррупцию Готэма.",
      threat: "Крайне опасен"
    },
    {
      name: "Пингвин",
      realName: "Оз Коббелпот",
      description: "Криминальный авторитет, управляющий клубом Iceberg Lounge. Правая рука Кармине Фальконе.",
      threat: "Высокая угроза"
    },
    {
      name: "Кармине Фальконе",
      realName: "Кармине Фальконе",
      description: "Крестный отец Готэма. Годами контролировал город через коррупцию в полиции и правительстве.",
      threat: "Глава мафии"
    },
    {
      name: "Женщина-кошка",
      realName: "Селина Кайл",
      description: "Мастер взломщика и карманная воровка с личной местью. Союзник или враг — зависит от обстоятельств.",
      threat: "Неопределенная"
    }
  ];

  const gallery = [
    { 
      title: "Темный рыцарь", 
      description: "Силуэт мстителя в ночном Готэме",
      image: "https://cdn.poehali.dev/projects/202ccde9-d98d-4111-aeb1-2a9bc42395c7/files/6e670330-c2fa-4403-a164-12d18fe698ff.jpg"
    },
    { 
      title: "Бэтсигнал", 
      description: "Призыв в ночном небе",
      image: "https://cdn.poehali.dev/projects/202ccde9-d98d-4111-aeb1-2a9bc42395c7/files/ee89d165-b267-453a-9209-5b2c6f26e1c1.jpg"
    },
    { 
      title: "Погоня", 
      description: "Бэтмобиль на улицах города",
      image: "https://cdn.poehali.dev/projects/202ccde9-d98d-4111-aeb1-2a9bc42395c7/files/f51721cd-d21a-4ee1-8865-d751a083ba85.jpg"
    },
    { 
      title: "Готэм", 
      description: "Город, утопающий в коррупции",
      image: "https://cdn.poehali.dev/projects/202ccde9-d98d-4111-aeb1-2a9bc42395c7/files/c7606147-b0fa-43d1-adb0-1d796be23881.jpg"
    },
    { 
      title: "Маска", 
      description: "Лицо возмездия",
      image: "https://cdn.poehali.dev/projects/202ccde9-d98d-4111-aeb1-2a9bc42395c7/files/d60f633e-9260-4eb8-85f9-0067ccfd66f7.jpg"
    },
    { 
      title: "Логово", 
      description: "База операций под особняком Уэйнов",
      image: "https://cdn.poehali.dev/projects/202ccde9-d98d-4111-aeb1-2a9bc42395c7/files/fbb9848a-5679-4c4a-a265-48943f20035b.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background rain-effect grunge-texture">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-oswald text-primary text-glow-red animate-flicker">
            THE BATMAN
          </h1>
          <div className="flex gap-6">
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#origin" className="text-muted-foreground hover:text-primary transition-colors">История</a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#enemies" className="text-muted-foreground hover:text-primary transition-colors">Враги</a>
            <a href="#quotes" className="text-muted-foreground hover:text-primary transition-colors">Цитаты</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакт</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="mb-8">
            <Icon name="Moon" size={80} className="mx-auto text-primary animate-flicker" />
          </div>
          <h1 className="text-7xl md:text-9xl font-oswald font-bold text-primary text-glow-red mb-6">
            THE BATMAN
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
            Когда зло правит улицами, только тьма может противостоять тьме.
            <br />
            <span className="text-primary">Я — месть. Я — ночь. Я — Бэтмен.</span>
          </p>
          <Button size="lg" className="neon-border bg-primary/10 hover:bg-primary/20 text-primary font-oswald text-lg px-8">
            <Icon name="ChevronDown" size={24} className="mr-2" />
            Узнать историю
          </Button>
        </div>
      </section>

      <section id="origin" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-oswald font-bold text-center mb-4 text-primary text-glow-red">
            ПРОИСХОЖДЕНИЕ
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            История о том, как боль превратилась в силу, а страх — в оружие
          </p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((event, idx) => (
              <Card key={idx} className="neon-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full neon-border bg-primary/10 flex items-center justify-center">
                        <Icon name="Skull" size={28} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-oswald mb-2">{event.year}</div>
                      <h3 className="text-2xl font-oswald font-semibold mb-2 text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-oswald font-bold text-center mb-4 text-primary text-glow-red">
            ГАЛЕРЕЯ
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Моменты из жизни темного защитника Готэма
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, idx) => (
              <Card key={idx} className="group overflow-hidden neon-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all cursor-pointer animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-secondary to-background relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-oswald text-xl mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="enemies" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-oswald font-bold text-center mb-4 text-primary text-glow-red">
            ВРАГИ И АНТАГОНИСТЫ
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Те, кто противостоит справедливости в Готэме
          </p>

          <Tabs defaultValue="0" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-secondary/50 neon-border">
              {enemies.map((enemy, idx) => (
                <TabsTrigger key={idx} value={idx.toString()} className="font-oswald data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                  {enemy.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {enemies.map((enemy, idx) => (
              <TabsContent key={idx} value={idx.toString()} className="animate-fade-in">
                <Card className="neon-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-full neon-border bg-primary/10 flex items-center justify-center">
                          <Icon name="Skull" size={48} className="text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-oswald font-bold mb-2 text-foreground">{enemy.name}</h3>
                        <p className="text-primary text-sm mb-4 font-oswald">Имя: {enemy.realName}</p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{enemy.description}</p>
                        <div className="inline-block px-4 py-2 neon-border bg-primary/10 text-primary text-sm font-oswald">
                          {enemy.threat}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="quotes" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-oswald font-bold text-center mb-4 text-primary text-glow-red">
            КУЛЬТОВЫЕ ЦИТАТЫ
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Слова, которые эхом отдаются в ночи Готэма
          </p>

          <div className="max-w-3xl mx-auto">
            <Card className="neon-border bg-card/50 backdrop-blur-sm mb-6 animate-fade-in">
              <CardContent className="p-8">
                <Icon name="Quote" size={48} className="text-primary mb-4 opacity-30" />
                <blockquote className="text-2xl md:text-3xl font-oswald text-foreground mb-6 leading-relaxed">
                  "{quotes[selectedQuote].text}"
                </blockquote>
                <div className="flex justify-between items-center border-t border-border pt-4">
                  <div>
                    <p className="text-primary font-oswald">— {quotes[selectedQuote].character}</p>
                    <p className="text-sm text-muted-foreground">{quotes[selectedQuote].context}</p>
                  </div>
                  <Icon name="Zap" size={24} className="text-primary animate-flicker" />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-5 gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedQuote(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === selectedQuote 
                      ? 'bg-primary shadow-[0_0_10px_hsl(0,79%,55%)]' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-oswald font-bold text-center mb-4 text-primary text-glow-red">
            СВЯЗАТЬСЯ
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте сообщение для темного защитника
          </p>

          <Card className="neon-border bg-card/50 backdrop-blur-sm animate-fade-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-oswald text-foreground mb-2">ИМЯ</label>
                  <Input 
                    placeholder="Ваше имя" 
                    className="neon-border bg-background/50 border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-oswald text-foreground mb-2">EMAIL</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="neon-border bg-background/50 border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-oswald text-foreground mb-2">СООБЩЕНИЕ</label>
                  <Textarea 
                    placeholder="Ваше сообщение..." 
                    rows={5}
                    className="neon-border bg-background/50 border-border focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
                <Button type="submit" className="w-full neon-border bg-primary/20 hover:bg-primary/30 text-primary font-oswald text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  ОТПРАВИТЬ СИГНАЛ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-background/95">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 THE BATMAN. Я — месть. Я — ночь.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Icon name="Moon" size={20} className="text-primary animate-flicker" />
            <Icon name="Zap" size={20} className="text-primary animate-flicker" style={{ animationDelay: '0.5s' }} />
            <Icon name="Moon" size={20} className="text-primary animate-flicker" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;