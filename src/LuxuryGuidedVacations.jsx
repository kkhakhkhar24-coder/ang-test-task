import './LuxuryGuidedVacations.css'
import {
    MapPin, Star, Clock, Users, CheckCircle, ArrowRight,
    Sparkles, Calendar, ShieldCheck, Gem, ChevronRight,
    Crown, Phone, Globe, LayoutList, Award, Heart,
    Navigation, Shield, Sun, Music, Compass, Briefcase, User
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

// Placeholder images for premium look
const hero1 = "https://images.unsplash.com/photo-1590089215305-4309996adcd4?q=80&w=2000&auto=format&fit=crop"
const hero2 = "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2000&auto=format&fit=crop"
const hero3 = "https://images.unsplash.com/photo-1506377247377-2a5b3b0ca3ef?q=80&w=2000&auto=format&fit=crop"
const image = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
const cruiseView = "https://images.unsplash.com/photo-1590089215305-4309996adcd4?q=80&w=1200&auto=format&fit=crop"
const luxuryRefined = "https://images.unsplash.com/photo-1506377247377-2a5b3b0ca3ef?q=80&w=1200&auto=format&fit=crop"
const singaporeSkyline = "https://images.unsplash.com/photo-1531012278480-fa10609a7942?q=80&w=1200&auto=format&fit=crop"

const Navbar = () => (
    <nav className="luxguide-nav">
        <div className="luxguide-nav-logo">Trips & Ships</div>
        <div className="luxguide-nav-links">
            <a href="#">HOME</a>
            <a href="#">GUIDES</a>
            <a href="#">CONTACT</a>
        </div>
    </nav>
)

function LuxuryGuidedVacations() {
    const [currentHero, setCurrentHero] = useState(0)
    const heroImages = [hero1, hero2, hero3]

    useEffect(() => {
        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        // Hero Interval
        const timer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length)
        }, 5000)

        return () => {
            clearInterval(timer);
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const faqs = [
        {
            question: 'Is CIE Tours considered luxury?',
            answer: 'CIE Tours is positioned within the premium escorted touring category with strong operational quality, destination expertise, and immersive experiences.'
        },
        {
            question: 'What destinations does CIE Tours specialize in?',
            answer: 'Ireland and Scotland remain core strengths, along with broader Europe touring.'
        },
        {
            question: 'Why should I use a travel advisor for Ireland?',
            answer: 'A luxury travel advisor helps optimize itinerary design, logistics, hotels, airfare, and overall travel strategy.'
        },
        {
            question: 'What is the best month to visit Ireland?',
            answer: 'May, June, September, and early October are often ideal for weather and scenery.'
        },
        {
            question: 'Is Ireland expensive to visit?',
            answer: 'Ireland can range from moderate to ultra luxury depending on accommodations and touring style.'
        },
        {
            question: 'Are escorted tours good for seniors?',
            answer: 'Yes. Many travelers appreciate the ease and reduced logistical stress.'
        },
        {
            question: 'Is Scotland or Ireland better?',
            answer: 'Both are exceptional but offer different emotional experiences and landscapes.'
        },
        {
            question: 'Can Trips & Ships Luxury Travel customize my trip?',
            answer: 'Yes. We frequently build customized extensions and luxury additions around escorted touring.'
        },
        {
            question: 'Are guided tours worth the money?',
            answer: 'For many travelers, escorted touring provides strong value through organization, included experiences, and local expertise.'
        },
        {
            question: 'How far in advance should I book Ireland travel?',
            answer: 'Luxury and premium travel should ideally be booked 9 to 15 months in advance.'
        },
        {
            question: 'Can solo travelers join escorted tours?',
            answer: 'Absolutely. Many solo travelers enjoy the social and logistical benefits.'
        },
        {
            question: 'Are Ireland roads difficult to drive?',
            answer: 'Many rural roads can feel narrow and stressful for international travelers unfamiliar with left side driving.'
        },
        {
            question: 'What is included with most CIE Tours itineraries?',
            answer: 'Hotels, transportation, guides, sightseeing, and many experiences are included.'
        },
        {
            question: 'Can I combine Ireland with a river cruise or cruise?',
            answer: 'Yes. Many travelers combine escorted touring with cruises or luxury rail experiences.'
        },
        {
            question: 'What makes Trips & Ships Luxury Travel different?',
            answer: 'Global expertise, luxury specialization, concierge level planning, supplier relationships, and strategic travel guidance.'
        },
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Person",
                "name": "Angela Hughes",
                "jobTitle": "CEO"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    const comparisonRows = [
        { guided: 'No driving stress', independent: 'Long driving days' },
        { guided: 'Local guides', independent: 'Self research required' },
        { guided: 'Structured logistics', independent: 'Complex planning' },
        { guided: 'Cultural storytelling', independent: 'Limited local insight' },
        { guided: 'Easier pacing', independent: 'Navigation fatigue' },
        { guided: 'Included experiences', independent: 'Separate booking management' },
        { guided: 'Social interaction', independent: 'More isolated experience' },
    ]

    return (
        <>
            <Helmet>
                <title>Luxury Guided Vacations Through Ireland, Scotland & Europe | Trips & Ships Luxury Travel</title>
                <meta name="description" content="Experience Ireland, Scotland, and Europe through expertly planned luxury guided vacations with CIE Tours. Concierge level planning with Angela Hughes and Trips & Ships Luxury Travel." />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
                <link rel="preload" as="image" href={heroImages[0]} />
            </Helmet>

            <Navbar />

            {/* ── HERO ──────────────────────────────────────────────────────────────────── */}
            <section className="luxguide-hero-section">
                <div className="luxguide-hero-placeholder">
                    <div className="luxguide-placeholder-overlay">
                        <p>Cinematic Hero Visual: Luxury Landscapes of Ireland & Scotland</p>
                    </div>
                </div>
                <div className="luxguide-hero-overlay"></div>

                <div className="luxguide-inner luxguide-hero-inner">
                    <div className="luxguide-hero-text-content">
                        <span className="luxguide-eyebrow-hero">
                            <Globe size={14} strokeWidth={2} />
                            Trips &amp; Ships Luxury Travel
                        </span>

                        <h1 className="luxguide-h1">
                            Luxury Guided Vacations<br />
                            Through Ireland, Scotland &amp; Europe with CIE Tours
                        </h1>
                        <div className="luxguide-hero-bar"></div>
                    </div>
                </div>
            </section>

            {/* ── NARRATIVE LEDGER SECTION (ASYMMETRIC STORYTELLING) ───────────────── */}
            <section className="luxguide-narrative-ledger-section">
                <div className="luxguide-inner">
                    <div className="luxguide-narrative-layout">
                        {/* Visual Side: Staggered Cinematic Panels */}
                        <div className="luxguide-narrative-visuals">
                            <div className="luxguide-narrative-label animate-on-scroll">EST. 1984</div>
                            <div className="luxguide-narrative-panel main animate-on-scroll">
                                <div className="luxguide-placeholder-visual">
                                    <p>Cinematic: The Ancient Spirit of Ireland</p>
                                </div>
                            </div>
                            <div className="luxguide-narrative-panel sub animate-on-scroll">
                                <div className="luxguide-placeholder-visual">
                                    <p>Cinematic: Highland Majesty</p>
                                </div>
                            </div>

                        </div>

                        {/* Content Side: High-End Typography */}
                        <div className="luxguide-narrative-content">
                            <span className="luxguide-badge-navy animate-on-scroll">THE JOURNEY OF A LIFETIME</span>
                            <h2 className="luxguide-h2-narrative animate-on-scroll">
                                Some destinations deserve<br />
                                <span>more than a reservation.</span>
                            </h2>
                            <div className="luxguide-narrative-bar animate-on-scroll"></div>

                            <div className="luxguide-narrative-text-blocks">
                                <p className="luxguide-p-lead animate-on-scroll">
                                    They deserve context, storytelling, thoughtful pacing, and the kind of planning that allows travelers to truly experience a place instead of simply moving through it.
                                </p>

                                <div className="luxguide-destination-row animate-on-scroll">
                                    <div className="luxguide-row-line"></div>
                                    <p className="luxguide-p">Ireland is one of those destinations.</p>
                                </div>
                                <div className="luxguide-destination-row animate-on-scroll">
                                    <div className="luxguide-row-line"></div>
                                    <p className="luxguide-p">Scotland is one of those destinations.</p>
                                </div>

                                <p className="luxguide-p animate-on-scroll">
                                    The rolling countryside, dramatic coastlines, centuries old castles, village pubs, historic cities, and layered cultural history deserve to be experienced with expertise and intention.
                                </p>

                                <p className="luxguide-p animate-on-scroll">
                                    At Trips &amp; Ships Luxury Travel, we help travelers experience Ireland, Scotland, and Europe through expertly planned luxury guided vacations with CIE Tours, one of the most respected escorted touring companies specializing in Ireland and the British Isles.
                                </p>

                                <p className="luxguide-p animate-on-scroll">
                                    Whether you are traveling for heritage, celebration, retirement, family connection, or simply the desire to finally experience the landscapes you have dreamed about for years, our team helps elevate escorted touring into a far more strategic and meaningful luxury travel experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRUST & AUTHORITY SECTION ────────────────────────────────────────────── */}
            <section className="luxguide-trust-authority-main-section">
                <div className="luxguide-inner">
                    <div className="luxguide-trust-authority-layout">
                        <div className="luxguide-trust-content">
                            <span className="luxguide-trust-badge">TRUST & AUTHORITY SECTION</span>
                            <h2 className="luxguide-h2">Why Travelers Work with Trips & Ships Luxury Travel</h2>

                            <div className="luxguide-trust-lead">
                                <p className="luxguide-p">Luxury travel today is not simply about where you stay.</p>
                                <p className="luxguide-p">It is about how intelligently the trip is designed.</p>
                            </div>

                            <p className="luxguide-p">
                                It is about avoiding mistakes, understanding logistics, maximizing your time, and having someone in your corner who understands both the destination and the evolving luxury travel landscape.
                            </p>

                            <p className="luxguide-p">
                                At Trips & Ships Luxury Travel, we specialize in helping travelers navigate the overwhelming amount of information online and turn it into thoughtful, elevated experiences backed by real world expertise.
                            </p>

                            <div className="luxguide-values-wrap">
                                <p className="luxguide-values-title">Our travelers value:</p>
                                <div className="luxguide-values-grid-new">
                                    {[
                                        'Concierge level planning',
                                        'Strategic itinerary guidance',
                                        'Global luxury travel expertise',
                                        'Trusted supplier relationships',
                                        'Advocacy before and during travel',
                                        'Access to premium experiences',
                                        'Long term travel partnership support',
                                        'Luxury cruise, safari, expedition, and Europe expertise'
                                    ].map((label, i) => (
                                        <div key={i} className="luxguide-value-item-new animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                                            <CheckCircle size={16} className="luxguide-value-icon" />
                                            <span>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="luxguide-trust-visuals">
                            <div className="luxguide-video-placeholder">
                                <div className="luxguide-video-overlay">
                                    <div className="luxguide-play-button">
                                        <div className="luxguide-play-icon"></div>
                                    </div>
                                    <span>Experience the Journey</span>
                                </div>
                                <div className="luxguide-video-bg"></div>
                            </div>

                            <div className="luxguide-image-placeholder-stack">
                                <div className="luxguide-img-placeholder main">
                                    <div className="luxguide-placeholder-label">Image Placeholder: Premium Destination</div>
                                </div>
                                <div className="luxguide-img-placeholder sub">
                                    <div className="luxguide-placeholder-label">Image Placeholder: Luxury Detail</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AUTHORITY PROOF STACK ────────────────────────────────────────────────── */}
            <section className="luxguide-authority-stack-proof-section">
                <div className="luxguide-inner">
                    <div className="luxguide-authority-header">
                        <span className="luxguide-authority-badge">AUTHORITY PROOF STACK</span>
                        <h2 className="luxguide-h2">Why This Page Has Authority</h2>
                        <p className="luxguide-authority-sub">Trips & Ships Luxury Travel: A legacy of global expertise and industry leadership.</p>
                    </div>

                    <div className="luxguide-authority-layout">
                        <div className="luxguide-authority-ledger">
                            {[
                                'Over 40 years in the travel industry',
                                '121+ countries traveled',
                                'International luxury travel expertise',
                                'Travel Weekly Magellan Award recognition',
                                'Travel Leaders Network recognition',
                                'Global industry speaking engagements',
                                'Luxury cruise expertise',
                                'River cruise expertise',
                                'Expedition cruise expertise',
                                'Safari expertise',
                                'Hosted departures and escorted journeys',
                                'Advisory board leadership within the travel industry',
                                'Concierge level luxury planning',
                                'Strong relationships across the global luxury travel industry'
                            ].map((item, i) => (
                                <div key={i} className="luxguide-authority-item animate-on-scroll" style={{ animationDelay: `${i * 0.05}s` }}>
                                    <div className="luxguide-authority-num">{(i + 1).toString().padStart(2, '0')}</div>
                                    <div className="luxguide-authority-text">
                                        <Award size={16} className="luxguide-authority-icon" />
                                        <span>{item}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="luxguide-authority-visual">
                            <div className="luxguide-video-placeholder secondary">
                                <div className="luxguide-video-overlay">
                                    <ShieldCheck size={48} strokeWidth={1} style={{ marginBottom: '20px', opacity: 0.6 }} />
                                    <p className="luxguide-h3-white" style={{ textAlign: 'center' }}>Authority Showcase Reel</p>
                                    <span style={{ fontSize: '12px', letterSpacing: '0.2em', opacity: 0.7 }}>VIDEO PLACEHOLDER</span>
                                    <div className="luxguide-play-button-small">
                                        <div className="luxguide-play-icon"></div>
                                    </div>
                                </div>
                                <div className="luxguide-video-bg-gradient"></div>
                            </div>

                            <div className="luxguide-authority-stats-card">
                                <div className="luxguide-stat-item">
                                    <strong className="luxguide-stat-val">40+</strong>
                                    <span className="luxguide-stat-label">Years of Mastery</span>
                                </div>
                                <div className="luxguide-stat-divider"></div>
                                <div className="luxguide-stat-item">
                                    <strong className="luxguide-stat-val">121+</strong>
                                    <span className="luxguide-stat-label">Nations Explored</span>
                                </div>
                            </div>

                            <div className="luxguide-image-placeholder-full">
                                <div className="luxguide-placeholder-label">Expertise Image Placeholder: Global Operations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MEET ANGELA HUGHES (SIGNATURE SPOTLIGHT) ───────────────────────────── */}
            <section className="luxguide-signature-spotlight-section">
                <div className="luxguide-inner">
                    <div className="luxguide-signature-layout">
                        <div className="luxguide-signature-visual">
                            <div className="luxguide-signature-frame">
                                <div className="luxguide-portrait-placeholder">
                                    <div className="luxguide-placeholder-inner">
                                        <Users size={48} strokeWidth={1} />
                                        <span>Angela Hughes Portrait Placeholder</span>
                                    </div>
                                </div>
                                <div className="luxguide-frame-decoration top"></div>
                                <div className="luxguide-frame-decoration bottom"></div>
                            </div>
                            <div className="luxguide-signature-experience">
                                <div className="luxguide-exp-circle">
                                    <strong>40</strong>
                                    <span>YEARS</span>
                                </div>
                                <p>Defining Luxury Travel Excellence Since 1984</p>
                            </div>
                        </div>

                        <div className="luxguide-signature-content">
                            <span className="luxguide-signature-badge">MEET ANGELA HUGHES</span>
                            <h2 className="luxguide-h2">Meet Angela Hughes</h2>

                            <div className="luxguide-signature-quote">
                                <p>"Angela Hughes is one of the most recognized voices in luxury travel today."</p>
                            </div>

                            <div className="luxguide-signature-bio">
                                <p className="luxguide-p">
                                    As CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University, Angela has spent decades helping travelers and advisors navigate the evolving luxury travel market through education, strategy, and real world destination expertise.
                                </p>
                                <p className="luxguide-p">
                                    She has traveled extensively throughout Europe and has worked across nearly every segment of the luxury travel industry including luxury cruises, river cruises, safaris, expeditions, escorted touring, and custom international itineraries.
                                </p>
                            </div>

                            <div className="luxguide-signature-impact">
                                <div className="luxguide-impact-item">
                                    <Sparkles size={18} className="luxguide-impact-icon" />
                                    <p>Featured in major travel publications and advisory boards.</p>
                                </div>
                                <div className="luxguide-impact-item">
                                    <ShieldCheck size={18} className="luxguide-impact-icon" />
                                    <p>Providing strategic planning, trust, and advocacy for every journey.</p>
                                </div>
                            </div>

                            <div className="luxguide-signature-footer">
                                <p>Expertise and visibility that translates into meaningful travel for Ireland, Scotland, and Europe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY IRELAND (ATMOSPHERIC IMMERSION) ───────────────────────────────── */}
            <section className="luxguide-ireland-immersion-section">
                <div className="luxguide-inner">
                    <div className="luxguide-immersion-layout">
                        <div className="luxguide-immersion-visual">
                            <div className="luxguide-visual-stack">
                                <div className="luxguide-main-visual-placeholder">
                                    <div className="luxguide-placeholder-overlay">
                                        <p>Cinematic Landscape Placeholder: The Cliffs of Moher at Dusk</p>
                                    </div>
                                </div>
                                <div className="luxguide-detail-visual-placeholder">
                                    <div className="luxguide-placeholder-overlay">
                                        <p>Detail Placeholder: Irish Village Pub Atmosphere</p>
                                    </div>
                                </div>
                            </div>
                            <div className="luxguide-immersion-badge">
                                <div className="luxguide-badge-inner">
                                    <Globe size={18} />
                                    <span>Deep Context</span>
                                </div>
                            </div>
                        </div>

                        <div className="luxguide-immersion-content">
                            <span className="luxguide-immersion-tag">THE EMERALD ISLE</span>
                            <h2 className="luxguide-h2-white">Why Ireland Continues to Captivate Luxury Travelers</h2>

                            <div className="luxguide-immersion-story">
                                <p className="luxguide-lead-text">There is something deeply emotional about Ireland.</p>
                                <p className="luxguide-p-white">
                                    For some travelers, it is heritage. For others, it is the music, storytelling, landscapes, literature, or the warmth of the people. For many travelers, Ireland feels strangely familiar even on a first visit.
                                </p>
                            </div>

                            <div className="luxguide-emotional-insight">
                                <p className="luxguide-p-white">
                                    After decades of helping clients plan trips throughout Europe, one of the biggest mistakes travelers make with Ireland is underestimating how emotionally impactful the destination can become once they arrive.
                                </p>
                                <p className="luxguide-p-white">
                                    Many initially focus on famous sites like the Cliffs of Moher or the Ring of Kerry, but often return talking about smaller moments they never expected to matter so much:
                                </p>
                            </div>

                            <div className="luxguide-moments-ledger">
                                {[
                                    'A quiet morning in the countryside.',
                                    'A conversation inside a village pub.',
                                    'Traditional music late at night.',
                                    'A local guide telling stories that suddenly make Irish history feel personal instead of academic.'
                                ].map((moment, i) => (
                                    <div key={i} className="luxguide-moment-item animate-on-scroll" style={{ animationDelay: `${i * 0.15}s` }}>
                                        <div className="luxguide-moment-dot"></div>
                                        <span>{moment}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="luxguide-immersion-footer">
                                <div className="luxguide-footer-callout">
                                    <MapPin size={20} className="luxguide-footer-icon" />
                                    <div>
                                        <p className="luxguide-footer-main">That is one of the reasons escorted touring continues to perform so well in Ireland.</p>
                                        <p className="luxguide-footer-sub">The experience is not simply about transportation or sightseeing. <strong>It is about context.</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CIE TOURS (SPECIALIZATION BLUEPRINT) ───────────────────────────── */}
            <section className="luxguide-cie-specialization-section">
                <div className="luxguide-inner">
                    <div className="luxguide-cie-header">
                        <span className="luxguide-badge-navy">FEATURED PARTNER</span>
                        <h2 className="luxguide-h2">Why CIE Tours Continues to Stand Out</h2>
                        <div className="luxguide-cie-intro-text">
                            <p className="luxguide-p">CIE Tours has spent decades building expertise throughout Ireland, Scotland, and Europe.</p>
                            <p className="luxguide-p">While many travel companies attempt to cover the entire world, CIE Tours built much of its reputation through deep destination specialization, particularly throughout Ireland and the British Isles.</p>
                        </div>
                    </div>

                    <div className="luxguide-cie-pillars-grid">
                        {[
                            'Simplicity',
                            'Comfort',
                            'Cultural immersion',
                            'Strong storytelling',
                            'Local guides',
                            'Well planned pacing',
                            'Seamless logistics',
                            'Emotional connection to the destination'
                        ].map((label, i) => (
                            <div key={i} className="luxguide-cie-pillar animate-on-scroll" style={{ animationDelay: `${i * 0.05}s` }}>
                                <div className="luxguide-pillar-icon-wrap">
                                    <CheckCircle size={18} />
                                </div>
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="luxguide-cie-comparison-box">
                        <div className="luxguide-comparison-content">
                            <h3 className="luxguide-h3">The Freedom to Stay Present</h3>
                            <p className="luxguide-p">
                                One of the reasons many affluent travelers continue choosing escorted touring in Ireland is because they want to experience the scenery instead of spending the entire trip focused on navigating narrow countryside roads, parking challenges, and driving fatigue.
                            </p>
                            <p className="luxguide-p">
                                This becomes even more important in regions where weather conditions, rural road systems, and long driving days can quickly become exhausting.
                            </p>
                            <div className="luxguide-comparison-highlight">
                                <Navigation size={20} />
                                <span>Escorted touring allows travelers to stay present inside the experience itself.</span>
                            </div>
                        </div>
                        <div className="luxguide-comparison-visual">
                            <div className="luxguide-map-placeholder">
                                <div className="luxguide-placeholder-overlay">
                                    <p>Interactive Map Placeholder: The Grand Tour Route</p>
                                </div>
                                <div className="luxguide-map-dots">
                                    {[...Array(5)].map((_, i) => <div key={i} className={`luxguide-map-dot dot-${i + 1}`}></div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE EVOLUTION OF LUXURY GUIDED TRAVEL (MODERN SHIFT) ─────────────── */}
            <section className="luxguide-evolution-shift-section">
                <div className="luxguide-inner">
                    <div className="luxguide-evolution-header">
                        <span className="luxguide-eyebrow-white">THE NEW LUXURY TRAVELER</span>
                        <h2 className="luxguide-h2-white">The Evolution of Luxury Guided Travel</h2>
                        <p className="luxguide-p-white">
                            Escorted touring has changed dramatically over the past decade. Today’s luxury traveler increasingly prioritizes:
                        </p>
                    </div>

                    <div className="luxguide-evolution-matrix">
                        {[
                            'Ease',
                            'Access',
                            'Expertise',
                            'Time efficiency',
                            'Cultural depth',
                            'Emotional connection',
                            'Authenticity',
                            'Stress reduction'
                        ].map((item, i) => (
                            <div key={i} className="luxguide-evolution-item animate-on-scroll" style={{ animationDelay: `${i * 0.05}s` }}>
                                <div className="luxguide-evolution-dot"></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="luxguide-frictionless-box">
                        <div className="luxguide-frictionless-content">
                            <p className="luxguide-p-white">
                                Many affluent travelers who once avoided guided tours are now rediscovering escorted travel because of how much easier and more immersive it can make complex destinations.
                            </p>
                            <p className="luxguide-p-white">
                                This is especially true in Ireland and Scotland where many travelers prefer not to drive internationally, coordinate multiple hotels, or manage constantly changing logistics.
                            </p>
                        </div>
                        <div className="luxguide-frictionless-callout">
                            <h3 className="luxguide-h3-white">Luxury today is increasingly about removing friction.</h3>
                            <p className="luxguide-p-white">Not adding more complexity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BEST DESTINATIONS ───────────────────────────────────────────────────── */}
            <section className="luxguide-destinations-options-section">
                <div className="luxguide-inner">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span className="luxguide-eyebrow" style={{ color: 'var(--lg-navy)', justifyContent: 'center' }}>
                            <MapPin size={14} />
                            Destinations
                        </span>
                        <h2 className="luxguide-h2" style={{ textAlign: 'center' }}>Best Destinations for CIE Tours</h2>
                        <div className="luxguide-bar luxguide-bar-center"></div>
                    </div>

                    <div className="luxguide-options-grid-premium">
                        <div className="luxguide-option-card-new">
                            <img src={luxuryRefined} alt="Ireland" className="luxguide-option-bg" />
                            <div className="luxguide-option-overlay">
                                <div className="luxguide-option-content-inner">
                                    <div className="luxguide-option-badge-new primary">Most Popular</div>
                                    <p className="luxguide-option-title-new">Ireland</p>
                                    <p className="luxguide-option-desc-new">Popular Ireland experiences include: Dublin, Galway, Killarney, Ring of Kerry, Dingle Peninsula, Cliffs of Moher, Belfast, Giant’s Causeway, Irish castle stays, Whiskey experiences, Heritage travel, and Countryside touring.</p>
                                    <button className="luxguide-option-btn">Explore Ireland <ArrowRight size={14} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="luxguide-option-card-new">
                            <img src={cruiseView} alt="Scotland" className="luxguide-option-bg" />
                            <div className="luxguide-option-overlay">
                                <div className="luxguide-option-content-inner">
                                    <div className="luxguide-option-badge-new">Growing Fast</div>
                                    <p className="luxguide-option-title-new">Scotland</p>
                                    <p className="luxguide-option-desc-new">Scotland continues seeing strong growth among luxury travelers interested in: Highlands journeys, Castles, Whisky regions, Scenic rail experiences, Edinburgh, Isle of Skye, Historic estates, and Countryside immersion.</p>
                                    <button className="luxguide-option-btn">Explore Scotland <ArrowRight size={14} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="luxguide-option-card-new">
                            <img src={singaporeSkyline} alt="England & Wales" className="luxguide-option-bg" />
                            <div className="luxguide-option-overlay">
                                <div className="luxguide-option-content-inner">
                                    <div className="luxguide-option-badge-new">New Trends</div>
                                    <p className="luxguide-option-title-new">England & Wales</p>
                                    <p className="luxguide-option-desc-new">Travelers increasingly combine: London, Bath, Cotswolds, Wales, Literary history, Countryside manors, and Cultural touring.</p>
                                    <button className="luxguide-option-btn">Explore UK <ArrowRight size={14} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="luxguide-option-card-new">
                            <img src={cruiseView} alt="Europe" className="luxguide-option-bg" />
                            <div className="luxguide-option-overlay">
                                <div className="luxguide-option-content-inner">
                                    <div className="luxguide-option-badge-new">Multi-Country</div>
                                    <p className="luxguide-option-title-new">Europe</p>
                                    <p className="luxguide-option-desc-new">CIE Tours also operates journeys throughout: Italy, Spain, Portugal, France, and Multi country Europe itineraries.</p>
                                    <button className="luxguide-option-btn">Explore Europe <ArrowRight size={14} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CONSIDER CIE TOURS (TRAVELER ALIGNMENT) ───────────────── */}
            <section className="luxguide-traveler-alignment-section">
                <div className="luxguide-inner">
                    <div className="luxguide-alignment-layout">
                        {/* Left Column: Values Ledger */}
                        <div className="luxguide-alignment-values">
                            <span className="luxguide-badge-navy">THE STRATEGIC FIT</span>
                            <h2 className="luxguide-h2">Who Should Consider a CIE Tours Vacation</h2>
                            <p className="luxguide-p">CIE Tours works especially well for travelers who value:</p>

                            <div className="luxguide-values-ledger">
                                {[
                                    'Well organized travel',
                                    'Cultural immersion',
                                    'Comfortable pacing',
                                    'Educational experiences',
                                    'Reduced stress',
                                    'Local expertise',
                                    'Strong operational support',
                                    'Guided storytelling',
                                    'Seamless logistics'
                                ].map((value, i) => (
                                    <div key={i} className="luxguide-value-row animate-on-scroll" style={{ animationDelay: `${i * 0.05}s` }}>
                                        <div className="luxguide-value-dot"></div>
                                        <span>{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Persona Mosaic */}
                        <div className="luxguide-alignment-personas">
                            <div className="luxguide-persona-header">
                                <h3 className="luxguide-h3">This style of travel is especially popular among:</h3>
                            </div>

                            <div className="luxguide-persona-grid">
                                {[
                                    { icon: <Heart size={20} />, label: 'Couples' },
                                    { icon: <Briefcase size={20} />, label: 'Retirees' },
                                    { icon: <Users size={20} />, label: 'Multi generational families' },
                                    { icon: <User size={20} />, label: 'Solo travelers' },
                                    { icon: <Globe size={20} />, label: 'Heritage travelers' },
                                    { icon: <Sparkles size={20} />, label: 'First time Europe travelers' },
                                    { icon: <Navigation size={20} />, label: 'Travelers uncomfortable driving internationally' }
                                ].map((persona, i) => (
                                    <div key={i} className="luxguide-persona-card animate-on-scroll" style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
                                        <div className="luxguide-persona-icon-box">
                                            {persona.icon}
                                        </div>
                                        <span>{persona.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="luxguide-alignment-visual-placeholder">
                                <div className="luxguide-placeholder-overlay">
                                    <p>Cinematic Visual Placeholder: Multi-Generational Group Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GUIDED VS INDEPENDENT COMPARISON TABLE ──────────────────────────────── */}
            <section className="luxguide-comparison-side-section">
                <div className="luxguide-inner">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span className="luxguide-eyebrow" style={{ color: 'var(--lg-navy)', justifyContent: 'center' }}>
                            <CheckCircle size={14} />
                            Side by Side
                        </span>
                        <h2 className="luxguide-h2" style={{ textAlign: 'center' }}>CIE Tours vs Independent Travel in Ireland</h2>
                        <div className="luxguide-bar luxguide-bar-center"></div>
                    </div>

                    <div className="luxguide-table-wrap">
                        <table className="luxguide-comparison-table">
                            <thead>
                                <tr>
                                    <th className="luxguide-th luxguide-th-guided">
                                        <CheckCircle size={18} />
                                        Guided Touring
                                    </th>
                                    <th className="luxguide-th luxguide-th-independent">Independent Self Drive</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'luxguide-tr-even' : 'luxguide-tr-odd'}>
                                        <td className="luxguide-td luxguide-td-guided">
                                            <CheckCircle size={16} className="luxguide-td-check" />
                                            {row.guided}
                                        </td>
                                        <td className="luxguide-td luxguide-td-independent">{row.independent}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="luxguide-table-note">
                        <p>For many travelers, the value of escorted touring is not simply convenience. It is mental freedom. Being able to look out the window and experience Ireland instead of focusing on directions often changes the entire emotional tone of the trip.</p>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOKING THROUGH A TRAVEL ADVISOR MATTERS ───────────────────────── */}
            <section className="luxguide-advisor-value-matters-section">
                <div className="luxguide-inner">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span className="luxguide-eyebrow" style={{ color: 'var(--lg-navy)', justifyContent: 'center' }}>
                            <Award size={14} />
                            Advisor Value
                        </span>
                        <h2 className="luxguide-h2" style={{ textAlign: 'center' }}>Why Booking Through a Luxury Travel Advisor Still Matters</h2>
                        <div className="luxguide-bar luxguide-bar-center"></div>
                        <p className="luxguide-p" style={{ maxWidth: '700px', margin: '0 auto 16px', textAlign: 'center' }}>
                            One of the biggest misconceptions in travel today is that escorted touring has become fully transactional. It has not. A strong luxury travel advisor still adds enormous value.
                        </p>
                    </div>

                    <div className="luxguide-advisor-layout">
                        <div className="luxguide-advisor-value-list">
                            <p className="luxguide-h3">A Strong Advisor Adds Value Through:</p>
                            <div className="luxguide-advisor-items">
                                {[
                                    'Supplier relationships',
                                    'Strategic itinerary guidance',
                                    'Destination expertise',
                                    'Hotel recommendations',
                                    'Pre and post tour planning',
                                    'Air coordination',
                                    'Advocacy',
                                    'Escalation support',
                                    'Experience design',
                                    'Long term planning',
                                ].map((item, i) => (
                                    <div key={i} className="luxguide-advisor-item">
                                        <ChevronRight size={16} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="luxguide-advisor-expand">
                            <div className="luxguide-expand-header">
                                <Sparkles size={20} style={{ color: 'var(--lg-navy)' }} />
                                <p className="luxguide-h3">We Frequently Help Travelers Expand Into:</p>
                            </div>
                            <div className="luxguide-expand-grid">
                                {[
                                    { icon: <Star size={18} />, label: 'Luxury Hotels' },
                                    { icon: <Navigation size={18} />, label: 'River Cruises' },
                                    { icon: <Compass size={18} />, label: 'Private Transfers' },
                                    { icon: <Sun size={18} />, label: 'Golf Experiences' },
                                    { icon: <Heart size={18} />, label: 'Culinary Experiences' },
                                    { icon: <Crown size={18} />, label: 'Castle Stays' },
                                    { icon: <Globe size={18} />, label: 'Luxury Rail Journeys' },
                                    { icon: <Gem size={18} />, label: 'Small Ship Cruises' },
                                ].map((item, i) => (
                                    <div key={i} className="luxguide-expand-item">
                                        <div className="luxguide-expand-icon">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMMON MISTAKES ──────────────────────────────────────────────────────── */}
            <section className="luxguide-common-mistakes-planning-section">
                <div className="luxguide-bg-pattern"></div>
                <div className="luxguide-inner luxguide-relative">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span className="luxguide-eyebrow" style={{ justifyContent: 'center' }}>
                            <Shield size={14} />
                            Expert Guidance
                        </span>
                        <h2 className="luxguide-h2-white" style={{ textAlign: 'center' }}>Common Mistakes Travelers Make Planning Ireland</h2>
                        <div className="luxguide-bar-white luxguide-bar-center"></div>
                        <p className="luxguide-p-white" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
                            After years of helping clients travel throughout Ireland, some of the most common mistakes include:
                        </p>
                    </div>

                    <div className="luxguide-mistakes-grid">
                        {[
                            { num: '01', mistake: 'Attempting to cover too much territory too quickly' },
                            { num: '02', mistake: 'Underestimating driving fatigue' },
                            { num: '03', mistake: 'Booking overly aggressive itineraries' },
                            { num: '04', mistake: 'Not allowing enough countryside time' },
                            { num: '05', mistake: 'Over focusing on cities' },
                            { num: '06', mistake: 'Ignoring seasonality' },
                            { num: '07', mistake: 'Waiting too long to book premium experiences' },
                            { num: '08', mistake: 'Assuming all escorted tours are identical' },
                        ].map((item, i) => (
                            <div key={i} className="luxguide-mistake-card">
                                <div className="luxguide-mistake-num">{item.num}</div>
                                <p className="luxguide-mistake-text">{item.mistake}</p>
                            </div>
                        ))}
                    </div>

                    <div className="luxguide-mistakes-closing">
                        <p>Luxury travel is often less about doing more. And more about experiencing the right things well.</p>
                    </div>
                </div>
            </section>

            {/* ── FAQ SECTION ──────────────────────────────────────────────────────────── */}
            <section className="luxguide-faq-authority-section">
                <div className="luxguide-faq-inner-new">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="luxguide-h2">Frequently Asked Questions About CIE Tours &amp; Ireland Vacations</h2>
                        <div className="luxguide-bar luxguide-bar-center"></div>
                    </div>

                    <div className="luxguide-faq-list-new">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="luxguide-faq-item-new"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="luxguide-faq-question-new">
                                    <span>{faq.question}</span>
                                    <span className="luxguide-faq-icon-new">
                                        {activeFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {activeFaq === index && (
                                    <p className="luxguide-faq-answer-new">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default LuxuryGuidedVacations