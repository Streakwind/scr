'use client';

import Link from "next/link";
import { ArrowRight, Zap, Shield, Rocket, Star, Github, Users, Globe, Heart, CheckCircle, Code, Palette } from "lucide-react";
import { useGoogleAnalytics } from "@/lib/google-analytics";

export default function Home() {
  const googleAnalyticsComponent = useGoogleAnalytics();
  
  return (
    <>
      {googleAnalyticsComponent}
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-green-400/20 to-blue-600/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-pink-400/10 to-orange-600/10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 group hover:bg-muted/70 transition-colors cursor-pointer">
              <Star className="w-4 h-4 text-yellow-500 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium">New features available</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Build Amazing
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Create stunning docs with ease and empower your team.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/docs"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              
              <Link
                href="https://github.com/Streakwind/scr"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-border hover:border-foreground bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-300"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View on GitHub
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">100+</div>
                <div className="text-muted-foreground">Happy Users</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-green-600 transition-colors">50k+</div>
                <div className="text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-purple-600 transition-colors">99%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover the features that make us special and join our growing community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-background border border-border hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-background border border-border hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure & Reliable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bank-level security with 99.9% uptime guarantee. Your data is always safe with us.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-background border border-border hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Intuitive interface designed for both beginners and experts. Get started in minutes, not hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Benefits Section */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                Everything You Need to
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Succeed</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our comprehensive platform provides all the tools and features you need to build, deploy, and scale your documentation.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Advanced analytics and insights" },
                  { icon: Users, text: "Team collaboration tools" },
                  { icon: Globe, text: "Global CDN and fast delivery" },
                  { icon: Code, text: "Developer-friendly APIs" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-foreground transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-background/50 backdrop-blur-sm border border-border rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Palette, title: "Design", desc: "Beautiful UI" },
                    { icon: Zap, title: "Performance", desc: "Lightning Fast" },
                    { icon: Shield, title: "Security", desc: "Bank Level" },
                    { icon: Heart, title: "Support", desc: "24/7 Help" },
                  ].map((item, index) => (
                    <div key={index} className="text-center group hover:scale-105 transition-transform cursor-pointer">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by the latest and greatest technologies. Integrates seamlessly with your existing workflow and favorite tools.
            </p>
          </div>

          {/* Tech logos grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            {[
              { name: 'Next.js', color: 'from-black to-gray-800' },
              { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
              { name: 'Tailwind', color: 'from-cyan-500 to-blue-600' },
              { name: 'React', color: 'from-blue-400 to-cyan-400' },
              { name: 'MDX', color: 'from-orange-500 to-red-500' },
              { name: 'Vercel', color: 'from-black to-gray-900' },
            ].map((tech, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                  <span className="text-white font-bold text-lg">
                    {tech.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Integration cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'API First',
                description: 'RESTful APIs for seamless integration',
                icon: Code,
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                title: 'Webhooks',
                description: 'Real-time event notifications',
                icon: Zap,
                gradient: 'from-yellow-500 to-orange-600'
              },
              {
                title: 'CLI Tools',
                description: 'Command line interface for developers',
                icon: Users,
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                title: 'SDKs',
                description: 'Multiple language support',
                icon: Globe,
                gradient: 'from-purple-500 to-pink-600'
              }
            ].map((integration, index) => (
              <div key={index} className="group p-6 rounded-xl bg-background border border-border hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${integration.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{integration.title}</h3>
                <p className="text-muted-foreground text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join thousands of satisfied users today and transform your workflow forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-semibold rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-2xl shadow-violet-600/25 hover:shadow-violet-600/40 hover:scale-105 transition-all duration-300"
              >
                Start Building Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-semibold rounded-2xl border-2 border-border hover:border-foreground bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-300"
              >
                View Documentation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Your Company. All rights reserved. Built with ❤️ and Fumadocs.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
