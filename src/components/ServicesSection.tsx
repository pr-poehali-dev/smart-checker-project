import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Fish, Flame, Truck, Scale, Star, Clock } from "lucide-react"

const services = [
  {
    icon: Fish,
    title: "Живые раки",
    description:
      "Раки поставляются живыми — гарантия свежести и максимального вкуса. Отбираем только активных и здоровых особей. Идеальны для домашней варки: вы сами контролируете специи и степень готовности.",
  },
  {
    icon: Flame,
    title: "Варёные раки",
    description:
      "Раки сварены с любовью по классическому рецепту с укропом, лавровым листом и специями. Готовы к подаче сразу после доставки — идеально для вечеринок и посиделок с пивом.",
  },
  {
    icon: Scale,
    title: "Разные размеры",
    description:
      "Предлагаем раков нескольких размеров: маленькие (4–6 см), средние (7–9 см) и крупные (10+ см). Чем крупнее — тем мяснистее. Поможем выбрать оптимальный вариант под ваш бюджет.",
  },
  {
    icon: Truck,
    title: "Быстрая доставка",
    description:
      "Доставляем раков в день заказа. Живые раки упаковываются в специальные ёмкости с вентиляцией, варёные — в термоконтейнеры для сохранения тепла и аромата.",
  },
  {
    icon: Clock,
    title: "Заказ в любое время",
    description:
      "Принимаем заказы круглосуточно через форму на сайте или по телефону. Успейте оформить до 16:00 — и раки будут у вас в тот же вечер.",
  },
  {
    icon: Star,
    title: "Оптовые заказы",
    description:
      "Планируете корпоратив, банкет или ресторанную закупку? Работаем с оптовыми заказами от 5 кг с выгодными ценами и приоритетной доставкой. Звоните — договоримся!",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наш ассортимент
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что мы <span className="text-primary">предлагаем</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Живые или варёные, мелкие или крупные — у нас есть всё для идеального вечера с раками. Доставим свежими прямо к вашему столу.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}