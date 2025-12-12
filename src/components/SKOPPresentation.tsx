import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
  mdiHomeCity,mdiFactory,mdiRoadVariant,
  mdiAccountHardHat,
  mdiPackageVariant,
  mdiFileDocumentOutline,
  mdiShieldCheck,
  mdiCurrencyUsd,
  mdiMagnify,
  mdiAlertCircle,
  mdiFileDocument,
  mdiChartLine,
  mdiDomain,
  mdiAccountGroup,
  mdiCellphone,
  mdiTrendingUp,
  mdiLightbulbOn,
  mdiRocketLaunch,
  mdiDiamond,
  mdiFloorPlan,
  mdiLinkVariant,
  mdiHomeAutomation,
  mdiShieldHome,
  mdiMedicalBag,
  mdiSchool,
  mdiBriefcase,
  mdiStar,
  mdiCheck,
  mdiCalendar,
  mdiChat,
  mdiCreditCard,
  mdiHandshake,
  mdiClock,
  mdiHeart,
  mdiTrophy,
  mdiPalette,
  mdiCalculator,
  mdiRuler,
  mdiEye,
  mdiCog,
  mdiCloudUpload,
  mdiStore,
  mdiTruck,
  mdiChartBar,
  mdiTarget,
  mdiLightningBolt,
  mdiScale,
  mdiSignature,
  mdiBellRing,
  mdiDatabase,
  mdiSecurity,
  mdiLeaf,
  mdiPhone,
  mdiEmail,
  mdiWeb,
  mdiPrinter,
  mdiFormatQuoteOpen,
  mdiCheckCircle,
  mdiArrowRight,
} from "@mdi/js";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerFast = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Logos Component
const LogoBar = () => (
  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20 no-print">
    <motion.img
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      src="/logo/skop.png"
      alt="SCOP Logo"
      className="h-10 md:h-14 w-auto object-contain rounded-lg shadow-lg bg-white/10 backdrop-blur-sm p-1"
    />
    <motion.img
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      src="/logo/btn.png"
      alt="Organizer Logo"
      className="h-10 md:h-14 w-auto object-contain rounded-lg shadow-lg bg-white/10 backdrop-blur-sm p-1"
    />
  </div>
);

// Print Logos
const PrintLogos = () => (
  <div className="hidden print:flex justify-between items-center mb-3">
    <img
      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop"
      alt="SCOP Logo"
      className="h-12 w-auto object-contain"
    />
    <img
      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop"
      alt="Organizer Logo"
      className="h-12 w-auto object-contain"
    />
  </div>
);

