export function AboutSection() {
    return (
      <section
        id="nosotros"
        className="relative py-16 sm:py-20 lg:py-28 bg-muted/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-muted-foreground mb-4">
              Nuestra Historia
            </p>
  
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Negocios inmobiliarios
              <br />
              basados en confianza
            </h2>
          </div>
  
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Texto principal */}
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                En <strong className="text-foreground">Negocios Inmobiliarios</strong>,
                trabajamos con un enfoque meticuloso y ordenado en cada etapa del
                proceso. Desde el primer contacto hasta el cierre de una operación,
                cada detalle es tratado con responsabilidad y compromiso.
              </p>
  
              <p>
                Nuestra operativa se basa en protocolos claros que aseguran
                eficiencia, transparencia y tranquilidad tanto para propietarios
                como para compradores e inquilinos.
              </p>
  
              <p>
                Creemos en la innovación constante, en la mejora continua y en la
                cercanía humana como pilares fundamentales para brindar una
                experiencia inmobiliaria simple, clara y sin complicaciones.
              </p>
            </div>
  
            {/* Bloque destacado */}
            <div className="relative bg-background border border-border/60 p-8 sm:p-10 shadow-sm">
              <div className="absolute left-0 top-8 h-20 w-1 bg-primary" />
  
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Nuestro compromiso
              </h3>
  
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nos comprometemos a ir más allá de lo esperado, ofreciendo
                soluciones reales, acompañamiento constante y un trato cálido y
                profesional en cada operación.
              </p>
  
              <p className="text-muted-foreground leading-relaxed">
                Cada propiedad que gestionamos refleja nuestra forma de trabajar:
                cuidada, clara y orientada a resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  