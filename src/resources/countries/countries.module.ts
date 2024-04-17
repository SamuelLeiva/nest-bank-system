import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Client } from '../clients/entities/client.entity';
import { Product } from '../products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country, Client, Product])],
  controllers: [CountriesController],
  providers: [CountriesService],
  exports: [CountriesService]
})
export class CountriesModule {}
