import { Injectable } from '@nestjs/common';

@Injectable()
// başka bir yerde kullanılacak o yüzden bu decoratoru kullandık
export class PowerService {
  supplyPower(watts: number) {
    console.log(`supplying ${watts} of power`);
  }
}
