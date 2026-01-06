import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schedule = [
    { hours: t.hours.closed },
    { hours: t.hours.closed },
    { hours: "10:00 - 00:00" },
    { hours: "10:00 - 00:00" },
    { hours: "10:00 - 01:00" },
    { hours: "10:00 - 01:00" },
    { hours: "10:00 - 00:00" },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  const currentTime = currentHour * 60 + currentMinutes;

  const isOpen = () => {
    const todaySchedule = schedule[todayIndex].hours;
    if (todaySchedule === t.hours.closed) return false;

    const [openTime, closeTime] = todaySchedule.split(" - ");
    const [openHour, openMin] = openTime.split(":").map(Number);
    const [closeHour, closeMin] = closeTime.split(":").map(Number);

    const openMinutes = openHour * 60 + openMin;
    let closeMinutes = closeHour * 60 + closeMin;

    if (closeHour < openHour) {
      closeMinutes += 24 * 60;
    }

    return currentTime >= openMinutes && currentTime <= closeMinutes;
  };

  return (
    <section id="orari" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl text-foreground">{t.hours.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl rounded-2xl border bg-background shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg">{t.hours.header}</span>
            {schedule[todayIndex].hours !== t.hours.closed && (
              <span
                className={`ml-auto text-xs px-3 py-1 rounded-full font-medium ${
                  isOpen() ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {isOpen() ? t.hours.open : t.hours.closed}
              </span>
            )}
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <div
                  key={i}
                  className={`px-6 py-4 flex justify-between items-center ${isToday ? "bg-primary/5" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && <CheckCircle className="h-4 w-4 text-primary" />}
                    <span className={isToday ? "font-medium text-primary" : ""}>{t.hours.days[i]}</span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span className={isClosed ? "text-muted-foreground" : "font-medium"}>{item.hours}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
