import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutPageComponentsAboutSection extends Schema.Component {
  collectionName: 'components_about_page_components_about_sections';
  info: {
    displayName: 'AboutSection';
    icon: 'layer';
  };
  attributes: {
    SectionContent: Attribute.Component<'section-heading.section-heading'>;
    CtaSection: Attribute.Component<'menu.menu-button'>;
    Image: Attribute.Media & Attribute.Required;
  };
}

export interface AboutPageComponentsReview extends Schema.Component {
  collectionName: 'components_about_page_components_reviews';
  info: {
    displayName: 'review';
    icon: 'heart';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
    cards: Attribute.Component<'page-components.testimonial-card', true>;
  };
}

export interface AboutPageComponentsTechSection extends Schema.Component {
  collectionName: 'components_about_page_components_tech_sections';
  info: {
    displayName: 'TechSection';
    icon: 'bulletList';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
    cards: Attribute.Component<'page-components.tech-card', true>;
  };
}

export interface HomePageComponentsHomeAboutSection extends Schema.Component {
  collectionName: 'components_page_components_home_about_sections';
  info: {
    displayName: 'HomeAboutSection';
    icon: 'user';
    description: '';
  };
  attributes: {
    SectionHeading: Attribute.Component<'section-heading.section-heading'>;
    aboutHeading: Attribute.Component<'section-heading.section-heading'>;
    FeatureLine: Attribute.Component<'page-components.feature-line', true>;
    CtaSection: Attribute.Component<'menu.menu-button'>;
    image: Attribute.Media;
  };
}

export interface HomePageComponentsHomeChooseUsSection
  extends Schema.Component {
  collectionName: 'components_page_components_home_choose_us_sections';
  info: {
    displayName: 'HomeChooseUsSection';
    icon: 'layout';
    description: '';
  };
  attributes: {
    chooseus: Attribute.Component<'section-heading.section-heading'>;
    ctaSection: Attribute.Component<'menu.menu-button', true>;
    cards: Attribute.Component<'page-components.choose-us-card', true>;
  };
}

export interface HomePageComponentsHomeHeader extends Schema.Component {
  collectionName: 'components_home_page_components_home_headers';
  info: {
    displayName: 'HomeHeader';
    icon: 'alien';
    description: '';
  };
  attributes: {
    SectionHeading: Attribute.Component<'section-heading.section-heading'>;
    featuredText: Attribute.String;
    lead: Attribute.Text;
    CtaSection: Attribute.Component<'menu.menu-button', true>;
    mobileImage: Attribute.Media;
  };
}

export interface HomePageComponentsHomeVmvSection extends Schema.Component {
  collectionName: 'components_page_components_home_vmv_sections';
  info: {
    displayName: 'HomeVMVSection';
    icon: 'check';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
    cards: Attribute.Component<'vision-mission-values.vmv-card', true>;
  };
}

