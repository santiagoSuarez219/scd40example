import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { Scd40Module } from './scd40/scd40.module';

@Module({
  imports: [DatabaseModule, Scd40Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
