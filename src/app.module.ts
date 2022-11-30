import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { AttributesModule } from './attributes/attributes.module';
import { BeveragesModule } from './beverages/beverages.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@klassbit.pfqcuao.mongodb.net/coffeeShop?retryWrites=true&w=majority`,
    ),
    CategoriesModule,
    AttributesModule,
    BeveragesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
