import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private readonly facts = [
    "Love isn't magic. It's just chemicals in your brain making sure you have babies.",
    "You don't have a soul. Your mind is just what your brain does when it's working.",
    "You didn't choose to read this. Your brain decided before you even knew it.",
    "Stars don't control your life. The doctor who delivered you pulled on you harder than any planet did.",
    "Homeopathy is just water. Water doesn't remember what was in it.",
    "The universe will eventually freeze and die. Nothing we do matters in the long run.",
    "Being nice isn't about being good. It's just a survival trick your genes use to keep going.",
  ];

  getRandomFact(): string {
    const randomIndex = Math.floor(Math.random() * this.facts.length);
    return this.facts[randomIndex];
  }
}
