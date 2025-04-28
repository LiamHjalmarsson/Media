import type { Schema, Struct } from '@strapi/strapi';

export interface ConfigContact extends Struct.ComponentSchema {
  collectionName: 'components_config_contacts';
  info: {
    description: '';
    displayName: 'contact';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ConfigFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_config_footer_links';
  info: {
    description: '';
    displayName: 'footer links';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'elements.link', true>;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ConfigSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_config_social_links';
  info: {
    description: '';
    displayName: 'Social link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    nuxtIcon: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'arrowRight';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'expand';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'elements.link', true>;
    highlighted: Schema.Attribute.JSON;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutPageInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_page_infos';
  info: {
    description: '';
    displayName: 'Page info';
  };
  attributes: {
    Hero: Schema.Attribute.Component<'layout.hero', false>;
    seo: Schema.Attribute.Component<'seo.seo', false>;
  };
}

export interface PageSectionPageSection extends Struct.ComponentSchema {
  collectionName: 'components_page_section_page_sections';
  info: {
    description: '';
    displayName: 'Page section';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'Seo information';
    icon: 'bulletList';
  };
  attributes: {
    metaCanonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files'>;
    metaTitle: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'config.contact': ConfigContact;
      'config.footer-links': ConfigFooterLinks;
      'config.social-link': ConfigSocialLink;
      'elements.link': ElementsLink;
      'layout.hero': LayoutHero;
      'layout.page-info': LayoutPageInfo;
      'page-section.page-section': PageSectionPageSection;
      'seo.seo': SeoSeo;
    }
  }
}
