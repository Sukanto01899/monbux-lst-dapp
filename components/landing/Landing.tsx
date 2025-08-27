import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Menu,
  Shield,
  Star,
  TrendingUp,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";

const MonbuxLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Stats animation
  const [stats, setStats] = useState({
    totalStaked: 0,
    totalMinted: 0,
    uniqueStakers: 0,
    transactions: 0,
  });

  const finalStats = {
    totalStaked: 125847,
    totalMinted: 119320,
    uniqueStakers: 1247,
    transactions: 8394,
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        if (step <= steps) {
          const progress = step / steps;
          setStats({
            totalStaked: Math.floor(finalStats.totalStaked * progress),
            totalMinted: Math.floor(finalStats.totalMinted * progress),
            uniqueStakers: Math.floor(finalStats.uniqueStakers * progress),
            transactions: Math.floor(finalStats.transactions * progress),
          });
          step++;
        } else {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    // Trigger animation when component mounts
    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Easy Staking & Unstaking",
      description: "Stake your MON tokens with just a few clicks. Unstake anytime without complex procedures.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Transparent Rewards",
      description: "Real-time exchange rates and reward tracking. See exactly how much you're earning.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Admin Fee",
      description: "Secure smart contracts with transparent admin fees. Your funds are protected.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Complete Analytics",
      description: "Track total users, transactions, and your personal staking statistics.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Liquid Staking",
      description: "No lock-up periods. Your staked tokens remain liquid through mMON tokens.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Connect Wallet",
      description: "Connect your wallet to the Monad testnet",
    },
    {
      step: "02",
      title: "Stake MON",
      description: "Choose amount and stake your MON tokens",
    },
    {
      step: "03",
      title: "Receive mMON",
      description: "Get liquid mMON tokens representing your stake",
    },
    {
      step: "04",
      title: "Unstake & Earn",
      description: "Unstake anytime to receive MON + rewards",
    },
  ];

  const faqs = [
    {
      question: "Is Monbux secure?",
      answer:
        "Yes, Monbux uses audited smart contracts and follows best security practices. All transactions are transparent on the Monad blockchain.",
    },
    {
      question: "What are the fees?",
      answer:
        "There's a small admin fee for maintenance and development. All fees are transparent and displayed before transactions.",
    },
    {
      question: "How do I participate in Monad testnet?",
      answer: "Connect a testnet-compatible wallet, get testnet MON tokens, and start staking through our platform.",
    },
    {
      question: "Can I unstake immediately?",
      answer:
        "Yes! That's the power of liquid staking. You can unstake your mMON tokens anytime to receive your original MON plus rewards.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Monbux
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "Features", "How it Works", "Dashboard", "FAQ", "Contact"].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Stake MON Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {["Home", "Features", "How it Works", "Dashboard", "FAQ", "Contact"].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold">
                  Stake MON Now
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Stake{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MON</span>,
                <br />
                Earn{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  mMON
                </span>{" "}
                Rewards
              </h1>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Participate in Monad Testnet liquid staking with ease. Mint mMON, earn rewards, and track your stats.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Hero Illustration */}
            <div className="animate-fade-in-up animation-delay-600">
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Wallet className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-gray-700">MON Tokens</span>
                    </div>

                    <div className="flex items-center">
                      <ArrowRight className="w-8 h-8 text-blue-600 animate-pulse" />
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Star className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-gray-700">mMON Rewards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stats.totalStaked.toLocaleString()}
              </div>
              <div className="text-gray-600">Total MON Staked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stats.totalMinted.toLocaleString()}
              </div>
              <div className="text-gray-600">Total mMON Minted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stats.uniqueStakers.toLocaleString()}
              </div>
              <div className="text-gray-600">Unique Stakers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stats.transactions.toLocaleString()}
              </div>
              <div className="text-gray-600">Total Transactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Monbux</span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of liquid staking with our secure and user-friendly platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with liquid staking in just four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users already earning rewards through liquid staking on Monad testnet
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto">
            Start Staking Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Monbux
              </div>
              <p className="text-gray-400 mb-4">
                The premier liquid staking platform for Monad testnet. Stake, earn, and grow your crypto portfolio with
                ease.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Docs
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Telegram
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Discord
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Monbux. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default MonbuxLanding;
