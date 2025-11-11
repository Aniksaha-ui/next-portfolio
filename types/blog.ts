type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  content: string;
  short_description: string;
  category: string;
  fa_icon: string;
  view_count: any;
  author_name: string;
  published_date: string;
  isPublished: any
  image: string
};
