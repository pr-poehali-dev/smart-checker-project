import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

const values = [
  { title: "Только свежий продукт", description: "Раки доставляются живыми или только что сваренными — никакой заморозки и вчерашнего товара" },
  { title: "Честные цены", description: "Цена за килограмм фиксирована, никаких скрытых доплат за упаковку или доставку" },
  { title: "Быстро и надёжно", description: "Доставляем в день заказа — раки приедут в идеальном состоянии" },
  { title: "Для вас и бизнеса", description: "Работаем как с частными клиентами, так и с ресторанами и кафе по оптовым ценам" },
  { title: "Удобный заказ", description: "Оформите заказ через сайт или позвоните — всё просто и без лишних шагов" },
  { title: "Щедрые порции", description: "Продаём от 1 кг — возьмите ровно столько, сколько нужно на вашу компанию" },
]

const stats = [
  { number: "2", label: "Вида продукта" },
  { number: "1 кг", label: "Минимальный заказ" },
  { number: "В день", label: "Срок доставки" },
  { number: "5+", label: "Лет на рынке" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            О нас
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Продукт, которому{" "}
            <span className="text-primary relative">
              доверяют
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Мы поставляем раков уже более 5 лет. За это время тысячи довольных покупателей вернулись к нам снова — потому что знают: у нас всегда свежо, вкусно и честно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}