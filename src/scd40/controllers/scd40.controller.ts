import { Controller, Post, Body, Get, Param, Put, Delete} from '@nestjs/common';

import { Scd40Service } from '../services/scd40.service'

@Controller('scd40')
export class Scd40Controller {
    constructor(private scd40Service: Scd40Service){}

    @Get()
    findAll() {
        return this.scd40Service.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.scd40Service.findOne(id)
    }

    @Post()
    create(@Body() data: any){
        return this.scd40Service.create(data)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() changes: any){
        console.log('entre');
        return this.scd40Service.update(id, changes);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.scd40Service.delete(id)
    }
}
