import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Scd40 } from '../entities/scd40.entity'

@Injectable()
export class Scd40Service {
    constructor(@InjectModel(Scd40.name) private scd40Model: Model<Scd40>){
    }

    findAll(){
        return this.scd40Model.find().exec()
    }

    findOne(id: string){
        return this.scd40Model.findById(id).exec()
    }

    create(data: any) {
        const date = new Date();
        const newDocumentData = {
            ...data,
            fecha: date
        }
        const newScd40 = new this.scd40Model(newDocumentData);
        return newScd40.save();
    }

    update(id: string, changes: any) {
        return this.scd40Model.findByIdAndUpdate(id, { $set: changes }, { new: true}).exec();
    }

    delete(id: string){
        return this.scd40Model.findByIdAndDelete(id).exec()
    }

}
