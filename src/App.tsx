import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowUpLeft,
  MoveRight,
  Code2,
  PenTool,
  BookOpen,
  Share2,
  Hash,
  Globe,
  Mail,
  Sparkles,
  Layers,
  Target,
  Rocket
} from 'lucide-react';

import heroImg from './assets/images/hero_abstract_3d_1788943781361.jpg';
import work1Img from './assets/images/featured_work_1_1788943795954.jpg';
import work2Img from './assets/images/featured_work_2_1788943807105.jpg';
import work3Img from './assets/images/featured_work_3_1788943817811.jpg';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: "01", title: "طراحی سایت اختصاصی", icon: Code2 },
    { id: "02", title: "هویت بصری و برندینگ", icon: PenTool },
    { id: "03", title: "کاتالوگ و اقلام سازمانی", icon: BookOpen },
    { id: "04", title: "تولید محتوای استراتژیک", icon: Share2 }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-vazirmatn relative overflow-hidden">
      {/* 1. FLOATING HEADER */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-zinc-800/50 py-4' : 'bg-transparent border-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-400 rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-zinc-950 rotate-45" />
            </div>
            <span className="text-2xl font-black tracking-widest uppercase mt-1">Pace</span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-400">
            <a href="#home" className="hover:text-zinc-50 transition-colors">خانه</a>
            <a href="#services" className="hover:text-zinc-50 transition-colors">خدمات</a>
            <a href="#work" className="hover:text-zinc-50 transition-colors">نمونه‌کارها</a>
            <a href="#about" className="hover:text-zinc-50 transition-colors">درباره ما</a>
            <a href="#contact" className="hover:text-zinc-50 transition-colors">تماس با ما</a>
          </div>
          <a href="#contact" className="group flex items-center gap-2 px-6 py-2.5 bg-brand-400 text-zinc-950 font-bold hover:bg-brand-300 transition-colors">
            شروع یک پروژه
            <ArrowUpLeft className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-40 pb-20 px-6 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[1.1] tracking-tight mb-8">
              کسب‌وکارت را <br/>
              <span className="text-brand-400 inline-block mt-2">یک Pace جلوتر ببر.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-lg leading-relaxed mb-12 font-light">
              طراحی، برندینگ و محتوای دیجیتال برای کسب‌وکارهایی که می‌خواهند حرفه‌ای‌تر دیده شوند و سریع‌تر رشد کنند.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="#contact" className="group w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-4 bg-brand-400 text-zinc-950 font-bold text-lg hover:bg-brand-300 transition-colors">
                شروع یک پروژه
                <ArrowUpLeft className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#services" className="group w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-300 font-medium text-lg hover:border-brand-400 hover:text-brand-400 transition-colors">
                دیدن خدمات
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] lg:aspect-square relative overflow-hidden rounded-sm border border-zinc-800/50 bg-zinc-900/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-400/20 to-transparent mix-blend-overlay z-10" />
              <img 
                src={heroImg} 
                alt="Pace Business Momentum" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-brand-400/30 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-brand-400/30 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* 3. MOVING SERVICE TICKER */}
      <section className="py-6 border-y border-zinc-800/50 bg-zinc-900/20 overflow-hidden flex items-center">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center text-4xl font-black text-transparent bg-clip-text" style={{ WebkitTextStroke: '1px #3f3f46' }}>
              <span className="mx-8">WEB DESIGN</span>
              <Sparkles className="w-8 h-8 text-brand-400 mx-4" />
              <span className="mx-8">BRANDING</span>
              <Sparkles className="w-8 h-8 text-brand-400 mx-4" />
              <span className="mx-8">CONTENT</span>
              <Sparkles className="w-8 h-8 text-brand-400 mx-4" />
              <span className="mx-8">DIGITAL</span>
              <Sparkles className="w-8 h-8 text-brand-400 mx-4" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 4. POSITIONING SECTION */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-8">
                فقط اجرا نمی‌کنیم. <br/>
                <span className="text-zinc-500">برای رشد طراحی می‌کنیم.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md font-light">
                ما به هر پروژه به عنوان یک سرمایه‌گذاری برای آینده برند شما نگاه می‌کنیم. تلفیق استراتژی تجاری دقیق با هنر طراحی بصری، رویکرد ما در Pace است.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8 pt-4">
              {[
                { title: "Strategy", icon: Target },
                { title: "Identity", icon: Layers },
                { title: "Growth", icon: Rocket }
              ].map((item, idx) => (
                <div key={idx} className="border-t border-zinc-800 pt-6">
                  <item.icon className="w-8 h-8 text-brand-400 mb-6" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold font-sans tracking-wider" dir="ltr">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="py-32 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              هر چیزی که برندت <br/>
              <span className="text-brand-400">برای حرکت نیاز دارد.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 flex flex-col justify-center">
              {services.map((service, idx) => (
                <div 
                  key={service.id}
                  className={`group flex items-center justify-between p-8 cursor-pointer border-b border-zinc-800/50 transition-all duration-300 ${activeService === idx ? 'bg-zinc-900 border-brand-400/30' : 'hover:bg-zinc-900/50'}`}
                  onClick={() => setActiveService(idx)}
                >
                  <div className="flex items-center gap-8">
                    <span className="text-xl font-bold text-zinc-600 font-sans tracking-widest">{service.id}</span>
                    <h3 className={`text-2xl sm:text-3xl font-bold transition-colors ${activeService === idx ? 'text-brand-400' : 'text-zinc-300 group-hover:text-zinc-50'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <ArrowUpLeft className={`w-8 h-8 transition-transform duration-300 ${activeService === idx ? 'text-brand-400 rotate-0' : 'text-zinc-700 -rotate-45'}`} />
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-5 h-[400px] lg:h-auto bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
                >
                  {React.createElement(services[activeService].icon, { 
                    className: "w-32 h-32 text-brand-400/20 mb-8",
                    strokeWidth: 1
                  })}
                  <h4 className="text-2xl font-bold text-zinc-100 mb-4">{services[activeService].title}</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    با تمرکز بر جدیدترین متدهای طراحی و استراتژی‌های نتیجه‌گرا، این خدمت به شما کمک می‌کند تا یک قدم از رقبا جلوتر باشید.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE SYSTEM SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-20">
            از ایده تا اجرا. <br/>
            <span className="text-zinc-500">بدون تکه‌تکه شدن برند.</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 font-sans tracking-widest text-lg sm:text-2xl font-bold text-zinc-300 uppercase" dir="ltr">
            <span>Idea</span>
            <MoveRight className="w-6 h-6 text-brand-400" />
            <span>Strategy</span>
            <MoveRight className="w-6 h-6 text-brand-400" />
            <span>Design</span>
            <MoveRight className="w-6 h-6 text-brand-400" />
            <span>Launch</span>
            <MoveRight className="w-6 h-6 text-brand-400" />
            <span className="text-brand-400">Growth</span>
          </div>
        </div>
      </section>

      {/* 7. FEATURED WORK */}
      <section id="work" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-zinc-800/50 pb-8">
            <h2 className="text-4xl md:text-5xl font-black">
              چیزی که می‌سازیم، <br/>
              باید دیده شود.
            </h2>
            <a href="#" className="hidden sm:flex items-center gap-2 text-zinc-400 hover:text-brand-400 transition-colors font-medium">
              همه نمونه‌کارها
              <ArrowUpLeft className="w-4 h-4" />
            </a>
          </div>

          <div className="grid gap-20">
            {[
              { title: "کاتالوگ و برندینگ لوکس", category: "Branding & Print", img: work1Img },
              { title: "اپلیکیشن سبک زندگی", category: "UI/UX Design", img: work2Img },
              { title: "کمپین شبکه‌های اجتماعی", category: "Social Content", img: work3Img }
            ].map((work, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-6 ${idx % 2 !== 0 ? 'lg:items-end text-right' : ''}`}
              >
                <div className="w-full lg:w-[80%] aspect-[16/9] bg-zinc-900 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-brand-400/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating View Project Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                    <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-50 px-6 py-3 rounded-none font-medium flex items-center gap-2">
                      مشاهده پروژه
                      <ArrowUpLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className={`w-full lg:w-[80%] flex justify-between items-start ${idx % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{work.title}</h3>
                    <p className="text-zinc-500 font-sans tracking-wider" dir="ltr">{work.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY PACE & 9. PROCESS */}
      <section className="py-32 px-6 border-t border-zinc-800/50 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          
          {/* Why Pace */}
          <div>
            <h2 className="text-4xl font-black mb-12">چرا Pace؟</h2>
            <div className="flex flex-col gap-10">
              {[
                { title: "یکپارچه", desc: "از اولین تماس تا تحویل نهایی، تمام نیازهای برند شما تحت یک سقف و با یک لحن ثابت مدیریت می‌شود." },
                { title: "استراتژیک", desc: "هر خط کد و هر پیکسلی که طراحی می‌شود، در خدمت اهداف تجاری و فروش شماست، نه فقط زیبایی." },
                { title: "حرفه‌ای", desc: "تعهد به زمان‌بندی، ارتباط شفاف، و کیفیت پرمیوم؛ استانداردهایی که در هر پروژه رعایت می‌شوند." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 border border-brand-400/30 flex items-center justify-center text-brand-400 font-bold font-sans">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-zinc-100">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-4xl font-black mb-12">همکاری با ما چطور پیش می‌رود؟</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 pt-2">
              {[
                { step: "01", name: "Discover", label: "شناخت کسب‌وکار و نیازها" },
                { step: "02", name: "Define", label: "تدوین استراتژی و ساختار" },
                { step: "03", name: "Design", label: "طراحی و توسعه" },
                { step: "04", name: "Launch", label: "رونمایی و رشد" }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="text-brand-400/50 font-black text-4xl mb-2 font-sans">{item.step}</div>
                  <h3 className="text-xl font-bold font-sans tracking-wide text-zinc-200 mb-2" dir="ltr">{item.name}</h3>
                  <p className="text-zinc-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section id="contact" className="py-40 px-6 relative overflow-hidden bg-brand-400 text-zinc-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-multiply pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            آماده‌ای یک Pace <br/>جلوتر بروی؟
          </h2>
          <p className="text-xl md:text-2xl text-zinc-900 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            پروژه‌ات را با ما مطرح کن. از یک ایده خام تا یک برند حرفه‌ای، کنارت هستیم.
          </p>
          <a href="mailto:hello@pacebusiness.com" className="group inline-flex items-center gap-3 px-10 py-5 bg-zinc-950 text-brand-400 font-bold text-xl hover:bg-zinc-800 transition-colors shadow-2xl">
            شروع یک پروژه
            <ArrowUpLeft className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="pt-24 pb-8 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-zinc-700 rounded-sm rotate-45 flex items-center justify-center">
                  <div className="w-3 h-3 bg-zinc-950 rotate-45" />
                </div>
                <span className="text-xl font-black tracking-widest uppercase mt-1 text-zinc-300">Pace</span>
              </div>
              <p className="text-zinc-500 font-sans tracking-wide mb-8 max-w-xs" dir="ltr">
                Digital experiences for ambitious businesses.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-zinc-100">دسترسی سریع</h4>
              <ul className="flex flex-col gap-4 text-zinc-400">
                <li><a href="#home" className="hover:text-brand-400 transition-colors">خانه</a></li>
                <li><a href="#services" className="hover:text-brand-400 transition-colors">خدمات</a></li>
                <li><a href="#work" className="hover:text-brand-400 transition-colors">نمونه‌کارها</a></li>
                <li><a href="#about" className="hover:text-brand-400 transition-colors">درباره ما</a></li>
                <li><a href="#contact" className="hover:text-brand-400 transition-colors">تماس با ما</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-zinc-100">ارتباط با ما</h4>
              <ul className="flex flex-col gap-4 text-zinc-400" dir="ltr">
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-brand-400 transition-colors text-right justify-end">
                    <span>Instagram</span>
                    <Hash className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-brand-400 transition-colors text-right justify-end">
                    <span>LinkedIn</span>
                    <Globe className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-brand-400 transition-colors text-right justify-end">
                    <span>Telegram</span>
                    <Mail className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
            
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 text-zinc-600 text-sm">
            <p>© {new Date().getFullYear()} Pace Business. تمامی حقوق محفوظ است.</p>
            <div className="flex gap-6 mt-4 md:mt-0 font-sans tracking-wide">
              <span>Made with momentum.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

