export interface Testimonial {
  id?: string | number;
  name: string;
  designation?: string;
  rating?: string | number;
  image_url?: string;
  status?: number;
  // allow any extra fields returned by the API
  [key: string]: any;
}
