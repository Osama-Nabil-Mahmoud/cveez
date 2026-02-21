
"use client"

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Briefcase, 
  Users, 
  Lightbulb, 
  Layout, 
  Globe, 
  ShoppingBag, 
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  LineChart,
  Cpu
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/data/team-data';

export default function Home() {
  const { t, isRtl, language } = useLanguage();

  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-illustration');
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-team');

  const services = [
    { icon: Rocket, title: t('services.ai_cv.name'), desc: t('services.ai_cv.desc') },
    { icon: Briefcase, title: t('services.jobs.name'), desc: t('services.jobs.desc') },
    { icon: Users, title: t('services.talent.name'), desc: t('services.talent.desc') },
    { icon: Lightbulb, title: t('services.advisor.name'), desc: t('services.advisor.desc') },
    { icon: Layout, title: t('services.templates.name'), desc: t('services.templates.desc') },
    { icon: Globe, title: t('services.translator.name'), desc: t('services.translator.desc') },
    { icon: ShoppingBag, title: t('services.store.name'), desc: t('services.store.desc') },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-background to-background/50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Zap className="w-4 h-4" />
              <span>{t('stats.satisfied')}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-full">
                <Link href="https://www.cveeez.net/login?redirect=%2Fservices%2Fai-cv-builder" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta_primary')}
                  <ArrowRight className={cn("w-4 h-4", isRtl ? "mr-2 rotate-180" : "ml-2")} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8 h-12 rounded-full border-primary/20 hover:bg-primary/5">
                <Link href="https://www.cveeez.net/jobs" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta_secondary')}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10" />
            <div className="relative aspect-video w-full">
              {heroImg && (
                <Image 
                  src={heroImg.imageUrl} 
                  alt="CVEEEZ Hero" 
                  fill
                  className="rounded-2xl shadow-2xl border border-border object-cover"
                  priority
                  unoptimized 
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-12 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">{t('services.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.description')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 overflow-hidden">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{svc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{svc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section - Text Before Image */}
      <section id="about" className="py-24 px-6 lg:px-12 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-1 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
                {t('about.title')}
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>{t('about.description_p1')}</p>
                <p>{t('about.description_p2')}</p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{t('about.feature1_title')}</h4>
                  <p className="text-muted-foreground">{t('about.feature1_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{t('about.feature2_title')}</h4>
                  <p className="text-muted-foreground">{t('about.feature2_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <LineChart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{t('about.feature3_title')}</h4>
                  <p className="text-muted-foreground">{t('about.feature3_desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-2 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {aboutImg && (
                <Image 
                  src={aboutImg.imageUrl} 
                  alt="About CVeeez Team" 
                  fill
                  className="object-cover"
                  unoptimized
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">{t('team.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('team.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
                <Avatar className="w-20 h-20 lg:w-24 lg:h-24 border-2 border-primary/20 group-hover:scale-105 transition-transform duration-300">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-bold text-lg">{language === 'ar' ? member.name.ar : member.name.en}</h4>
                  <p className="text-sm text-muted-foreground">{t(member.roleKey)}</p>
                  {member.description && language === 'ar' && (
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{member.description.ar}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
