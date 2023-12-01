import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

@Global()
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://admin:admin12345@localhost:27017/?authMechanism=DEFAULT')
    ],
    exports: [MongooseModule]
})
export class DatabaseModule {}
