import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="chi-siamo" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.about.title1} <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">{t.about.p1}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "15+", label: t.about.stat1 },
              { value: "500+", label: t.about.stat2 },
              { value: "100%", label: t.about.stat3 },
            ].map((stat, i) => (
              <div key={i} className="bg-background rounded-lg p-6 text-center border border-border">
                <div className="font-serif text-3xl text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {t.about.features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-6 w-6 text-accent mt-1">
                  <Check className="h-full w-full" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