// Interactive Slide Indicator
const SlideIndicator = ({ total }: { total: number }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.slide');
      let current = 1;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = index + 1;
        }
      });
      
      setActiveSlide(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (slideNum: number) => {
    const element = document.getElementById(`slide-${slideNum}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 no-print hidden lg:flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => scrollToSlide(i + 1)}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className={`relative w-4 h-4 rounded-full transition-all duration-500 cursor-pointer group ${
            i + 1 === activeSlide
              ? "bg-primary shadow-glow"
              : "bg-muted/50 hover:bg-primary/50"
          }`}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {i + 1 === activeSlide && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-navy/90 text-secondary-foreground text-xs px-3 py-1 rounded-lg whitespace-nowrap"
              >
                Slide {i + 1}
              </motion.span>
            )}
          </AnimatePresence>
          
          {/* Ripple effect */}
          {i + 1 === activeSlide && (
            <motion.span
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute inset-0 rounded-full bg-primary"
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

const PrintButton = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedSlides, setSelectedSlides] = useState<number[]>([]);
  const [isPrinting, setIsPrinting] = useState(false);
  const [currentPrintSlide, setCurrentPrintSlide] = useState(0);
  
  const slides = [
    { id: 1, title: "Cover - SCOP Introduction" },
    { id: 2, title: "Problem - Krisis Keterjangkauan" },
    { id: 3, title: "Opportunity - Golden Market" },
    { id: 4, title: "Solution - SCOP Ecosystem" },
    { id: 5, title: "Platform - Multi-Platform" },
    { id: 6, title: "Blueprint - Smart Blueprint" },
    { id: 7, title: "Impact - Vision & Impact" },
  ];

  const toggleSlide = (slideId: number) => {
    setSelectedSlides(prev =>
      prev.includes(slideId)
        ? prev.filter(id => id !== slideId)
        : [...prev, slideId].sort((a, b) => a - b)
    );
  };

  const selectAll = () => {
    setSelectedSlides(slides.map(s => s.id));
  };

  const deselectAll = () => {
    setSelectedSlides([]);
  };

  const printSelectedSlides = async () => {
    if (selectedSlides.length === 0) return;
    
    setIsPrinting(true);
    setShowDialog(false);

    // Add print styles
    const printStyle = document.createElement('style');
    printStyle.id = 'print-style-override';
    printStyle.textContent = `
      @media print {
        @page {
          size: auto;
          margin: 0;
        }
        
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          overflow: visible !important;
          height: auto !important;
        }
        
        body > div {
          overflow: visible !important;
        }
        
        .slide {
          display: none !important;
          page-break-after: always !important;
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          width: 100% !important;
          min-height: 100vh !important;
          height: auto !important;
          position: relative !important;
          overflow: visible !important;
        }
        
        ${selectedSlides.map(id => `
          .slide#slide-${id} {
            display: flex !important;
          }
        `).join('\n')}
        
        .slide:last-of-type {
          page-break-after: auto !important;
        }
        
        * {
          animation: none !important;
          transition: none !important;
          transform: none !important;
        }
        
        .no-print,
        .fixed:not(.slide *),
        button,
        [class*="fixed"] {
          display: none !important;
        }
        
        .absolute.top-4 {
          display: flex !important;
        }
      }
    `;
    document.head.appendChild(printStyle);

    // Wait for styles to apply
    await new Promise(resolve => setTimeout(resolve, 500));

    // Print
    window.print();

    // Wait for print dialog
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Remove print styles
    const styleElement = document.getElementById('print-style-override');
    if (styleElement) {
      styleElement.remove();
    }

    setIsPrinting(false);
    setCurrentPrintSlide(0);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 179, 0, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowDialog(true)}
        className="fixed bottom-6 right-6 z-50 no-print gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all duration-300"
      >
        <Icon path={mdiPrinter} size={1} />
        Print Presentasi
      </motion.button>

      {/* Selection Dialog */}
      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/90 backdrop-blur-sm z-[100] no-print flex items-center justify-center p-4"
            onClick={() => setShowDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-dark rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-bold text-primary">
                  Pilih Slide untuk Print
                </h3>
                <button
                  onClick={() => setShowDialog(false)}
                  className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-destructive/20 transition-colors"
                >
                  <span className="text-secondary-foreground text-xl">×</span>
                </button>
              </div>

              <div className="flex gap-2 mb-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={selectAll}
                  className="flex-1 px-4 py-2 glass rounded-lg text-secondary-foreground hover:bg-primary/20 transition-colors"
                >
                  Pilih Semua
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={deselectAll}
                  className="flex-1 px-4 py-2 glass rounded-lg text-secondary-foreground hover:bg-destructive/20 transition-colors"
                >
                  Hapus Semua
                </motion.button>
              </div>

              <div className="space-y-2 mb-6">
                {slides.map((slide) => (
                  <motion.div
                    key={slide.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleSlide(slide.id)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedSlides.includes(slide.id)
                        ? 'gradient-primary text-primary-foreground'
                        : 'glass text-secondary-foreground hover:bg-primary/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center border-2 transition-colors ${
                          selectedSlides.includes(slide.id)
                            ? 'border-primary-foreground bg-primary-foreground'
                            : 'border-secondary-foreground/30'
                        }`}
                      >
                        {selectedSlides.includes(slide.id) && (
                          <Icon path={mdiCheck} size={0.7} className="text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">Slide {slide.id}</div>
                        <div className={`text-sm ${selectedSlides.includes(slide.id) ? 'opacity-90' : 'opacity-70'}`}>
                          {slide.title}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDialog(false)}
                  className="flex-1 px-6 py-3 glass rounded-xl text-secondary-foreground font-semibold hover:bg-destructive/20 transition-colors"
                >
                  Batal
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={printSelectedSlides}
                  disabled={selectedSlides.length === 0}
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    selectedSlides.length === 0
                      ? 'bg-muted text-muted-foreground cursor-not-allowed'
                      : 'gradient-primary text-primary-foreground'
                  }`}
                >
                  <Icon path={mdiPrinter} size={0.9} />
                  Print {selectedSlides.length} Slide
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Printing Indicator */}
      <AnimatePresence>
        {isPrinting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/90 backdrop-blur-sm z-[100] no-print flex items-center justify-center"
          >
            <div className="glass-dark rounded-2xl p-8 text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-2">
                Mempersiapkan Print...
              </h3>
              <p className="text-secondary-foreground/80">
                Mohon tunggu sebentar
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const numericMatch = value.match(/[\d.,]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    
    const numericPart = numericMatch[0].replace(/,/g, '');
    const prefix = value.substring(0, value.indexOf(numericMatch[0]));
    const endValue = parseFloat(numericPart);
    
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      const current = start + (endValue - start) * eased;
      
      if (endValue >= 1000) {
        setDisplayValue(prefix + current.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, "."));
      } else if (endValue < 10) {
        setDisplayValue(prefix + current.toFixed(1));
      } else {
        setDisplayValue(prefix + Math.round(current).toString());
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    animate();
  }, [value]);
  
  return <span>{displayValue}{suffix}</span>;
};

// Floating Particles
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-primary/20 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          y: [null, Math.random() * -200, null],
          x: [null, Math.random() * 100 - 50, null],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

// Slide 1: Cover
const CoverSlide = () => (
  <section
    id="slide-1"
    className="slide min-h-screen gradient-hero flex flex-col items-center justify-center relative overflow-hidden px-4 print:min-h-0 print:h-auto print:page-break-after-always"
  >
    <LogoBar />
    
    
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" 
      />
    </div>
    
    <FloatingParticles />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="relative z-10 text-center max-w-5xl mx-auto pt-16"
    >
      {/* Icon Set */}
      <motion.div variants={fadeInUp} className="flex justify-center gap-4 mb-8">
        {[mdiHomeCity, mdiAccountHardHat, mdiPackageVariant, mdiFileDocumentOutline, mdiLinkVariant].map(
          (icon, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="w-14 h-14 rounded-xl glass flex items-center justify-center cursor-pointer"
            >
              <Icon path={icon} size={1.3} className="text-primary" />
            </motion.div>
          )
        )}
      </motion.div>

      {/* Main Title */}
      <motion.h1
        variants={scaleIn}
        className="text-7xl md:text-9xl font-display font-bold text-primary mb-3 tracking-tight"
        style={{ textShadow: "0 0 60px rgba(255, 179, 0, 0.3)" }}
      >
        SCOP
      </motion.h1>

      <motion.h2
        variants={fadeInUp}
        className="text-2xl md:text-4xl font-display text-secondary-foreground mb-8"
      >
        Smart Construction One Platform
      </motion.h2>

      <motion.div 
        variants={rotateIn} 
        className="glass-dark rounded-2xl p-6 md:p-8 mb-8 max-w-3xl mx-auto relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-xl md:text-2xl text-secondary-foreground leading-relaxed relative z-10">
          "Membangun Masa Depan yang{" "}
          <motion.span 
            animate={{ color: ["#FFB300", "#F57C00", "#FFB300"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-semibold"
          >
            Terjangkau
          </motion.span>,{" "}
          <motion.span 
            animate={{ color: ["#F57C00", "#FFB300", "#F57C00"] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="font-semibold"
          >
            Transparan
          </motion.span>, dan{" "}
          <motion.span 
            animate={{ color: ["#FFB300", "#F57C00", "#FFB300"] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="font-semibold"
          >
            Terpercaya
          </motion.span>"
        </p>
      </motion.div>

      <motion.p
        variants={fadeInUp}
        className="text-lg md:text-xl text-secondary-foreground/80 mb-12"
      >
        One-Stop Solution untuk Ekosistem Konstruksi Indonesia
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="flex flex-col md:flex-row gap-4 justify-center items-center text-secondary-foreground/60 text-sm"
      >
        <motion.span whileHover={{ scale: 1.1, color: "#FFB300" }}>
          Presented by: Fajar Iryanto Putra | Ahri Suwandi | Muhamad Ikbal
        </motion.span>
        <span className="hidden md:block">•</span>
        
        <motion.span whileHover={{ scale: 1.1, color: "#FFB300" }}>
          BTN Housing Preneur 2025
        </motion.span>
      </motion.div>
    </motion.div>
  </section>
);

// Slide 2: The Painful Reality
const ProblemSlide = () => {
  const problems = [
    {
      icon: mdiCurrencyUsd,
      title: "Ketidaktransparanan Harga",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      points: [
        "73% masyarakat tidak tahu harga wajar material & jasa",
        "Sistem tradisional menciptakan gap informasi yang merugikan konsumen",
        "Tidak ada standar harga yang jelas - rentan mark-up berlebihan",
        '"Harga tukang hari ini beda dengan besok"',
      ],
    },
    {
      icon: mdiMagnify,
      title: "Informasi Yang Beredar",
      color: "text-info",
      bgColor: "bg-info/10",
      points: [
        "lebih dari 15 aplikasi berbeda untuk satu proyek konstruksi",
        "Tidak ada data historis & review terpercaya",
        "Risiko penipuan & kualitas tidak terjamin",
      ],
    },
    {
      icon: mdiAccountHardHat,
      title: "Masih Banyak Pekerja Yang Belum Terlindungi",
      color: "text-warning",
      bgColor: "bg-warning/10",
      points: [
        "Belum meratanya asuransi kecelakaan kerja",
        "Sistem upah tidak standar & tidak adil",
        "Tidak ada jenjang karir & pelatihan",
      ],
    },
    {
      icon: mdiFileDocument,
      title: "Dokumentasi Legal Yang Rentan",
      color: "text-success",
      bgColor: "bg-success/10",
      points: [
        "Sertifikat mudah dipalsukan",
        
        "Belum ada proof of authenticity permanen",
      ],
    },
  ];

  return (
    <section
      id="slide-2"
      className="slide min-h-screen gradient-surface py-16 md:py-24 px-4 relative print:min-h-0 print:h-auto print:page-break-after-always"
    >
      <LogoBar />
     
      
      <div className="max-w-7xl mx-auto pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-3"
            >
              INSPIRATION
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
              Krisis Keterjangkauan dalam
              <br />
              <span className="text-gradient">Industri Konstruksi Indonesia</span>
            </h2>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="glass-dark rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon path={mdiFormatQuoteOpen} size={2} className="text-primary mx-auto mb-3" />
            </motion.div>
            <p className="text-xl md:text-2xl text-secondary-foreground">
              "Membangun rumah impian seharusnya{" "}
              <span className="text-primary font-semibold">bukan mimpi yang menakutkan</span>"
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border/50 group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-xl ${problem.bgColor} flex items-center justify-center mb-3`}
                >
                  <Icon path={problem.icon} size={1.3} className={problem.color} />
                </motion.div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                <ul className="space-y-2">
                  {problem.points.map((point, j) => (
                    <motion.li 
                      key={j} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <Icon path={mdiAlertCircle} size={0.7} className={`${problem.color} mt-1 flex-shrink-0`} />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            whileHover={{ scale: 1.02 }}
            className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 text-center mb-8"
          >
            <p className="text-lg md:text-xl text-foreground">
              <span className="font-bold">Hasil Survey:</span> 8 dari 10 pemilik rumah merasa{" "}
              <motion.span 
              
                transition={{ duration: 1, repeat: Infinity }}
                className="text-destructive font-semibold inline-block"
              >
                "tertipu"
              </motion.span>{" "}atau{" "}
              <motion.span 
              
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                className="text-destructive font-semibold inline-block"
              >
                "dirugikan"
              </motion.span>{" "}dalam proses konstruksi
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-navy rounded-2xl p-6 text-center">
            <p className="text-lg md:text-xl text-secondary-foreground">
              <span className="text-primary font-bold">Terjangkau ≠ Murah</span> | Terjangkau ={" "}
              <span className="text-primary">MUDAH DIAKSES</span> +{" "}
              <span className="text-primary">TRANSPARAN</span> +{" "}
              <span className="text-primary">ADIL</span> +{" "}
              <span className="text-primary">PROFESIONAL</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Slide 3: Golden Opportunity
const OpportunitySlide = () => {
  const marketStats = [
    { value: "Rp 2.880 T", label: "Nilai industri konstruksi 2024", icon: mdiChartLine },
    { value: "1.2 Juta", label: "Kebutuhan rumah per tahun", icon: mdiDomain },
    { value: "95%", label: "Masih menggunakan sistem konvensional", icon: mdiCog },
  ];

  const growthStats = [
    { value: "6.5%", label: "CAGR sektor konstruksi", icon: mdiTrendingUp },
    { value: "85 Juta", label: "Populasi kelas menengah", icon: mdiAccountGroup },
    { value: "68%", label: "Penetrasi smartphone", icon: mdiCellphone },
  ];

  const untapped = [
    { title: "Renovasi & Maintenance", value: "Rp 500+ T/tahun", desc: "Pasar terabaikan" },
    { title: "Smart Home Integration", value: "2% penetrasi", desc: "Potensi massive" },
    { title: "Construction Insurance", value: "<5% adopsi", desc: "Huge gap" },
  ];

  const timeline = [
    { year: "2020-2021", event: "Pandemic → Digital adoption +300%" },
    { year: "2022-2023", event: "Smart Home tech jadi affordable" },
    { year: "2024-2025", event: "Blockchain & NFT mature" },
    { year: "NOW", event: "Perfect Storm untuk Construction Tech", highlight: true },
  ];

  return (
    <section id="slide-3" className="slide min-h-screen gradient-hero py-16 md:py-24 px-4 relative print:min-h-0 print:h-auto print:page-break-after-always">
      <LogoBar />
     
      
      <div className="max-w-7xl mx-auto pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3"
            >
              GOLDEN OPPORTUNITY
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary-foreground mb-3">
              Pasar Triliunan yang
              <br />
              <span className="text-primary">Menunggu Inovasi Baru</span>
            </h2>
          </motion.div>

          {/* Market Size */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h3 className="text-xl font-display font-bold text-primary mb-3 flex items-center gap-2">
              <Icon path={mdiChartBar} size={1} /> Market Size
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {marketStats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon path={stat.icon} size={1.5} className="text-primary mx-auto mb-3" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <p className="text-secondary-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Growth Potential */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h3 className="text-xl font-display font-bold text-primary mb-3 flex items-center gap-2">
              <Icon path={mdiTrendingUp} size={1} /> Growth Potential
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {growthStats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <Icon path={stat.icon} size={1.5} className="text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <p className="text-secondary-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Untapped Segments */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h3 className="text-xl font-display font-bold text-primary mb-3 flex items-center gap-2">
              <Icon path={mdiTarget} size={1} /> Untapped Segments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {untapped.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255, 179, 0, 0.5)" }}
                  className="bg-card/10 border border-primary/30 rounded-2xl p-6 transition-all"
                >
                  <h4 className="font-display font-bold text-secondary-foreground mb-2">{item.title}</h4>
                  <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
                  <p className="text-secondary-foreground/60 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h3 className="text-xl font-display font-bold text-primary mb-3 flex items-center gap-2">
              <Icon path={mdiClock} size={1} /> Why Now?
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className={`flex-1 rounded-xl p-4 ${
                    item.highlight
                      ? "gradient-primary text-primary-foreground"
                      : "glass text-secondary-foreground"
                  }`}
                >
                  <div className="font-display font-bold mb-1">{item.year}</div>
                  <p className={`text-sm ${item.highlight ? "" : "opacity-80"}`}>{item.event}</p>
                  {item.highlight && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="mt-2"
                    >
                      <Icon path={mdiRocketLaunch} size={1} />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blue Ocean */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl p-6 text-center mb-6"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon path={mdiLightbulbOn} size={2} className="text-primary mx-auto mb-3" />
            </motion.div>
            <h3 className="text-xl font-display font-bold text-secondary-foreground mb-2">
              Blue Ocean Strategy
            </h3>
            <p className="text-secondary-foreground/80">
              Tidak ada platform yang mengintegrasikan <span className="text-primary font-semibold">SELURUH</span>{" "}
              ekosistem konstruksi dalam satu solusi
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-lg text-secondary-foreground/80">
              "Kami tidak menciptakan pasar baru - kami{" "}
              <span className="text-primary font-semibold">mengorganisir pasar yang sudah ada</span> menjadi lebih
              efisien, transparan, dan terjangkau"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Slide 4: The SCOP Solution
const SolutionSlide = () => {
  const pillars = [
    {
      icon: mdiDiamond,
      title: "Transparent Pricing Engine",
      color: "from-amber-500 to-orange-600",
      points: [
        "Standarisasi harga per wilayah untuk ratusan jenis pekerjaan konstruksi",
        "Real-time material pricing dari ribuan supplier.",
        "Historical data & price prediction algorithm",
      ],
      quote: '"Tidak ada lagi pertanyaan: Apakah harga ini wajar?"',
    },
    {
      icon: mdiFloorPlan,
      title: "Smart Blueprint Marketplace",
      color: "from-blue-500 to-cyan-600",
      points: [
        "Desain 3D dengan material calculator real-time",
        "Step-by-step construction guide terintegrasi",
        "NFT-based ownership untuk karya arsitek",
      ],
      quote: "Resale value predictor: Base + 20% Appreciation",
    },
    {
      icon: mdiLinkVariant,
      title: "Blockchain Infrastructure",
      color: "from-purple-500 to-pink-600",
      points: [
        "Certificate of Authenticity untuk setiap blueprint",
        "Immutable land certificate & building permit",
        "Smart contract untuk payment milestone",
      ],
      quote: '"Trust, verified by technology"',
    },
    {
      icon: mdiHomeAutomation,
      title: "Unified IoT Ecosystem",
      color: "from-green-500 to-emerald-600",
      points: [
        "One app untuk semua smart home devices",
        "Open API untuk berbagai IoT brands",
        "IoT Builder Platform untuk developer innovate",
      ],
      quote: "No need 20 different apps untuk 20 devices",
    },
    {
      icon: mdiShieldHome,
      title: "Complete Protection Suite",
      color: "from-red-500 to-rose-600",
      points: [
        "Building Insurance & Maintenance Insurance",
        "Worker's Safety Insurance ",
        "Project Monitoring & Quality Assurance",
      ],
      quote: "Flexible Payment: Cicilan & PayLater",
    },
  ];

  return (
    <section id="slide-4" className="slide min-h-screen gradient-surface py-16 md:py-24 px-4 relative print:min-h-0 print:h-auto print:page-break-after-always">
      <LogoBar />
      
      
      <div className="max-w-7xl mx-auto pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="inline-block px-4 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-3"
            >
              IDEATION
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
              SCOP: Ekosistem Konstruksi yang
              <br />
              <span className="text-gradient">Benar-Benar Terintegrasi</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "Bayangkan jika membangun rumah semudah berbelanja online - transparan, terukur, dan terlindungi"
            </p>
          </motion.div>

          <motion.div variants={staggerFast} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-3`}
                >
                  <Icon path={pillar.icon} size={1.5} className="text-secondary-foreground" />
                </motion.div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <ul className="space-y-2 mb-3">
                  {pillar.points.map((point, j) => (
                    <motion.li 
                      key={j} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <Icon path={mdiCheck} size={0.6} className="text-success mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-primary text-sm font-medium italic">{pillar.quote}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={scaleIn} 
            whileHover={{ scale: 1.02 }}
            className="gradient-primary rounded-3xl p-8 text-center relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-3 relative z-10">
              ONE PLATFORM - INFINITE POSSIBILITIES
            </h3>
            <p className="text-primary-foreground/90 text-lg relative z-10">
              "Dari ide pertama hingga kunci terakhir - SCOP menemani setiap langkah perjalanan konstruksi Anda"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Slide 5: Multi-Platform Ecosystem
const PlatformSlide = () => {
  const platforms = [
    {
      id: 1,
      name: "USER APP",
      subtitle: "Your Construction Command Center",
      icon: mdiCellphone,
      color: "bg-info",
      features: [
        { icon: mdiFileDocumentOutline, text: "Project Management" },
        { icon: mdiMagnify, text: "Smart AI Matching" },
        { icon: mdiCalculator, text: "Budget Planner" },
        { icon: mdiEye, text: "Live Monitoring" },
        { icon: mdiChat, text: "Direct Communication" },
        { icon: mdiCreditCard, text: "Milestone Payment" },
        { icon: mdiStar, text: "Review System" },
      ],
    },
    {
      id: 2,
      name: "WORKER APP",
      subtitle: "Professional Growth for Every Worker",
      icon: mdiAccountHardHat,
      color: "bg-warning",
      features: [
        { icon: mdiBriefcase, text: "Job Marketplace" },
        { icon: mdiAccountGroup, text: "Agency Formation" },
        { icon: mdiCurrencyUsd, text: "Earnings Dashboard" },
        { icon: mdiCalendar, text: "Schedule Manager" },
      ],
      tiers: [
        { name: "Bronze", desc: "Entry Level - Basic jobs", color: "bg-orange-400" },
        { name: "Silver", desc: "Skilled - Intermediate work", color: "bg-gray-400" },
        { name: "Gold", desc: "Expert - Advanced techniques", color: "bg-yellow-500" },
        { name: "Platinum", desc: "Master - Unlimited projects", color: "bg-slate-700" },
      ],
    },
    {
      id: 3,
      name: "ARCHITECT STUDIO",
      subtitle: "Design Tool yang Menghasilkan Uang",
      icon: mdiPalette,
      color: "bg-purple-500",
      features: [
        { icon: mdiFloorPlan, text: '3D Builder — Design buildings as easily as placing blocks in Minecraft"' },
        { icon: mdiCalculator, text: "Auto Material Calculator" },
        { icon: mdiRuler, text: "Real-world Scale" },
        { icon: mdiCloudUpload, text: "Cloud Save & Collaboration" },
        { icon: mdiStore, text: "NFT Marketplace Listing" },
        { icon: mdiChartBar, text: "Analytics Dashboard" },
        { icon: mdiCurrencyUsd, text: "70% Revenue Share" },
      ],
    },
    {
      id: 4,
      name: "IoT BUILDER",
      subtitle: "Democratizing Smart Home Development",
      icon: mdiHomeAutomation,
      color: "bg-green-500",
      features: [
        { icon: mdiCog, text: "SDK & API Documentation" },
        { icon: mdiFloorPlan, text: "Testing Sandbox" },
        { icon: mdiRocketLaunch, text: "Instant Deployment" },
        { icon: mdiChartLine, text: "Usage Analytics" },
        { icon: mdiStore, text: "Direct-to-Consumer Sales" },
      ],
    },
    {
      id: 5,
      name: "MERCHANT POS",
      subtitle: "Digital Transformation untuk Toko",
      icon: mdiStore,
      color: "bg-rose-500",
      features: [
        { icon: mdiPackageVariant, text: "Inventory Management" },
        { icon: mdiTruck, text: "Delivery Tracking" },
        { icon: mdiCreditCard, text: "Multi-Payment Gateway" },
        { icon: mdiChartBar, text: "Sales Analytics" },
        { icon: mdiTarget, text: "Targeted Promotion" },
        { icon: mdiHandshake, text: "B2B Bulk Order" },
        { icon: mdiLightningBolt, text: "Flash Deal System" },
      ],
    },
    {
      id: 6,
      name: "NOTARY PORTAL",
      subtitle: "Legal Process, Simplified & Secured",
      icon: mdiScale,
      color: "bg-slate-600",
      features: [
        { icon: mdiFileDocument, text: "Digital Document Processing" },
        { icon: mdiLinkVariant, text: "Blockchain Certificate" },
        { icon: mdiMagnify, text: "Instant Verification" },
        { icon: mdiBriefcase, text: "Case Management" },
        { icon: mdiSignature, text: "E-Signature Integration" },
        { icon: mdiDatabase, text: "Immutable Records" },
        { icon: mdiBellRing, text: "Renewal Reminders" },
      ],
    },
  ];

  return (
    <section id="slide-5" className="slide min-h-screen gradient-hero py-16 md:py-24 px-4 relative print:min-h-0 print:h-auto print:page-break-after-always">
      <LogoBar />
      
      
      <div className="max-w-7xl mx-auto pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3"
            >
              DESIGN CONCEPT
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary-foreground mb-3">
              6 Platform, 1 Ekosistem
              <br />
              <span className="text-primary">Unlimited Synergy</span>
            </h2>
          </motion.div>

          {/* Blockchain Core */}
          <motion.div variants={scaleIn} className="glass rounded-2xl p-6 mb-8 text-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <Icon path={mdiLinkVariant} size={2} className="text-primary-foreground" />
            </motion.div>
            <h3 className="text-xl font-display font-bold text-primary mb-2">BLOCKCHAIN CORE</h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-secondary-foreground/80">
              {["Smart Contracts", "NFT Marketplace", "Immutable Certificates", "Transparent History"].map((item, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 glass rounded-full cursor-pointer"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Platforms Grid */}
          <motion.div variants={staggerFast} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 ${platform.color} rounded-xl flex items-center justify-center mb-3`}
                >
                  <Icon path={platform.icon} size={1.3} className="text-secondary-foreground" />
                </motion.div>
                <h3 className="text-lg font-display font-bold text-secondary-foreground mb-1">
                  Platform {platform.id}: {platform.name}
                </h3>
                <p className="text-primary text-sm mb-3">{platform.subtitle}</p>
                
                <ul className="space-y-2">
                  {platform.features.slice(0, 5).map((feature, j) => (
                    <motion.li 
                      key={j} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-center gap-2 text-secondary-foreground/80 text-sm"
                    >
                      <Icon path={feature.icon} size={0.6} className="text-primary flex-shrink-0" />
                      <span>{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>

                {platform.tiers && (
                  <div className="mt-4 pt-4 border-t border-secondary-foreground/10">
                    <p className="text-xs text-primary font-semibold mb-2">TIER SYSTEM:</p>
                    <div className="flex flex-wrap gap-1">
                      {platform.tiers.map((tier, j) => (
                        <motion.span 
                          key={j} 
                          whileHover={{ scale: 1.1 }}
                          className={`${tier.color} text-xs px-2 py-1 rounded text-secondary-foreground cursor-pointer`}
                        >
                          {tier.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-lg text-secondary-foreground/80">
              "Setiap platform independen namun saling memperkuat -{" "}
              <span className="text-primary font-semibold">menciptakan network effect yang eksponensial</span>"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Slide 6: Blueprint Revolution
const BlueprintSlide = () => {
  const features = [
    {
      title: "Interactive 3D Design",
      subtitle: '"Build like Minecraft, Calculate like Professional Engineer"',
      icon: mdiFloorPlan,
      items: [
        "Drag-and-drop 100+ material types",
        "Precision measurement dengan snap-to-grid",
        "Real-world textures & lighting simulation",
        "Virtual walkthrough mode (First-person view)",
        "4K rendering untuk presentasi",
        "Physics simulation untuk structural check",
      ],
    },
    {
      title: "Material-to-Cost Calculator™",
      subtitle: '"Transparency Through Technology"',
      icon: mdiCalculator,
      example: {
        input: "User tambah 1 dinding bata merah (4m x 3m)",
        calculation: [
          { item: "Bata merah", qty: "600 pcs × Rp 800", total: "Rp 480,000" },
          { item: "Semen", qty: "6 sak × Rp 65,000", total: "Rp 390,000" },
          { item: "Pasir", qty: "0.5m³ × Rp 250,000", total: "Rp 125,000" },
          { item: "Tenaga kerja", qty: "2 hari × Rp 150,000", total: "Rp 300,000" },
        ],
        total: "Rp 1,295,000",
      },
    },
    {
      title: "Step-by-Step Construction Guide",
      subtitle: '"Professional Workflow untuk Setiap Project"',
      icon: mdiCheck,
      phases: [
        { phase: "Phase 1: Persiapan Lahan", days: "3-5 hari" },
        { phase: "Phase 2: Pondasi", days: "7-14 hari" },
        { phase: "Phase 3: Struktur", days: "30-45 hari" },
        { phase: "Phase 4: Finishing", days: "20-30 hari" },
        { phase: "Phase 5: MEP & IoT", days: "10-15 hari" },
      ],
    },
    {
      title: "Resale Value Predictor™",
      subtitle: '"Investment Decision Made Easy"',
      icon: mdiChartLine,
      formula: [
        { label: "Base Construction Cost", value: "Rp 500 juta" },
        { label: "+ Appreciation (5 tahun)", value: "Rp 100 juta" },
        { label: "+ Maintenance Score", value: "Rp 25 juta" },
        { label: "+ Location Premium", value: "Rp 75 juta" },
        { label: "+ Smart Home Features", value: "Rp 50 juta" },
      ],
      result: "Rp 750 juta (50% ROI)",
    },
  ];

  return (
    <section id="slide-6" className="slide min-h-screen gradient-surface py-16 md:py-24 px-4 relative print:min-h-0 print:h-auto print:page-break-after-always">
      <LogoBar />
      
      
      <div className="max-w-7xl mx-auto pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="inline-block px-4 py-1 rounded-full bg-info/10 text-info text-sm font-medium mb-3"
            >
              BLUEPRINT REVOLUTION
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
              Smart Blueprint: Dari Imajinasi ke
              <br />
              <span className="text-gradient">Realisasi dalam Hitungan Menit</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "Mengubah cara Indonesia mendesain dan membangun - satu blueprint dalam satu waktu"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* 3D Design */}
            <motion.div 
              variants={fadeInLeft} 
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center"
                >
                  <Icon path={mdiFloorPlan} size={1.2} className="text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{features[0].title}</h3>
                  <p className="text-primary text-sm">{features[0].subtitle}</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {features[0].items.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <Icon path={mdiCheck} size={0.5} className="text-success flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Calculator */}
            <motion.div 
              variants={fadeInRight} 
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center"
                >
                  <Icon path={mdiCalculator} size={1.2} className="text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{features[1].title}</h3>
                  <p className="text-primary text-sm">{features[1].subtitle}</p>
                </div>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-3">{features[1].example?.input}</p>
                <div className="space-y-1">
                  {features[1].example?.calculation.map((calc, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{calc.item}: {calc.qty}</span>
                      <span className="font-medium text-foreground">{calc.total}</span>
                    </motion.div>
                  ))}
                  <div className="border-t border-border mt-2 pt-2 flex justify-between font-bold">
                    <span>TOTAL</span>
                    <span className="text-primary">{features[1].example?.total}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Construction Guide */}
            <motion.div 
              variants={fadeInLeft} 
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center"
                >
                  <Icon path={mdiCheck} size={1.2} className="text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{features[2].title}</h3>
                  <p className="text-primary text-sm">{features[2].subtitle}</p>
                </div>
              </div>
              <div className="space-y-2">
                {features[2].phases?.map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between bg-muted rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2">
                      <Icon path={mdiCheckCircle} size={0.7} className="text-success" />
                      <span className="text-sm text-foreground">{phase.phase}</span>
                    </div>
                    <span className="text-xs text-primary font-medium">{phase.days}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Resale Value */}
            <motion.div 
              variants={fadeInRight} 
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center"
                >
                  <Icon path={mdiChartLine} size={1.2} className="text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{features[3].title}</h3>
                  <p className="text-primary text-sm">{features[3].subtitle}</p>
                </div>
              </div>
              <div className="bg-muted rounded-xl p-4">
                <div className="space-y-2">
                  {features[3].formula?.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">{item.value}</span>
                    </motion.div>
                  ))}
                  <div className="border-t border-border mt-2 pt-2 flex justify-between font-bold">
                    <span>Estimated Value</span>
                    <span className="text-success">{features[3].result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Marketplace Stats */}
          <motion.div 
            variants={scaleIn}
            className="glass-dark rounded-2xl p-6"
          >
            <h3 className="text-xl font-display font-bold text-primary text-center mb-3">
              Blockchain-Powered Marketplace Stats (Year 1)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { value: "500+", label: "Architects Verified" },
                { value: "5,000+", label: "Blueprints Available" },
                { value: "Rp 10 M", label: "GMV Year 1" },
                { value: "Rp 2-20 jt", label: "Average Price" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <p className="text-secondary-foreground/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Slide 7: Impact & Vision
const ImpactSlide = () => {
  const impacts = [
    {
      icon: mdiCurrencyUsd,
      title: "Transparansi Ekonomi",
      color: "text-primary",
      bgColor: "bg-primary/10",
      points: [
        "Menghilangkan mark-up tidak wajar (saving 20-30%)",
        "Standarisasi harga ribuan jenis pekerjaan",
        "Real-time pricing dari ribuan supplier",
      ],
      target: "Target: Rp 1 Triliun savings (Year 3)",
    },
    {
      icon: mdiShieldCheck,
      title: "Perlindungan Konsumen 360°",
      color: "text-info",
      bgColor: "bg-info/10",
      points: [
        "Escrow payment system",
        "AI quality check & monitoring",
        "Money-back guarantee",
      ],
      target: "Target: 99.5% satisfaction rate",
    },
    {
      icon: mdiAccountHardHat,
      title: "Pemberdayaan Pekerja",
      color: "text-warning",
      bgColor: "bg-warning/10",
      points: [
        "Comprehensive insurance package",
        "Free training & certification",
        "30% income increase average",
      ],
      target: "Target: 100,000 workers trained (Year 2)",
    },
    {
      icon: mdiSecurity,
      title: "Keamanan Legal",
      color: "text-success",
      bgColor: "bg-success/10",
      points: [
        "Blockchain-based certificates",
        "Digital notary (70% faster)",
        "Immutable ownership records",
      ],
      target: "Target: 50,000 blockchain certs (Year 1)",
    },
    {
      icon: mdiLightningBolt,
      title: "Efisiensi Total",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      points: [
        "1 app replaces 15+ apps",
        "Up to 40% quicker project delivery",
        "Reduced material waste",
      ],
      target: "Target: 5 juta active users (Year 3)",
    },
    {
      icon: mdiLeaf,
      title: "Keberlanjutan",
      color: "text-green-600",
      bgColor: "bg-green-100",
      points: [
        "Precise material calculation",
        "Green building options promoted",
        "Recycled material marketplace",
      ],
      target: "Target: 30% waste reduction",
    },
  ];

  const milestones = [
   { year: "2025", desc: "Rancangan awal (core features)" },
{ year: "2026", desc: "Build, testing besar, dan penguatan fondasi platform" },
{ year: "2027", desc: "Peluncuran awal target 1K users all role" },
{ year: "2028", desc: "Ekspansi ke berbagai kota (100K users)" },
{ year: "2030", desc: "Cakupan nasional & pengelolaan lebih dari 10 juta properti" },

  ];

  const beyondConstruction = [
  { icon: mdiLeaf, label: "Agriculture & Plantation" },
  { icon: mdiDomain, label: "Property & Facility Management" },
  { icon: mdiFactory, label: "Industrial & Manufacturing" },
  { icon: mdiRoadVariant, label: "Infrastructure Projects" },
];


  return (
    <section id="slide-7" className="slide min-h-screen gradient-hero py-16 md:py-24 px-4 relative print:min-h-0 print:h-auto print:page-break-after-always">
      <LogoBar />
      
      
      <div className="max-w-7xl mx-auto pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3"
            >
              IMPACT & VISION
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary-foreground mb-3">
              Building Indonesia's Future
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div variants={scaleIn} className="glass-dark rounded-2xl p-6 mb-8 text-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Icon path={mdiFormatQuoteOpen} size={1.5} className="text-primary mx-auto mb-3" />
            </motion.div>
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed max-w-3xl mx-auto">
              "Kami tidak hanya membangun platform - kami{" "}
              <span className="text-primary font-semibold">membangun kepercayaan</span>,{" "}
              <span className="text-primary font-semibold">memberdayakan pekerja</span>, dan{" "}
              <span className="text-primary font-semibold">mendemokratisasi akses konstruksi</span> untuk seluruh Indonesia"
            </p>
          </motion.div>

          {/* Impact Grid */}
          <motion.div variants={staggerFast} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {impacts.map((impact, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass rounded-2xl p-5 hover:shadow-glow transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 ${impact.bgColor} rounded-xl flex items-center justify-center mb-3`}
                >
                  <Icon path={impact.icon} size={1.2} className={impact.color} />
                </motion.div>
                <h3 className="font-display font-bold text-secondary-foreground mb-3">{impact.title}</h3>
                <ul className="space-y-1 mb-3">
                  {impact.points.map((point, j) => (
                    <motion.li 
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-start gap-2 text-secondary-foreground/80 text-sm"
                    >
                      <Icon path={mdiCheckCircle} size={0.5} className="text-primary mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-primary text-sm font-medium">{impact.target}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Ripple Effect */}
          <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-display font-bold text-primary text-center mb-3">The Ripple Effect</h3>
            <div className="flex flex-wrap justify-center items-center gap-2 text-secondary-foreground/80 text-sm">
              {[
                "More Transparency",
                "More Trust",
                "More Transactions",
                "More Data",
                "Better AI",
                "More Efficiency",
                "Lower Costs",
                "More Accessibility",
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center"
                >
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-navy-light rounded-full"
                  >
                    {item}
                  </motion.span>
                  {i < 7 && <Icon path={mdiArrowRight} size={0.8} className="text-primary mx-1" />}
                </motion.div>
              ))}
              <motion.span 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="px-4 py-2 gradient-primary text-primary-foreground rounded-full font-bold"
              >
                EVERYONE WINS
              </motion.span>
            </div>
          </motion.div>

          {/* Vision 2030 */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h3 className="text-xl font-display font-bold text-primary text-center mb-3 flex items-center justify-center gap-2">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Icon path={mdiRocketLaunch} size={1} />
              </motion.div>
              Our Vision for 2030
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {milestones.map((milestone, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl px-4 py-3 text-center min-w-[150px]"
                >
                  <div className="font-display font-bold text-primary">{milestone.year}</div>
                  <p className="text-secondary-foreground/80 text-xs">{milestone.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Beyond Construction */}
          <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-display font-bold text-secondary-foreground text-center mb-3">
              Beyond Construction - Blueprint dapat di-replicate untuk:
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {beyondConstruction.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center gap-2 px-4 py-2 bg-navy-light rounded-full text-secondary-foreground cursor-pointer"
                >
                  <Icon path={item.icon} size={0.8} className="text-primary" />
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: mdiChartLine, title: "For Investors", desc: "Investasi untuk transform industri triliunan rupiah yang belum tersentuh teknologi" },
              { icon: mdiHandshake, title: "For Partners", desc: "Bergabung dengan ekosistem win-win untuk semua stakeholder" },
              { icon: mdiHeart, title: "For Society", desc: "Ciptakan Indonesia dimana rumah impian bukan mimpi menakutkan" },
            ].map((cta, i) => (
              <motion.div 
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <Icon path={cta.icon} size={1.5} className="text-primary mx-auto mb-3" />
                </motion.div>
                <h4 className="font-display font-bold text-secondary-foreground mb-2">{cta.title}</h4>
                <p className="text-secondary-foreground/70 text-sm">{cta.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Statement */}
          <motion.div 
            variants={scaleIn} 
            className="gradient-primary rounded-3xl p-8 text-center mb-8 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.h3 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-3 relative z-10"
            >
              SCOP
            </motion.h3>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2 relative z-10">
              Mari Bangun Indonesia yang Lebih
            </p>
            <p className="text-xl md:text-2xl text-primary-foreground font-bold relative z-10">
              Terjangkau, Transparan, dan Terpercaya
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div variants={fadeInUp} className="text-center text-secondary-foreground/60 text-sm">
            <p className="mb-3 font-medium text-primary">
              "One Platform, Infinite Dreams | Satu Platform, Jutaan Impian Terwujud"
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-3">
              {[
               
              ].map((contact, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.1, color: "#FFB300" }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Icon path={contact.icon} size={0.8} />
                  <span>{contact.text}</span>
                </motion.div>
              ))}
            </div>
          <p> <a href="https://fajar444.github.io/scop-present/">https://fajar444.github.io/scop-present/</a></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SCOPPresentation = () => {
  return (
    <div className="relative">
      {/* <SlideIndicator total={7} />
      <PrintButton /> */}
      <CoverSlide />
      <ProblemSlide />
      <OpportunitySlide />
      <SolutionSlide />
      <PlatformSlide />
      <BlueprintSlide />
      <ImpactSlide />
    </div>
  );
};

export default SCOPPresentation;
