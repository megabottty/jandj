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
        learnMore: 'Learn More',
        servicesTitle: 'Our Professional Services',
        services: {
          mowing: { title: 'Lawn Mowing', desc: 'Precision cutting and edging for a pristine look.' },
          cleanup: { title: 'Spring/Fall Cleanup', desc: 'Complete debris removal and seasonal prep.' },
          landscaping: { title: 'Landscaping', desc: 'Transforming your yard with plants, mulch, and design.' },
          concrete: { title: 'Concrete Work', desc: 'Professional installation of patios, walkways, and driveways.' },
          maintenance: { title: 'Garden Maintenance', desc: 'Weeding, pruning, and health care for your plants.' }
        },
        ctaTitle: 'Ready to transform your yard?',
        ctaSubtitle: 'Contact us today for a free on-site estimate.'
      },
      about: {
        headerTitle: 'About J&J Yard Services',
        headerSubtitle: 'Local, family-owned, and dedicated to excellence in landscaping and concrete.',
        sectionTitle: 'Our Story',
        historySubtitle: 'Our History',
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
        subtitle: 'Let us help you create the yard of your dreams. Get in touch for a free estimate!',
        email: 'Email',
        emailAddress: 'Contact Us',
        phone: '+1 801-574-7943',
        location: 'Serving our local community',
        emailLabel: 'Email Address',
        nameLabel: 'Name',
        phoneLabel: 'Phone',
        subjectLabel: 'Subject',
        messageLabel: 'Message',
        sendButton: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Failed to send message',
        quickLinks: 'Quick Links',
        contactHeading: 'Contact',
        footerDesc: 'Expert yard maintenance and landscaping services since 2017.',
        rights: 'All rights reserved.'
      }
    },
    es: {
      nav: {
        home: 'Inicio',
        about: 'Nuestro Equipo',
        services: 'Servicios',
        contact: 'Contacto'
      },
      home: {
        heroTitle: 'Paisajismo Profesional y Concreto Personalizado',
        heroSubtitle: 'Espacios al aire libre creados por expertos, desde mantenimiento de rutina hasta trabajos de concreto arquitectónico. De propiedad y operación local desde 2017.',
        cta: 'Obtenga un Presupuesto Gratis',
        learnMore: 'Saber Más',
        servicesTitle: 'Nuestros Servicios Profesionales',
        services: {
          mowing: { title: 'Corte de Césped', desc: 'Corte y ribeteado de precisión para una apariencia impecable.' },
          cleanup: { title: 'Limpieza de Primavera/Otoño', desc: 'Eliminación completa de escombros y preparación estacional.' },
          landscaping: { title: 'Paisajismo', desc: 'Transformando su patio con plantas, abono y diseño.' },
          concrete: { title: 'Trabajos de Concreto', desc: 'Instalación profesional de patios, caminos y entradas.' },
          maintenance: { title: 'Mantenimiento de Jardines', desc: 'Deshierbe, poda y cuidado de la salud de sus plantas.' }
        },
        ctaTitle: '¿Listo para transformar su patio?',
        ctaSubtitle: 'Contáctenos hoy para un presupuesto gratuito en el lugar.'
      },
      about: {
        headerTitle: 'Acerca de J&J Yard Services',
        headerSubtitle: 'Local, de propiedad familiar y dedicado a la excelencia en paisajismo y concreto.',
        sectionTitle: 'Nuestra Historia',
        historySubtitle: 'Nuestra Historia',
        desc1: 'Establecido en 2017, J&J Yard Services es una empresa de paisajismo y concreto de propiedad local dedicada a los más altos estándares de artesanía al aire libre.',
        desc2: 'Nuestro enfoque combina técnica profesional con un compromiso inquebrantable con la calidad, asegurando que cada proyecto —desde el mantenimiento de rutina hasta la instalación de concreto personalizado— se ejecute con precisión y cuidado.',
        values: {
          v1: { title: 'Calidad', desc: 'Nunca tomamos atajos.' },
          v2: { title: 'Comunicación', desc: 'Siempre mantenido al tanto.' },
          v3: { title: 'Fiabilidad', desc: 'Nos presentamos cuando decimos que lo haremos.' }
        },
        team: {
          title: 'Conozca a Nuestro Equipo',
          jose: {
            name: 'José',
            role: 'Fundador y Especialista Principal',
            desc: 'José comenzó J&J Yard Services en 2017 con una pasión por el paisajismo y el trabajo en concreto.'
          }
        }
      },
      contact: {
        title: 'Contáctenos',
        subtitle: 'Permítanos ayudarle a crear el patio de sus sueños. ¡Contáctenos para un presupuesto gratuito!',
        email: 'Correo Electrónico',
        emailAddress: 'Contáctenos',
        phone: '+1 801-574-7943',
        location: 'Sirviendo a nuestra comunidad local',
        emailLabel: 'Correo Electrónico',
        nameLabel: 'Nombre',
        phoneLabel: 'Teléfono',
        subjectLabel: 'Asunto',
        messageLabel: 'Mensaje',
        sendButton: 'Enviar Mensaje',
        success: '¡Mensaje enviado con éxito!',
        error: 'Error al enviar el mensaje',
        quickLinks: 'Enlaces Rápidos',
        contactHeading: 'Contacto',
        footerDesc: 'Mantenimiento experto de patios y servicios de paisajismo desde 2017.',
        rights: 'Todos los derechos reservados.'
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