export interface MenuMenuButton extends Schema.Component {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
    icon: 'cursor';
  };
  attributes: {
    buttonText: Attribute.String & Attribute.Required;
    url: Attribute.String;
    buttonType: Attribute.Enumeration<
      ['primary', 'secondary', 'outline-primary']
    >;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface PageComponentsAccordionCard extends Schema.Component {
  collectionName: 'components_page_components_accordion_cards';
  info: {
    displayName: 'AccordionCard';
    icon: 'bulletList';
  };
  attributes: {
    featuredText: Attribute.String;
    content: Attribute.Text;
  };
}

export interface PageComponentsAccordionSection extends Schema.Component {
  collectionName: 'components_page_components_accordion_sections';
  info: {
    displayName: 'AccordionSection';
    icon: 'server';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
    accordion: Attribute.Component<'page-components.accordion-card', true>;
  };
}

export interface PageComponentsChooseUsCard extends Schema.Component {
  collectionName: 'components_page_components_choose_us_cards';
  info: {
    displayName: 'ChooseUsCard';
    icon: 'cast';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    content: Attribute.Text;
    color: Attribute.Enumeration<['primary', 'dark']>;
  };
}

export interface PageComponentsContactLeadSection extends Schema.Component {
  collectionName: 'components_page_components_contact_lead_sections';
  info: {
    displayName: 'ContactLeadSection';
    icon: 'phone';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    lead: Attribute.Text;
    cards: Attribute.Component<'page-components.info-card', true>;
  };
}

export interface PageComponentsContactSection extends Schema.Component {
  collectionName: 'components_page_components_contact_sections';
  info: {
    displayName: 'ContactSection';
    icon: 'envelop';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
    cta: Attribute.Component<'menu.menu-button'>;
    features: Attribute.Component<'page-components.feature-line', true>;
  };
}

export interface PageComponentsFeatureLine extends Schema.Component {
  collectionName: 'components_page_components_feature_lines';
  info: {
    displayName: 'FeatureLine';
    icon: 'check';
  };
  attributes: {
    icon: Attribute.Media;
    text: Attribute.String & Attribute.Required;
  };
}

export interface PageComponentsHomePackagesSection extends Schema.Component {
  collectionName: 'components_page_components_home_packages_sections';
  info: {
    displayName: 'HomePackagesSection';
    icon: 'cube';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
  };
}

export interface PageComponentsInfoCard extends Schema.Component {
  collectionName: 'components_page_components_info_cards';
  info: {
    displayName: 'InfoCard';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text & Attribute.Required;
    type: Attribute.Enumeration<['phone', 'email', 'address']>;
  };
}

export interface PageComponentsNfTechnologyCard extends Schema.Component {
  collectionName: 'components_page_components_nf_technology_cards';
  info: {
    displayName: 'NFTechnologyCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface PageComponentsNfTechnologySection extends Schema.Component {
  collectionName: 'components_page_components_nf_technology_sections';
  info: {
    displayName: 'NFTechnologySection';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
    cards: Attribute.Component<'page-components.nf-technology-card', true>;
  };
}

export interface PageComponentsOffersSection extends Schema.Component {
  collectionName: 'components_page_components_offers_sections';
  info: {
    displayName: 'OffersSection';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'section-heading.section-heading'>;
  };
}

export interface PageComponentsPackageCard extends Schema.Component {
  collectionName: 'components_page_components_package_cards';
  info: {
    displayName: 'PackageCard';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    features: Attribute.Component<'page-components.feature-line', true>;
    cta: Attribute.Component<'menu.menu-button'>;
    featured: Attribute.Boolean;
    price: Attribute.Float & Attribute.Required;
  };
}

export interface PageComponentsTechCard extends Schema.Component {
  collectionName: 'components_page_components_tech_cards';
  info: {
    displayName: 'TechCard';
    icon: 'dashboard';
  };
  attributes: {
    subtitle: Attribute.String;
    icon: Attribute.Media;
    title: Attribute.String;
    content: Attribute.RichText;
    features: Attribute.Component<'page-components.feature-line', true>;
    image: Attribute.Media;
  };
}

export interface PageComponentsTestimonialCard extends Schema.Component {
  collectionName: 'components_page_components_testimonial_cards';
  info: {
    displayName: 'TestimonialCard';
    icon: 'star';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    text: Attribute.Text;
    position: Attribute.String;
  };
}

export interface SectionHeadingSectionHeading extends Schema.Component {
  collectionName: 'components_section_heading_section_headings';
  info: {
    displayName: 'Section Heading';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text;
    subtitle: Attribute.String;
    type: Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'quaternary']
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface VisionMissionValuesVmvCard extends Schema.Component {
  collectionName: 'components_vision_mission_values_vmv_cards';
  info: {
    displayName: 'VMV Card';
    icon: 'television';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-page-components.about-section': AboutPageComponentsAboutSection;
      'about-page-components.review': AboutPageComponentsReview;
      'about-page-components.tech-section': AboutPageComponentsTechSection;
      'home-page-components.home-about-section': HomePageComponentsHomeAboutSection;
      'home-page-components.home-choose-us-section': HomePageComponentsHomeChooseUsSection;
      'home-page-components.home-header': HomePageComponentsHomeHeader;
      'home-page-components.home-vmv-section': HomePageComponentsHomeVmvSection;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
      'page-components.accordion-card': PageComponentsAccordionCard;
      'page-components.accordion-section': PageComponentsAccordionSection;
      'page-components.choose-us-card': PageComponentsChooseUsCard;
      'page-components.contact-lead-section': PageComponentsContactLeadSection;
      'page-components.contact-section': PageComponentsContactSection;
      'page-components.feature-line': PageComponentsFeatureLine;
      'page-components.home-packages-section': PageComponentsHomePackagesSection;
      'page-components.info-card': PageComponentsInfoCard;
      'page-components.nf-technology-card': PageComponentsNfTechnologyCard;
      'page-components.nf-technology-section': PageComponentsNfTechnologySection;
      'page-components.offers-section': PageComponentsOffersSection;
      'page-components.package-card': PageComponentsPackageCard;
      'page-components.tech-card': PageComponentsTechCard;
      'page-components.testimonial-card': PageComponentsTestimonialCard;
      'section-heading.section-heading': SectionHeadingSectionHeading;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'vision-mission-values.vmv-card': VisionMissionValuesVmvCard;
    }
  }
}
