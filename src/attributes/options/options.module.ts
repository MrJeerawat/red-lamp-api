import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Option, OptionSchema } from '../schemas/option.schema';
import { OptionsRepository } from '../repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Option.name, schema: OptionSchema }])],
  controllers: [OptionsController],
  providers: [OptionsService,OptionsRepository],
})
export class OptionsModule {}
