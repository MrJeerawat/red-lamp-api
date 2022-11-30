/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Module({
  providers: [CategoriesService]
})
export class CategoriesModule { }
