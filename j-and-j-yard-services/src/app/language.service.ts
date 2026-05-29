import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  lang = signal<'en' | 'es'>('en');

  private translations: any = {
    en: {
      nav: {
        home: 'Home',
        about: 'Our Team',
        services: 'Services',
        contact: 'Contact'
      },
      home: {
        heroTitle: 'Professional Landscaping & Custom Concrete',
        heroSubtitle: 'Expertly crafted outdoor spaces from routine maintenance to architectural concrete work. Locally owned and operated since 2017.',
        cta: 'Get a Free Estimate',
        servicesTitle: 'Our Professional Services',
        services: {
          mowing: { title: 'Lawn Mowing', desc: 'Precision cutting and edging for a pristine look.' },
          cleanup: { title: 'Spring/Fall Cleanup', desc: 'Complete debris removal and seasonal prep.' },
          landscaping: { title: 'Landscaping', desc: 'Transforming your yard with plants, mulch, and design.' },
          concrete: { title: 'Concrete Work', desc: 'Professional installation of patios, walkways, and driveways.' },
          maintenance: { title: 'Garden Maintenance', desc: 'Weeding, pruning, and health care for your plants.' }
        }
      },
      about: {
        headerTitle: 'About J&J Yard Services',
        headerSubtitle: 'Local, family-owned, and dedicated to excellence in landscaping and concrete.',
        sectionTitle: 'Our Story',
        desc1: 'Established in 2017, J&J Yard Services is a locally owned landscaping and concrete firm dedicated to the highest standards of outdoor craftsmanship.',
        desc2: 'Our approach combines professional technique with an unwavering commitment to quality, ensuring that every project—from routine maintenance to custom concrete installation—is executed with precision and care.',
        values: {
          v1: { title: 'Quality', desc: 'We never cut corners.' },
          v2: { title: 'Communication', desc: 'Always kept in the loop.' },
          v3: { title: 'Reliability', desc: 'We show up when we say we will.' }
        },
        team: {
          title: 'Meet Our Team',
          jose: {
            name: 'Jose',
            role: 'Founder & Lead Specialist',
            desc: 'Jose started J&J Yard Services in 2017 with a passion for landscaping.'
          }
        }
      },
      contact: {
        title: 'Contact Us',
        email: 'Email',
        emailAddress: 'jandjyardservices64&#64;gmail.com',
        phone: '+1 801-574-7943',
        emailLabel: 'Email Address',
        success: 'Message sent successfully!',
        error: 'Failed to send message'
      }
    },
    es: {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        services: 'Servicios',
        contact: 'Contacto'
      },
      home: {
        heroTitle: 'Mantenimiento de Patios, Paisajismo y Concreto Experto',
        heroSubtitle: 'Servicios profesionales al aire libre, desde el cuidado del césped hasta trabajos de concreto personalizados. Propiedad y operación familiar desde 2017.',
        cta: 'Obtenga un Presupuesto Gratis',
        servicesTitle: 'Nuestros Servicios Profesionales',
        services: {
          mowing: { title: 'Corte de Césped', desc: 'Corte y ribeteado de precisión para una apariencia impecable.' },
          cleanup: { title: 'Limpieza de Primavera/Otoño', desc: 'Eliminación completa de escombros y preparación estacional.' },
          landscaping: { title: 'Paisajismo', desc: 'Transformando su patio con plantas, abono y diseño.' },
          concrete: { title: 'Trabajos de Concreto', desc: 'Instalación profesional de patios, caminos y entradas.' },
          maintenance: { title: 'Mantenimiento de Jardines', desc: 'Deshierbe, poda y cuidado de la salud de sus plantas.' }
        }
      },
      about: {
        team: {
          jose: {
            name: 'José',
            role: 'Fundador y Especialista Principal',
            desc: 'José comenzó J&J Yard Services en 2017 con una pasión por el paisajismo y el trabajo en concreto.'
          }
        }
      },
      contact: {
        email: 'Correo Electrónico',
        emailAddress: 'jandjyardservices64&#64;gmail.com',
        phone: '+1 801-574-7943',
        emailLabel: 'Correo Electrónico'
      }
    }
  };

  t(key: string): string {
    const keys = key.split('.');
    let result = this.translations[this.lang()];
    for (const k of keys) {
      if (result) result = result[k];
    }
    return result || key;
  }

  toggle() {
    this.lang.set(this.lang() === 'en' ? 'es' : 'en');
  }
}
