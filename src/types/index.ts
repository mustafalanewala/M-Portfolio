export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
}

export interface Design {
  id: number;
  title: string;
  category: string;
  mediaType: 'image' | 'video';
  mediaPath: string;
  thumbnailPath?: string; 
  link?: string;
}

