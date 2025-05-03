import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_articles';
  info: {
    displayName: 'Featured Article';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedProject extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_projects';
  info: {
    description: '';
    displayName: 'Featured Project';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedService extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_services';
  info: {
    description: '';
    displayName: 'Featured Service';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFullImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_images';
  info: {
    description: '';
    displayName: 'Full Section';
    icon: 'grid';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    hasImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_lists';
  info: {
    description: '';
    displayName: 'List';
  };
  attributes: {
    hasButton: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    items: Schema.Attribute.Component<'elements.list-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksSolution extends Struct.ComponentSchema {
  collectionName: 'components_blocks_solutions';
  info: {
    displayName: 'Solution';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.card-item', true>;
    title: Schema.Attribute.String;
  };
}

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
    socialLinks: Schema.Attribute.Component<'config.social-link', true>;
  };
}

export interface ConfigFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_config_footer_links';
  info: {
    description: '';
    displayName: 'footer column';
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

export interface ElementsCardItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_card_items';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    nuxtIcon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    description: '';
    displayName: 'Faq Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
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

export interface ElementsListItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_list_items';
  info: {
    description: '';
    displayName: 'Text Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
    logoText: Schema.Attribute.String;
    showLogo: Schema.Attribute.Boolean;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    footerColumn: Schema.Attribute.Component<'config.footer-links', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    showLogo: Schema.Attribute.Boolean;
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
      'blocks.faq': BlocksFaq;
      'blocks.featured-article': BlocksFeaturedArticle;
      'blocks.featured-project': BlocksFeaturedProject;
      'blocks.featured-service': BlocksFeaturedService;
      'blocks.full-image': BlocksFullImage;
      'blocks.list': BlocksList;
      'blocks.solution': BlocksSolution;
      'config.contact': ConfigContact;
      'config.footer-links': ConfigFooterLinks;
      'config.social-link': ConfigSocialLink;
      'elements.card-item': ElementsCardItem;
      'elements.faq-item': ElementsFaqItem;
      'elements.link': ElementsLink;
      'elements.list-item': ElementsListItem;
      'elements.logo': ElementsLogo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero': LayoutHero;
      'seo.seo': SeoSeo;
    }
  }
}
