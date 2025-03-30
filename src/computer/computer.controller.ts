import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(20, 10), this.diskService.getData()];
  }
}

// computer servisini başka bir yerde kullanmak istersek:
// const computerController = new ComputerController(new ComputerService());
// computerController.getData();
