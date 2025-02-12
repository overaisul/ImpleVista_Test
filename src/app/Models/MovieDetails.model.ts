export interface MovieDetails {
  id: number;
  title: string;
  language: 'English' | 'Bangla' | 'Hindi';
  rating: number;
  poster?: string;
}
