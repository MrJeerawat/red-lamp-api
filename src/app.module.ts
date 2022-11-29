import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { AttributesService } from './attributes/attributes.service';
import { AttributesController } from './attributes/attributes.controller';
import { AttributesModule } from './attributes/attributes.module';
import { BeveragesModule } from './beverages/beverages.module';

@Module({
  imports: [CategoriesModule, AttributesModule, BeveragesModule],
  controllers: [AppController, CategoriesController, AttributesController],
  providers: [AppService, AttributesService],
})
export class AppModule {}
