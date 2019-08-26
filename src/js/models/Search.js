import axios from 'axios';
import { key } from '../config';
import { pizza, pasta } from '../../data/recipes';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;

      // // Use mock data for recipes
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      // this.result = this.query === 'pizza' ? pizza.recipes : pasta.recipes;
    } catch (error) {
      alert(error);
    }
  }
}




