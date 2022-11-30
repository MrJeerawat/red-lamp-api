/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SweetnessService } from './sweetness.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Sweetness, SweetnessSchema } from '../schemas/sweetness.schema';
import { SweetnessController } from './sweetness.controller';
import { SweetnessRepository } from '../repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sweetness.name, schema: SweetnessSchema }])],
  controllers: [SweetnessController],
  providers: [SweetnessService,SweetnessRepository]
})
export class SweetnessModule { }