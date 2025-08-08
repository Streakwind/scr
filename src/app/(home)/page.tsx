'use client';

import Link from "next/link";
import { ArrowRight, Zap, Shield, Rocket, Star, Github, Users, Globe, Heart, CheckCircle, Code, Palette, Linkedin, Instagram, Youtube, ExternalLink, Mail } from "lucide-react";
import { useGoogleAnalytics } from "@/lib/google-analytics";
import { PageFooter } from "@/components/page-footer";

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
              <span className="text-sm font-medium">Check out the latest post!</span>
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

      {/* Team Members Section */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-6">

          {/* Core Team Members */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12">Executives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Alex Johnson',
                  role: 'Lead Developer',
                  bio: 'Full-stack developer with 8+ years of experience. Passionate about clean code and innovative solutions.',
                  avatar: '👨‍💻',
                  github: 'https://github.com/alexjohnson',
                  linkedin: 'https://linkedin.com/in/alexjohnson',
                  instagram: undefined,
                  youtube: undefined,
                  website: undefined,
                  email: 'alex@company.com',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  name: 'Sarah Chen',
                  role: 'UX/UI Designer',
                  bio: 'Creative designer focused on user-centered design. Believes in the power of beautiful and functional interfaces.',
                  avatar: '👩‍🎨',
                  github: 'https://github.com/sarahchen',
                  linkedin: 'https://linkedin.com/in/sarahchen',
                  instagram: 'https://instagram.com/sarahchen_design',
                  youtube: undefined,
                  website: undefined,
                  email: undefined,
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  name: 'Mike Rodriguez',
                  role: 'DevOps Engineer',
                  bio: 'Infrastructure specialist ensuring scalable and reliable deployments. Automation and security enthusiast.',
                  avatar: '👨‍🔧',
                  github: 'https://github.com/mikerodriguez',
                  linkedin: 'https://linkedin.com/in/mikerodriguez',
                  instagram: undefined,
                  youtube: undefined,
                  website: 'https://mikerodriguez.dev',
                  email: undefined,
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  name: 'Emma Wilson',
                  role: 'Product Manager',
                  bio: 'Strategic product leader with a focus on user experience and business growth. Bridges the gap between tech and business.',
                  avatar: '👩‍💼',
                  github: undefined,
                  linkedin: 'https://linkedin.com/in/emmawilson',
                  instagram: undefined,
                  youtube: undefined,
                  website: undefined,
                  email: 'emma@company.com',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((member, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative p-6 rounded-xl bg-background border border-border hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.color}`}></div>
                  
                  {/* Avatar */}
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {member.avatar}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className={`text-xs font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed text-center">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-2 justify-center">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-gray-600 transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-blue-600 transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-pink-600 transition-all duration-300 hover:scale-110"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.youtube && (
                      <a
                        href={member.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-red-600 transition-all duration-300 hover:scale-110"
                      >
                        <Youtube className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-green-600 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-7 h-7 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-purple-600 transition-all duration-300 hover:scale-110"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Volunteers Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Members</h3>
            
            {/* Volunteer Cards Grid */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Emily Davis', role: 'Documentation', avatar: '👩‍💼', color: 'from-orange-500 to-red-500', bio: 'Technical writer with 5+ years creating clear, user-friendly documentation for complex software products.', github: 'https://github.com/emilydavis', linkedin: 'https://linkedin.com/in/emilydavis' },
                { name: 'David Kim', role: 'Frontend Help', avatar: '👨‍💻', color: 'from-violet-500 to-purple-500', bio: 'React specialist who loves contributing to open source projects in his spare time.', github: 'https://github.com/davidkim', instagram: 'https://scr-v3.vercel.app', youtube: 'https://scr-v3.vercel.app', website: 'https://scr-v3.vercel.app', email: 'https://scr-v3.vercel.app' },
              ].map((volunteer, index) => (
                <div 
                  key={index} 
                  className="group relative hover:z-10 transition-all duration-300 hover:scale-105"
                >
                  {/* Main Card */}
                  <div className="relative text-center p-4 rounded-xl bg-background border border-border hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 h-40 flex flex-col justify-between group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-muted/30">
                    {/* Avatar */}
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${volunteer.color} flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {volunteer.avatar}
                    </div>
                    
                    {/* Name */}
                    <h4 className="font-semibold text-sm mb-1 truncate transition-colors">{volunteer.name}</h4>
                    
                    {/* Role */}
                    <p className={`text-sm bg-gradient-to-r ${volunteer.color} bg-clip-text text-transparent font-medium mb-3`}>
                      {volunteer.role}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-2 justify-center flex-wrap">
                      {volunteer.github && (
                        <a
                          href={volunteer.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-6 h-6 rounded-md bg-muted hover:bg-muted/80 border border-border hover:border-gray-600 transition-all duration-300 hover:scale-110 z-20 relative"
                        >
                          <Github className="w-3 h-3" />
                        </a>
                      )}
                      {volunteer.linkedin && (
                        <a
                          href={volunteer.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-6 h-6 rounded-md bg-muted hover:bg-muted/80 border border-border hover:border-blue-600 transition-all duration-300 hover:scale-110 z-20 relative"
                        >
                          <Linkedin className="w-3 h-3" />
                        </a>
                      )}
                      {volunteer.instagram && (
                        <a
                          href={volunteer.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-6 h-6 rounded-md bg-muted hover:bg-muted/80 border border-border hover:border-pink-600 transition-all duration-300 hover:scale-110 z-20 relative"
                        >
                          <Instagram className="w-3 h-3" />
                        </a>
                      )}
                      {volunteer.youtube && (
                        <a
                          href={volunteer.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-6 h-6 rounded-md bg-muted hover:bg-muted/80 border border-border hover:border-red-600 transition-all duration-300 hover:scale-110 z-20 relative"
                        >
                          <Youtube className="w-3 h-3" />
                        </a>
                      )}
                      {volunteer.website && (
                        <a
                          href={volunteer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-6 h-6 rounded-md bg-muted hover:bg-muted/80 border border-border hover:border-green-600 transition-all duration-300 hover:scale-110 z-20 relative"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {volunteer.email && (
                        <a
                          href={`mailto:${volunteer.email}`}
                          className="flex items-center justify-center w-6 h-6 rounded-md bg-muted hover:bg-muted/80 border border-border hover:border-purple-600 transition-all duration-300 hover:scale-110 z-20 relative"
                        >
                          <Mail className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Expanded Bio Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className={`absolute top-full left-0 right-0 mt-2 p-4 rounded-xl bg-gradient-to-br ${volunteer.color} text-white shadow-xl border-2 border-white/20 backdrop-blur-sm z-30`}>
                      <p className="text-sm leading-relaxed font-medium">
                        {volunteer.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action for joining team */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Want to join our team? Feel free to contact us!</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6">

          {/* All Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12 text-muted-foreground">Our Sponsors</h3>
            <div className="grid grid-cols-5 gap-6">
              {[
                { name: 'TechCorp', logo: '🚀', tier: 'gold', color: 'from-blue-500 to-purple-500' },
                // { name: 'Analytics+', logo: '📈', color: 'from-teal-500 to-green-500' }
              ].map((sponsor, index) => (
                <div key={index} className="group">
                  <div className="relative p-6 rounded-2xl bg-background border-2 border-border hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Logo */}
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${sponsor.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {sponsor.logo}
                      </div>
                      <h3 className="text-sm font-bold mb-1">{sponsor.name}</h3>
                    </div>

                    {/* Gold Tier Badge */}
                    {sponsor.tier === 'gold' && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-amber-500 text-white">
                          ⭐ Gold
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold">Become a Sponsor</h3>
              <p className="text-muted-foreground max-w-md">
                Support our non-profit to help us stay online!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-blue-500/30 bg-background hover:bg-muted/50 transition-all duration-300 group cursor-pointer">
                  <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Sponsor Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-blue-500/30 bg-background hover:bg-muted/50 transition-all duration-300 group cursor-pointer">
                  <span className="font-medium">Donate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Subscribe to our newsletter to be the first to know about new features and upcoming contests.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-border bg-background/50 backdrop-blur-sm focus:border-blue-500 focus:outline-none text-lg"
                />
                <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-2xl shadow-violet-600/25 hover:shadow-violet-600/40 hover:scale-105 transition-all duration-300">
                  Subscribe
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <PageFooter 
        filePath="/" 
        showSocialFooter={true}
      />
      </div>
    </>
  );
}
