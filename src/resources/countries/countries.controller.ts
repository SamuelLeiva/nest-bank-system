import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  createCountry(@Body() createCountryDto: CreateCountryDto) {
    return this.countriesService.createCountry(createCountryDto);
  }

  @Get()
  getCountries() {
    return this.countriesService.getCountries();
  }

  @Get(':id')
  getCountry(@Param('id', ParseIntPipe) id: number) {
    return this.countriesService.getCountry(id);
  }

  @Delete(':id')
  deleteCountry(@Param('id', ParseIntPipe) id: number) {
    return this.countriesService.deleteCountry(id);
  }

  @Patch(':id')
  updateCountry(@Param('id',ParseIntPipe) id: number, @Body() country: UpdateCountryDto) {
    return this.countriesService.updateCountry(id, country);
  }
}
