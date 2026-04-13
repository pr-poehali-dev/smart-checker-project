import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Заказывали раков на день рождения — все были в восторге! Раки пришли живыми, крупными. Варили сами с укропом, получилось объедение. Обязательно закажем ещё!",
    name: "Алексей",
    role: "Постоянный клиент",
  },
  {
    quote:
      "Беру раков для ресторана уже полгода. Качество стабильное, цены честные, доставка всегда в срок. Клиенты очень довольны — блюдо с раками стало хитом меню.",
    name: "Ольга",
    role: "Владелица ресторана",
  },
  {
    quote:
      "Варёные раки приехали горячими и ароматными — упаковка сохранила тепло отлично. Заказывали под пиво на вечеринку, все гости были счастливы. Сервис на высоте!",
    name: "Дмитрий",
    role: "Постоянный клиент",
  },
  {
    quote:
      "Первый раз попробовали живых раков — немного переживали, но всё прошло отлично. Менеджер подробно объяснил, как варить. Вкус несравнимо лучше, чем в магазине!",
    name: "Елена",
    role: "Новый клиент",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Нам важно, чтобы каждый клиент остался доволен — свежим продуктом, быстрой доставкой и честным сервисом.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}