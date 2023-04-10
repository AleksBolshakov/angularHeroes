import { Injectable } from '@angular/core';
import {Hero} from "./heroes/hero";
import {Heroes} from "./heroes/heroData";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return Heroes;
  }
}
