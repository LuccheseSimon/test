import { Injectable } from '@nestjs/common';

interface Response {
  ATNemployeEssence: number;
  ATNemployeurEssence: number;
  ATNemployeDiesel: number;
  ATNemployeurDiesel: number;
}

@Injectable()
export class AppService {
  getHello(): Response {
    const valeurCatalogue = 125307;
    const co2 = 200;
    const annee = 1999;
    const response = {
      ATNemployeEssence:
        (valeurCatalogue *
          ((5.5 + (co2 - 72) * 0.1) / 100) *
          (6 / 7) *
          this.getCoefficient(annee)) /
        12,
      ATNemployeurEssence: ((co2 * 9 - 768) / 12) * (171.64 / 114.08),
      ATNemployeDiesel:
        (valeurCatalogue *
          ((5.5 + (co2 - 67) * 0.1) / 100) *
          (6 / 7) *
          this.getCoefficient(annee)) /
        12,
      ATNemployeurDiesel: ((co2 * 9 - 600) / 12) * (171.64 / 114.08),
    };
    return response;
  }

  getCoefficient(annee: number): number {
    switch (annee) {
      case 2023:
        return 1;
      case 2022:
        return 0.94;
      case 2021:
        return 0.88;
      case 2020:
        return 0.82;
      case 2019:
        return 0.76;
      default:
        return 0.7;
    }
  }
}
