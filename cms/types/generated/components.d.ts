import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_items';
  info: {
    displayName: 'faqItem';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
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
    items: Schema.Attribute.Component<'blocks.list-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksListItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_list_items';
  info: {
    description: '';
    displayName: 'ListItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTitleWithRelations extends Struct.ComponentSchema {
  collectionName: 'components_blocks_title_with_relations';
  info: {
    displayName: 'TitleWithRelations';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
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
      'blocks.faq-item': BlocksFaqItem;
      'blocks.list': BlocksList;
      'blocks.list-item': BlocksListItem;
      'blocks.title-with-relations': BlocksTitleWithRelations;
      'config.contact': ConfigContact;
      'config.footer-links': ConfigFooterLinks;
      'config.social-link': ConfigSocialLink;
      'elements.link': ElementsLink;
      'layout.hero': LayoutHero;
      'seo.seo': SeoSeo;
    }
  }
}
