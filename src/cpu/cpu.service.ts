import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('computing');
    this.powerService.supplyPower(a + b);
    return a + b;
  }
}

// cpu servisini başka bir yerde kullanmak istersek:
// const cpuService = new CpuService(new PowerService());
// cpuService.compute(1, 2);
