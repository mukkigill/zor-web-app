export interface CmsBase {
  errors?: any[];
}

export interface Redirection {
  title: string;
  description?: string;
  link: string;
  isPrimary?: boolean;
}

export interface News {
  headline: string;
  publisher?: string;
  link?: string;
}

export interface Technology {
  title: string;
  caption?: string;
}