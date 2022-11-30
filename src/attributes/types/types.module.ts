import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { TypesRepository } from '../repository';
import { Type, TypeSchema } from '../schemas/type.schema';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Type.name, schema: TypeSchema }])],
    controllers: [TypesController],
    providers: [TypesService, TypesRepository]
})
export class TypesModule { }