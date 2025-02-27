import TubePulse from "@/components/TubePulse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Twitter, Facebook, Instagram, Youtube, Brain, ChartBar, ImageIcon, Lightbulb, Search, Subtitles, UserPlus, Users } from "lucide-react";
const features = [
  {
    title: "AI Analysis",
    description: "TubeAI uses AI to analyze your YouTube channel and provide content suggestions.",
    icon: Brain,
    iconBg: "bg-blue-100",
    iconBgColor: "bg-blue-600",
  },
  {
    title: "Keyword Optimization",
    description: "TubeAI helps you find the best keywords to improve your video rankings.",
    icon: Search,
    iconBg: "bg-green-100",
    iconBgColor: "bg-green-600",
  },
  {
    title: "Thumbnail Generator",
    description: "Generate eye-catching thumbnails with AI-powered design suggestions.",
    icon: ImageIcon,
    iconBg: "bg-yellow-100",
    iconBgColor: "bg-yellow-600",
  },
  {
    title: "Competitor Analysis",
    description: "Analyze top-performing channels and get insights to outperform competitors.",
    icon: ChartBar,
    iconBg: "bg-red-100",
    iconBgColor: "bg-red-600",
  },
  {
    title: "Engagement Insights",
    description: "Understand audience behavior and improve engagement with AI-driven analytics.",
    icon: Users,
    iconBg: "bg-purple-100",
    iconBgColor: "bg-purple-600",
  },
  {
    title: "Auto Captioning",
    description: "Generate accurate subtitles and captions for better accessibility and reach.",
    icon: Subtitles,
    iconBg: "bg-orange-100",
    iconBgColor: "bg-orange-600",
  },
];

const steps = [
  {
    title: "Step 1: Sign Up & Connect",
    description: "Create an account and link your YouTube channel to let the AI analyze your content.",
    icon: UserPlus,
  },
  {
    title: "Step 2: AI Analysis",
    description: "Our AI scans your channel, evaluates performance, and identifies areas for improvement.",
    icon: Brain,
  },
  {
    title: "Step 3: Personalized Recommendations",
    description: "Receive AI-driven content ideas, optimization tips, and growth strategies tailored for you.",
    icon: Lightbulb,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
    
    {/*hero section*/}
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 text-center mb-12">
            <TubePulse size="large" color="blue"/>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Your Personal{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              AI Content Agent
            </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tubeai is a powerful AI tool that helps you generate content ideas,
            write scripts, and create videos for your YouTube channel.
            </p>

            {/*youtube video form*/}
              <YoutubeVideoForm/>
        </div>
      </div>
    </section>

    {/*features section*/}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features for Your YouTube Channel content creation
        </h2>
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200
              hover:border-blue-500 transition-all duration-300 ">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-white mb-4 ${feature.iconBgColor}`}
              >
                <Icon size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </div>
            </div>
        );
        })}
      </div>
      </div>
    </section>

    {/*how it works section*/}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl ">
            <h2 className="text-3xl font-bold text-center mb-12">
            Meet Your AI Agent in 3 Simple Steps
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 text-center rounded-xl border border-gray-200
                    shadow-md hover:shadow-lg transition-all  ">
                    <div
                      className="w-16 h-16 flex items-center justify-center 
                      rounded-full text-white mb-4 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 "
                    >
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600">{step.description}</p>
                    </div>
                  </div>
              );
              })}

            </div>
          </div>
        </section>

    {/*footer section*/}

    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div>
            <h2 className="text-3xl font-bold">TubeAI</h2>
            <p className="text-gray-400 mt-3">
              AI-powered insights to help you grow your YouTube channel with data-driven strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest AI tips and YouTube growth strategies.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-500 transition">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Links with Lucide Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Youtube size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TubeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
      
    </div>
  );
}
