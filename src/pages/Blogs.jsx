import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Clock, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';
import { blogPosts } from '../data/blogs';

const faqs = [
  {
    question: 'Колко време отнема полагането на епоксидна настилка?',
    answer:
      'Срокът зависи от площта, подготовката на основата и избраната система. При стандартни обекти изпълнението често отнема няколко дни, като включва шлайфане, грундиране, полагане на слоевете и време за втвърдяване.',
  },
  {
    question: 'Подходящи ли са епоксидните настилки за жилища?',
    answer:
      'Да. Декоративните епоксидни системи са подходящи за домове, офиси, магазини и заведения. Те създават безфугова, лесна за почистване и модерна повърхност с богат избор на цветове и ефекти.',
  },
  {
    question: 'Как се поддържа епоксиден под?',
    answer:
      'Поддръжката е лесна: редовно сухо или мокро почистване и подходящи препарати според натоварването. Повърхността няма фуги, което намалява задържането на прах и замърсявания.',
  },
  {
    question: 'Може ли настилката да бъде противохлъзгаща?',
    answer:
      'Да. При нужда системата може да се изпълни с кварцов пясък или друга структура, която повишава сцеплението. Това е особено полезно за паркинги, производствени помещения, мокри зони и рампи.',
  },
  {
    question: 'Каква е разликата между епоксидна и полиуретан-циментова настилка?',
    answer:
      'Епоксидните настилки са много устойчиви и естетични, докато полиуретан-циментовите системи са подходящи за по-тежки условия, температурни натоварвания, влага и хранително-вкусова промишленост.',
  },
  {
    question: 'Необходима ли е подготовка на основата?',
    answer:
      'Да, подготовката е ключова. Основата обикновено се шлайфа или фрезова, почиства се добре и се грундира. Добрата подготовка осигурява здраво сцепление и по-дълъг живот на настилката.',
  },
];

export default function Blogs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <main>
        <section className="bg-navy pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-primary">
                <MessageCircleQuestion className="h-4 w-4" />
                Полезна информация
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Често задавани въпроси
              </h1>
              <p className="mt-5 max-w-2xl text-white/70 leading-relaxed">
                Кратки и практични отговори за епоксидни настилки, поддръжка, срокове и избор на подходяща система.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Блогове и съвети</h2>
                <p className="text-sm text-muted-foreground">Отворете въпрос, за да видите подробния отговор.</p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className={`overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 ${
                      isOpen ? 'border-primary/60 shadow-lg' : 'border-border hover:border-primary/40'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                    >
                      <span className="flex items-start gap-4">
                        <span className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                          isOpen ? 'bg-primary text-white' : 'bg-muted text-primary'
                        }`}
                        >
                          {index + 1}
                        </span>
                        <span className="text-base font-bold text-foreground md:text-lg">{faq.question}</span>
                      </span>
                      <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                        >
                          <div className="border-t border-border/70 px-5 pb-5 pt-4 md:px-6">
                            <p className="pl-12 text-sm leading-relaxed text-muted-foreground md:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-8 max-w-3xl md:mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">Блог статии</h2>
              <div className="mt-4 h-1 w-16 bg-primary" />
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Практични теми за избор, изпълнение и поддръжка на подови настилки.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link to={`/blogove/${post.slug}`} className="block h-full">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    <div className="flex min-h-[230px] flex-col p-5">
                      <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        {post.readTime} четене
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
                        Прочети повече
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
