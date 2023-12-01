import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Scd40 extends Document {
    @Prop()
    co2: number;

    @Prop()
    temperatura: number;

    @Prop()
    humedad: number;

    @Prop()
    fecha: Date;
}

export const Scd40Schema =  SchemaFactory.createForClass(Scd40)