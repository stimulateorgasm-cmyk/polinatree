import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Gift, 
  Send, 
  BookOpen, 
  Crown, 
  Youtube, 
  Instagram, 
  ArrowUpRight, 
  X, 
  Share2, 
  Check, 
  ShieldCheck, 
  FileText,
  Bookmark,
  RefreshCw,
  Heart,
  ExternalLink,
  Flame,
  Award
} from 'lucide-react';

interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: ReactNode;
  emojiPrefix: string;
  isFeatured?: boolean;
  badges: string[];
  cornerLabel?: { text: string; style: 'red' | 'gold' | 'rose' };
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'offer' | null>(null);
  
  // Interactive Method Tab Selection State
  const [activeTab, setActiveTab] = useState<'body' | 'mind' | 'club'>('body');
  
  // Quote Carousel State
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "«Сексуальность начинается не с кружевного белья, а с тотального разрешения себе чувствовать, дышать и просто быть собой.»",
    "«Самый главный роман в твоей жизни — это роман с самой собой. Все остальные союзы — лишь отражение этого чувства.»",
    "«Тело никогда не врет. Когда разум придумывает оправдания, тело зажимается. Учись слушать его тихий шепот.»",
    "«Сексуальное раскрепощение — это не пошлость. Это смелость быть настоящей, дикой и свободной в каждом своем проявлении.»",
    "«Оргазм — это не спортивное достижение, а глубокое доверие своей природе и расслабление контроля.»"
  ];

  const methodDetails = {
    body: {
      title: "Телесность и оргазмичность",
      tagline: "Разблокировка чувственности через соматику",
      desc: "Снимаем многолетние телесные блоки, мышечные панцири и зажимы. Возвращаем телу чувствительность, восстанавливаем сексуальную силу и учимся проживать пиковое удовольствие.",
      color: "bg-red-50 text-brand-red border-red-200"
    },
    mind: {
      title: "Психология сексуальности",
      tagline: "Свобода от страхов, стыда и чужих установок",
      desc: "Исследуем деструктивные сценарии, убираем синдром «хорошей девочки». Взращиваем безусловную самооценку и внутреннюю грацию, чтобы уверенно говорить о своих желаниях.",
      color: "bg-amber-50 text-amber-900 border-amber-200"
    },
    club: {
      title: "Эстетика комьюнити Lady in Red",
      tagline: "Пространство женской инициации и силы",
      desc: "Окружение женщин, которые выбрали себя. Регулярные живые встречи, практики секс-терапии, поддерживающие эфиры и совместное взращивание аутентичной зрелой женственности.",
      color: "bg-pink-50 text-pink-900 border-pink-200"
    }
  };

  const links: LinkItem[] = [
    {
      id: 'diagnostic',
      title: 'Бесплатная диагностическая сессия',
      subtitle: 'Приватный разбор вашего запроса: снимем блоки, пропишем стратегию раскрепощения',
      url: 'https://loveuniversity1.getcourse.ru/anketa_szh_diagnostica?utm_source=taplink&utm_medium=insta',
      icon: <Sparkles className="w-[18px] h-[18px] text-brand-red" />,
      emojiPrefix: '🌹',
      isFeatured: true,
      badges: ['⏱️ 20 минут', '👥 Индивидуально'],
      cornerLabel: { text: '🔥 ПОУЧАСТВОВАТЬ', style: 'red' }
    },
    {
      id: 'gift',
      title: 'Аудио-практика в подарок',
      subtitle: 'Бесплатная глубокая медитация для снятия мышечного напряжения и пробуждения матки',
      url: 'https://clck.ru/3QkFDn',
      icon: <Gift className="w-[18px] h-[18px] text-brand-gold" />,
      emojiPrefix: '✨',
      isFeatured: true,
      badges: ['🎁 Бесплатно', '🎧 Аудио-формат (15 мин)'],
      cornerLabel: { text: '💎 ПОДАРОК', style: 'gold' }
    },
    {
      id: 'telegram',
      title: 'Telegram-канал о сексе и свободе',
      subtitle: 'Ежедневные откровения, анонимные разборы ваших кейсов, голосовые подкасты без цензуры',
      url: 'https://t.me/+8v9rmK0aKIg3ZDUy',
      icon: <Send className="w-[18px] h-[18px]" />,
      emojiPrefix: '📱',
      badges: ['📢 10 000+ женщин', '💬 Живое общение']
    },
    {
      id: 'club',
      title: 'Закрытый клуб Lady in Red',
      subtitle: 'Приватная обитель чувственного расцвета, закрытых лекций и регулярных телесных сессий',
      url: 'https://club.polinared.ru',
      icon: <Crown className="w-[18px] h-[18px]" />,
      emojiPrefix: '🔐',
      badges: ['🌟 VIP-сообщество', '🔒 Строго 18+'],
      cornerLabel: { text: '✨ КЛУБ', style: 'rose' }
    },
    {
      id: 'litres',
      title: 'Моя книга на Литрес',
      subtitle: '«Анатомия твоей сексуальности» — пошаговый гид по принятию тела и раскрытию мультиоргазмичности',
      url: 'https://litres.ru/74025597',
      icon: <BookOpen className="w-[18px] h-[18px]" />,
      emojiPrefix: '📖',
      badges: ['⭐ Рейтинг 4.9', '🔥 Бестселлер']
    },
    {
      id: 'youtube',
      title: 'YouTube-канал Полины Red',
      subtitle: 'Большие разборы тем оргазмичности, видео-подкасты с известными врачами и уроки соматики',
      url: 'https://youtube.com/@polina_red',
      icon: <Youtube className="w-[18px] h-[18px]" />,
      emojiPrefix: '▶️',
      badges: ['🎬 50+ видеоуроков', '🍿 Смотреть бесплатно']
    },
    {
      id: 'instagram',
      title: 'Instagram-блог @polinared_sexologist',
      subtitle: 'Красота, эстетика и реальные будни секс-терапевта в сторис без прикрас',
      url: 'https://www.instagram.com/polinared_sexologist',
      icon: <Instagram className="w-[18px] h-[18px]" />,
      emojiPrefix: '📸',
      badges: ['🔥 Самые сочные сторис', '👥 15k+ подписчиц']
    }
  ];

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 220, damping: 22 }
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col items-center justify-between selection:bg-brand-red/10 selection:text-brand-red relative overflow-hidden py-4">
      
      {/* Dynamic luxury background aura lines */}
      <div className="absolute top-0 inset-x-0 h-[650px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-b from-brand-red/[0.04] via-brand-gold/[0.02] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-radial from-brand-gold/[0.04] to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 -left-16 w-80 h-80 bg-radial from-brand-red/[0.03] to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Share / Action Bar */}
      <div className="w-full max-w-[480px] px-5 pt-3 flex justify-end relative z-10">
        <button 
          id="share-button"
          onClick={handleShare}
          className="py-2 px-3.5 rounded-full border border-brand-gold/20 hover:border-brand-red/30 bg-white/70 backdrop-blur-md text-brand-muted hover:text-brand-red transition-all duration-300 relative group flex items-center gap-1.5 focus:outline-none shadow-xs active:scale-95 cursor-pointer text-xs font-medium"
          title="Поделиться этой страницей"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-sans">Ссылка скопирована</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-red transition-colors" />
              <span className="font-sans tracking-wide">Поделиться</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[480px] px-5 pb-10 flex-grow flex flex-col items-center relative z-10 mt-2">
        
        {/* Profile Card Header */}
        <div className="flex flex-col items-center text-center w-full mb-6">
          <div className="relative group cursor-pointer">
            {/* Pulsating colorful luxury ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-red via-brand-gold or-brand-gold to-brand-red p-[1.5px] opacity-75 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]"></div>
            
            {/* Gold border container */}
            <div className="absolute -inset-1.5 rounded-full border border-brand-gold/30 group-hover:border-brand-red/40 transition-colors duration-700"></div>
            
            <img 
              id="bio-avatar"
              src="https://placehold.co/120x120/A30012/FFFFFF?text=Polina+Red" 
              alt="Полина Red" 
              referrerPolicy="no-referrer"
              className="w-[115px] h-[115px] rounded-full border-[3px] border-white object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.03] shadow-md bg-white p-0.5"
            />
          </div>

          <h1 id="bio-title" className="title-font text-[28px] font-bold mt-5 tracking-tight text-brand-dark leading-none">
            Полина Red
          </h1>

          <p id="bio-subtitle" className="font-sans text-[11px] tracking-[0.16em] uppercase text-brand-gold mt-2 py-0.5 px-3 bg-brand-gold-light border border-brand-gold/15 rounded-full inline-block font-bold">
            Психолог &middot; Телесность &middot; Сексология
          </p>

          {/* New Active Status Badge (as seen in Andrey Indigo's screen) */}
          <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5EE] border border-emerald-600/10 text-neutral-900 text-[10px] tracking-wider uppercase font-semibold shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            ЗАПИСЬ НА КОНСУЛЬТАЦИЮ ОТКРЫТА
          </div>

          <p id="bio-description" className="font-sans text-[14.5px] leading-relaxed text-brand-dark/95 mt-4 max-w-[370px] font-normal px-2">
            Помогаю женщинам снять телесные оковы, пробудить природный магнетизм и войти в тотальную оргазмичность <span className="inline-block hover:scale-125 transition-transform">🌹</span>
          </p>
        </div>

        {/* Separator */}
        <div className="w-1/3 flex items-center justify-center mb-6">
          <div className="h-[0.5px] w-full bg-gradient-to-r from-transparent to-brand-gold/40"></div>
          <div className="mx-2 text-[9px] text-brand-gold tracking-widest flex gap-1">
            <span>✿</span>
          </div>
          <div className="h-[0.5px] w-full bg-gradient-to-l from-transparent to-brand-gold/40"></div>
        </div>

        {/* Interactive Segment BLOCK: Polina's Therapeutic Philosophy (like Andrey Indigo's system!) */}
        <div className="w-full bg-white border border-brand-gold/20 rounded-[20px] p-4.5 shadow-[0_4px_16px_rgba(110,104,97,0.03)] mb-6 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-1.5 bg-brand-gold-light/40 border-bl border-brand-gold/15 rounded-bl-[10px] text-[8px] uppercase tracking-widest text-brand-gold font-bold">
            АВТОРСКИЙ МЕТОД БПСП
          </div>
          
          <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted block mb-2 font-semibold">Три кита женской свободы:</span>
          
          {/* Tabs header */}
          <div className="flex gap-2 p-1 bg-[#FAF6F0] rounded-xl border border-brand-gold/10 mb-3.5">
            <button 
              onClick={() => setActiveTab('body')}
              className={`flex-1 text-center py-1.5 text-xs font-semibold tracking-wide rounded-lg transition-all cursor-pointer ${activeTab === 'body' ? 'bg-brand-red text-white shadow-sm' : 'text-brand-muted hover:text-brand-dark'}`}
            >
              ТЕЛО
            </button>
            <button 
              onClick={() => setActiveTab('mind')}
              className={`flex-1 text-center py-1.5 text-xs font-semibold tracking-wide rounded-lg transition-all cursor-pointer ${activeTab === 'mind' ? 'bg-brand-red text-white shadow-sm' : 'text-brand-muted hover:text-brand-dark'}`}
            >
              РАЗУМ
            </button>
            <button 
              onClick={() => setActiveTab('club')}
              className={`flex-1 text-center py-1.5 text-xs font-semibold tracking-wide rounded-lg transition-all cursor-pointer ${activeTab === 'club' ? 'bg-brand-red text-white shadow-sm' : 'text-brand-muted hover:text-brand-dark'}`}
            >
              КЛУБ
            </button>
          </div>

          {/* Tab content with transition */}
          <div className="min-h-[100px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-1.5"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-brand-gold">✦</span>
                  <h4 className="title-font text-[15px] font-bold text-brand-dark">{methodDetails[activeTab].title}</h4>
                </div>
                <p className="text-[10.5px] italic font-medium text-brand-muted tracking-wide">{methodDetails[activeTab].tagline}</p>
                <p className="text-[12px] leading-relaxed text-brand-dark/90 font-light">{methodDetails[activeTab].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Links Grid Block with Multi-line subtitles & badges (like Anton Shumkin!) */}
        <motion.div 
          id="links-container"
          className="w-full flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {links.map((link) => {
            const isFeat = link.isFeatured;
            return (
              <motion.div 
                key={link.id} 
                variants={itemVariants} 
                className="w-full relative"
              >
                {/* Visual Label at the top right header of the card */}
                {link.cornerLabel && (
                  <span className={`absolute -top-2 right-4 z-20 text-[8px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold shadow-xs border ${
                    link.cornerLabel.style === 'red' 
                      ? 'bg-brand-red text-white border-brand-red' 
                      : link.cornerLabel.style === 'gold'
                      ? 'bg-brand-gold text-white border-brand-gold'
                      : 'bg-rose-100 text-rose-800 border-rose-200'
                  }`}>
                    {link.cornerLabel.text}
                  </span>
                )}

                <a
                  id={`link-${link.id}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full py-4.5 px-5 block
                    border rounded-[22px] text-left relative overflow-hidden transition-all duration-300 ease-out active:scale-[0.99] outline-none group focus-visible:ring-2 focus-visible:ring-brand-gold/60
                    ${isFeat 
                      ? 'bg-white border-brand-red/45 hover:border-brand-red hover:shadow-[0_8px_24px_rgba(163,0,18,0.06)] ring-1 ring-brand-red/[0.04]' 
                      : 'bg-[#FDFCFB] border-brand-gold/20 hover:border-brand-red/35 hover:shadow-[0_6px_18px_rgba(110,104,97,0.03)]'
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-3">
                    
                    {/* Left Column: Icon and Info */}
                    <div className="flex items-start gap-3.5 flex-grow">
                      
                      {/* Avatar/Emoji Background wrapper */}
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border transition-colors duration-300 ${
                        isFeat 
                          ? 'bg-brand-red-light border-brand-red/15 text-brand-red group-hover:bg-brand-red group-hover:text-white' 
                          : 'bg-[#FAF6F0] border-brand-gold/15 text-brand-gold group-hover:bg-brand-red-light group-hover:text-brand-red group-hover:border-brand-red/10'
                      }`}>
                        <span className="text-lg" role="img" aria-hidden="true">
                          {link.emojiPrefix}
                        </span>
                      </div>

                      {/* Multiline Texts */}
                      <div className="flex-grow space-y-1.5 pr-2">
                        <h3 className="font-sans font-bold text-[15px] text-brand-dark leading-normal tracking-wide group-hover:text-brand-red transition-colors flex items-center gap-1.5">
                          {link.title}
                          {isFeat && <Flame className="w-3.5 h-3.5 text-brand-red animate-pulse flex-shrink-0" />}
                        </h3>
                        <p className="text-[12px] leading-relaxed text-brand-muted font-normal">
                          {link.subtitle}
                        </p>
                        
                        {/* Dynamic Badges Block */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {link.badges.map((badge, idx) => (
                            <span 
                              key={idx}
                              className={`text-[9.5px] px-2 py-0.5 rounded-md font-sans tracking-wide font-medium border ${
                                isFeat 
                                  ? 'bg-brand-red-light/70 border-brand-red/10 text-brand-red' 
                                  : 'bg-brand-gold-light/50 border-brand-gold/10 text-[#7C6636]'
                              }`}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Right column: Beautiful active pointer */}
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-7 h-7 rounded-full border border-brand-gold/15 text-brand-muted hover:border-brand-red/35 hover:text-brand-red flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-brand-red-light group-hover:text-brand-red cursor-pointer">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic Citation Carousel "Мысль дня" (Highly Polished as seen in Andrey Indigo's screen) */}
        <div className="w-full bg-[#FAF5EE] border border-brand-gold/25 rounded-[22px] px-5 py-5 text-center mt-8 shadow-[0_4px_12px_rgba(200,155,60,0.02)] relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
          
          <div className="flex items-center justify-center gap-1 mb-2">
            <Bookmark className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-gold">Мысль дня от Полины Red</span>
          </div>

          <div className="min-h-[72px] flex items-center justify-center px-2 py-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.25 }}
                className="title-font italic text-[14px] leading-relaxed text-brand-dark font-medium"
              >
                {quotes[quoteIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <button 
            onClick={nextQuote}
            className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-brand-gold/20 bg-white/60 hover:bg-white hover:border-brand-red/35 hover:text-brand-red text-brand-muted text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 active:scale-95 cursor-pointer shadow-2xs"
          >
            <RefreshCw className="w-3 h-3 animate-pulse" />
            СЛЕДУЮЩАЯ МЫСЛЬ 🌹
          </button>
        </div>

        {/* Elegant Social Proof Segment */}
        <div className="mt-14 text-center text-brand-muted text-xs tracking-wider max-w-[340px] font-sans">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Heart className="w-3 h-3 text-brand-red fill-brand-red" />
            <p className="uppercase text-[9px] text-brand-gold font-bold tracking-[0.2em]">Приглашение в храм эстетики</p>
          </div>
          <p className="leading-relaxed">Основательница приватного запредельного пространства <br/><strong className="text-brand-red font-semibold tracking-wide hover:underline cursor-pointer">Lady in Red</strong></p>
        </div>

      </main>

      {/* Footer Block */}
      <footer className="w-full max-w-[480px] px-5 pb-10 text-center flex flex-col items-center relative z-10">
        <div className="w-full h-[0.5px] bg-brand-gold/20 mb-6"></div>

        <p id="footer-branding" className="font-sans text-[11px] leading-relaxed text-brand-muted font-normal max-w-[360px]">
          Полина Red &copy; 2026 &middot; Секс-терапия и раскрытие женской сексуальности
        </p>

        {/* Interactive Legal Policy Triggers */}
        <div className="flex justify-center gap-4 mt-3.5 text-[11px] text-brand-muted/80">
          <button 
            id="trigger-privacy"
            onClick={() => setActiveModal('privacy')}
            className="hover:text-brand-red hover:underline transition-colors focus:outline-none cursor-pointer font-medium"
          >
            Политика конфиденциальности
          </button>
          <span className="text-brand-gold opacity-50">&middot;</span>
          <button 
            id="trigger-offer"
            onClick={() => setActiveModal('offer')}
            className="hover:text-brand-red hover:underline transition-colors focus:outline-none cursor-pointer font-medium"
          >
            Договор-оферта
          </button>
        </div>
      </footer>

      {/* Slide-Up Compliance Sheets */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-center min-h-screen">
            
            <motion.div 
              id="modal-backdrop"
              className="absolute inset-0 bg-brand-dark/40 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            />

            <motion.div 
              id="document-modal"
              className="relative w-full max-w-[500px] bg-white rounded-t-[24px] max-h-[85vh] overflow-hidden flex flex-col z-10 border-t border-brand-gold/30 shadow-2xl"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2 text-brand-red">
                  {activeModal === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  <h3 className="title-font text-lg font-bold text-brand-dark">
                    {activeModal === 'privacy' ? 'Политика конфиденциальности' : 'Публичная оферта'}
                  </h3>
                </div>
                <button 
                  id="close-modal"
                  onClick={() => setActiveModal(null)}
                  className="p-1 rounded-full text-brand-muted hover:text-brand-red hover:bg-gray-50 transition-all focus:outline-none cursor-pointer"
                  aria-label="Закрыть"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Container */}
              <div className="px-6 py-6 overflow-y-auto text-left font-sans text-xs sm:text-sm text-brand-dark leading-relaxed space-y-4 max-h-[calc(85vh-70px)]">
                {activeModal === 'privacy' ? (
                  <>
                    <h4 className="font-semibold text-sm text-brand-dark uppercase">1. ОБЩИЕ ПОЛОЖЕНИЯ</h4>
                    <p>Настоящая Политика в отношении обработки персональных данных (далее — «Политика») определяет принципы, порядок и условия сбора, использования и защиты информации о Пользователе специалистом Полиной Red (Веселова П.) далее «Оператор».</p>
                    <p>Использование сервисов сайта, анкет, переход по внешним ссылкам означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.</p>

                    <h4 className="font-semibold text-sm text-brand-dark uppercase">2. СОБИРАЕМЫЕ ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h4>
                    <p>При использовании данного сайта-визитки, заполнении анкет на GetCourse или регистрации в программах Оператор может собирать:</p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Имя, фамилия и отчество Пользователя;</li>
                      <li>Контактный телефон и адрес электронной почты;</li>
                      <li>Юзернейм в мессенджерах (Telegram, Instagram);</li>
                      <li>Технические данные cookie, IP-адреса и параметры браузера, передаваемые автоматически.</li>
                    </ul>

                    <h4 className="font-semibold text-sm text-brand-dark uppercase">3. ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h4>
                    <p>Информация собирается в целях предоставления доступа к закрытому клубу Lady in Red, проведения бесплатных диагностических сессий, отправки обещанных авторских подарков и практик подписок, а также улучшения клиентского опыта.</p>

                    <h4 className="font-semibold text-sm text-brand-dark uppercase">4. ЗАЩИТА И ПЕРЕДАЧА ИНФОРМАЦИИ</h4>
                    <p>Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных Пользователя от неавторизованного доступа, изменения, раскрытия или уничтожения.</p>
                    <p>Данные могут быть переданы доверенным партнерам (например, платформе GetCourse) исключительно для выполнения обязательств по оказанию информационных услуг.</p>
                    <p>Настоящая политика действует бессрочно до её обновления Оператором.</p>
                  </>
                ) : (
                  <>
                    <h4 className="font-semibold text-sm text-brand-dark uppercase">ПУБЛИЧНЫЙ ДОГОВОР-ОФЕРТА</h4>
                    <p className="italic">на оказание информационно-консультационных услуг и предоставление доступа к материалам закрытого клуба</p>
                    
                    <h4 className="font-semibold text-sm text-brand-dark uppercase">1. ПРЕДМЕТ ДОГОВОРА</h4>
                    <p>Исполнитель (Полина Red) обязуется оказать Заказчику информационно-консультационные услуги (включая проведение индивидуальных диагностических консультаций, предоставление доступа к онлайн-практикам на раскрепощение, участие в закрытом Клубе), а Заказчик обязуется принять и оплатить услуги в соответствии с выбранным тарифом.</p>

                    <h4 className="font-semibold text-sm text-brand-dark uppercase">2. АКЦЕПТ ОФЕРТЫ</h4>
                    <p>Полным и безоговорочным акцептом (принятием) настоящей Оферты является совершение Заказчиком любого из следующих действий: заполнение анкеты на диагностику, активация ссылки на получение бесплатной практики, совершение оплаты услуг Клуба или приобретение книги на Литрес.</p>

                    <h4 className="font-semibold text-sm text-brand-dark uppercase">3. ПОРЯДОК ОКАЗАНИЯ УСЛУГ</h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Информационные сессии проводятся в согласованном онлайн-формате.</li>
                      <li>Доступ к закрытому клубу «Lady in Red» предоставляется после верификации оплаты на сайте клуба.</li>
                      <li>Все материалы предоставляются исключительно для личного использования. Копирование, распространение или передача третьим лицам запрещены законом об авторском праве.</li>
                    </ul>

                    <h4 className="font-semibold text-sm text-brand-dark uppercase">4. ОТВЕТСТВЕННОСТЬ СТОРОН</h4>
                    <p>Исполнитель несет ответственность за качество предоставляемых материалов. Консультации психологического характера носят рекомендательный характер — итоговый психологический и физический результат зависит от индивидуальной вовлеченности Заказчика.</p>
                    <p>Заказчик гарантирует достоверность предоставляемых контактных данных для связи и отправки материалов.</p>
                  </>
                )}
                
                <div className="pt-6 pb-2 text-center">
                  <button 
                    id="doc-accept-button"
                    onClick={() => setActiveModal(null)}
                    className="w-full max-w-[260px] py-2 px-6 rounded-[12px] bg-brand-dark hover:bg-brand-red text-white font-sans text-xs font-medium transition-colors duration-300 focus:outline-none cursor-pointer"
                  >
                    Ясно, закрыть документ
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
