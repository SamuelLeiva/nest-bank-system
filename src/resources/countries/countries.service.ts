import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {

  constructor(@InjectRepository(Country) private countryRepository: Repository<Country>){

  }

  async createCountry(country: CreateCountryDto): Promise<Country | HttpException> {

    const countryFound = await this.countryRepository.findOne({
      where: {
        name: country.name
      }
    })

    if (countryFound) {
      return new HttpException("Country already exists.", HttpStatus.CONFLICT);
    }

    const newCountry = this.countryRepository.create(country);
    return this.countryRepository.save(newCountry);
  }

  getCountries(): Promise<Country[]>{
    return this.countryRepository.find();
  }

  async getCountry(id: number): Promise<Country | HttpException>{
    const countryFound = await this.countryRepository.findOne({
        where: {
            id
        }
    });

    if (!countryFound) {
        return new HttpException('Country not found.', HttpStatus.NOT_FOUND)
    }

    return countryFound;
  }

  async deleteCountry(id: number) {
    const result = await this.countryRepository.delete({ id });

        if (result.affected === 0) {
            return new HttpException("Country not found.", HttpStatus.NOT_FOUND);
        }

        return result;
  }

  async updateCountry(id: number, country: UpdateCountryDto) {
    const countryFound = await this.countryRepository.findOne({
        where: {
            id
        }
    });

    if (!countryFound) {
        return new HttpException('Country not found.', HttpStatus.NOT_FOUND)
    }

    const updatedCountry = Object.assign(countryFound, country);

    return this.countryRepository.save(updatedCountry);
  }

  
}
