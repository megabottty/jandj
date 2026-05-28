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
        about: 'About',
        services: 'Services',
        contact: 'Contact'
      },
      home: {
        heroTitle: 'Professional Yard Services',
        heroSubtitle: 'Transforming your outdoor space with care and expertise.',
        cta: 'Get a Free Estimate'
      },
      about: {
        headerTitle: 'About J&J Yard Services',
        headerSubtitle: 'Local, family-owned, and dedicated to excellence.',
        sectionTitle: 'Our Story',
        desc1: 'Started in 2017, J&J Yard Services was born from Jose\'s desire to be independent and run a business that reflects his values.',
        desc2: 'We take pride in every project, treating your yard as if it were our own.',
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
      about: {
        team: {
          jose: {
            name: 'José',
            role: 'Fundador y Especialista Principal',
            desc: 'José comenzó J&J Yard Services en 2017 con una pasión por el paisajismo.'
          }
        }
      },
      contact: {
        email: 'Correo Electrónico',
        emailAddress: 'jandjyardservices64&#64;gmail.com',
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
