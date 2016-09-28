import { Injectable } from '@angular/core';

export class PortfolioItem {
  id: number;
  name: string;
  url: string;
  description: string;
  goals: string;
  solution: string;
  technologies: string;
  comment: string;
  launchDate: string;
  rank: number;
  image: string;
  tmb: string;
  slug: string;
  tags: string;
  category: string;
  views: number;
  published: number;
}

@Injectable()
export class PortfolioService {
}