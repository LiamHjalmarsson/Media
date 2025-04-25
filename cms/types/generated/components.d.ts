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

export interface ConfigMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_config_menu_links';
  info: {
    description: '';
    displayName: 'Menu link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
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
    slug: Schema.Attribute.String & Schema.Attribute.Required;
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
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'Seo';
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
      'config.menu-link': ConfigMenuLink;
      'config.social-link': ConfigSocialLink;
      'elements.link': ElementsLink;
      'seo.seo': SeoSeo;
    }
  }
}
