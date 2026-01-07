import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Heart, Zap, Dumbbell, Leaf, Brain, Shield } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const icons = [Heart, Zap, Brain, Dumbbell, Leaf, Shield];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="servizi" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">{t.services.description}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.services.items.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-background rounded-lg p-8 border border-border hover:shadow-soft hover:border-primary transition-all group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
