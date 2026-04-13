import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Живые раки",
    category: "Свежий улов",
    image: "https://cdn.poehali.dev/projects/25368632-3e0a-46f8-b0b9-ef7e0c82b4e5/files/036a344d-5108-4752-bf65-fa917fc11416.jpg",
    description:
      "Живые речные раки, доставленные прямо от поставщика. Активные, здоровые, готовы к варке. Идеально для тех, кто любит готовить сам и контролировать вкус.",
    tags: ["Живые", "Средние", "Крупные", "Маленькие"],
  },
  {
    title: "Варёные раки со специями",
    category: "Готово к столу",
    image: "https://cdn.poehali.dev/projects/25368632-3e0a-46f8-b0b9-ef7e0c82b4e5/files/7dc9af2a-0c78-404d-b53e-686e24c66114.jpg",
    description:
      "Раки, сваренные по фирменному рецепту с укропом, лавровым листом и перцем. Горячие, ароматные — идеальная закуска к пиву и компании друзей.",
    tags: ["Варёные", "Со специями", "Горячие"],
  },
  {
    title: "Оптовые поставки",
    category: "Для бизнеса",
    image: "https://cdn.poehali.dev/projects/25368632-3e0a-46f8-b0b9-ef7e0c82b4e5/files/68db0673-a047-4212-bc41-9d292833aa3c.jpg",
    description:
      "Регулярные поставки для ресторанов, баров и кафе. Гарантированное качество, фиксированные цены и приоритетная доставка. Работаем по договору.",
    tags: ["Опт", "Рестораны", "Кафе", "Регулярно"],
  },
  {
    title: "Корпоративы и события",
    category: "Праздничные заказы",
    image: "https://cdn.poehali.dev/projects/25368632-3e0a-46f8-b0b9-ef7e0c82b4e5/files/5e6ddc91-8c40-4d32-89f0-6af3e495624b.jpg",
    description:
      "Организуете вечеринку или корпоратив? Возьмём на себя заготовку раков для любого количества гостей. Доставим вовремя — вы просто наслаждаетесь праздником.",
    tags: ["Праздник", "Много гостей", "Срочно"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наш ассортимент</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Живые и варёные раки разных размеров — для домашних вечеринок, ресторанов и любых мероприятий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}