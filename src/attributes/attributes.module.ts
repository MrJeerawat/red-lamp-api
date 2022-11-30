import { Module } from '@nestjs/common';
import { TypesModule } from './types/types.module';
import { OptionsModule } from './options/options.module';
import { SweetnessModule } from './sweetness/sweetness.module';
import { AttributesRepository } from './repository';
import { AttributesService } from './attributes.service';
import { AttributesController } from './attributes.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Attribute, AttributeSchema } from './schemas/attribute.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Attribute.name, schema: AttributeSchema }]),
    TypesModule, OptionsModule, SweetnessModule
  ],
  controllers: [AttributesController],
  providers: [AttributesService, AttributesRepository],
})
export class AttributesModule { }
