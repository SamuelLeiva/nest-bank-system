import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from '../countries/entities/country.entity';
import { Client } from './entities/client.entity';
import { CountriesModule } from '../countries/countries.module';

@Module({
  imports: [TypeOrmModule.forFeature([Country, Client]), CountriesModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
