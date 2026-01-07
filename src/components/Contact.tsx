import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 (0)91 221 02 04",
      href: "tel:+41912210204",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "contatti@ilcentro.ch",
      href: "mailto:contatti@ilcentro.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Via Luigi Lavizzari 10A, 6600 Locarno",
      href: "https://maps.google.com/?q=46.164271,8.796596",
    },
  ];

  return (
    <section id="contatti" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.contact.title1} <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.label === t.contact.address ? "_blank" : undefined}
                  rel={info.label === t.contact.address ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border hover:border-primary hover:shadow-soft transition-all"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden border border-border shadow-soft h-full min-h-[400px]"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="il Centro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.282634626206!2d8.794113!3d46.164271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4783c97a5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sVia%20Luigi%20Lavizzari%2010A%2C%206600%20Locarno!5e0!3m2!1sit!2sch!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Button asChild size="lg" className="gap-2">
            <a href="tel:+41912210204">
              <Phone className="h-5 w-5" />
              {t.contact.cta}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
