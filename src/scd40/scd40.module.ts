import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { Scd40, Scd40Schema } from './entities/scd40.entity'
import { Scd40Service } from './services/scd40.service';
import { Scd40Controller } from './controllers/scd40.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Scd40.name, schema: Scd40Schema}
        ])
    ],
    providers: [Scd40Service],
    controllers: [Scd40Controller]
})
export class Scd40Module {}
