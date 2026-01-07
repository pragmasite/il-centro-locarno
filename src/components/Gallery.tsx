import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();

  // Placeholder gallery items - in production these would be actual images
  const images = [
    { id: 1, title: t.gallery.description, color: "from-primary to-primary/50" },
    { id: 2, title: "Palestra Moderna", color: "from-accent to-accent/50" },
    { id: 3, title: "Zona Riabilitazione", color: "from-primary/70 to-primary/30" },
  ];

  return (
    <section id="galleria" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">{t.gallery.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* Placeholder gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.color}`} />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{image.title}</p>
              </div>

              {/* Scale on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground mt-8"
        >
          {t.gallery.description}
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;
