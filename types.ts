export interface NavItem {
  label: string;
  path: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}