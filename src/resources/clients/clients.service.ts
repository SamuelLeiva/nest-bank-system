import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { CountriesService } from '../countries/countries.service';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
    private countriesService: CountriesService
  ){

  }

  async createClient(client: CreateClientDto): Promise<Client | HttpException> {
    const countryFound = await this.countriesService.getCountry(client.countryId)

    if (!countryFound) {
      return new HttpException("Country id does not exist.", HttpStatus.CONFLICT);
    }

    const newClient = this.clientRepository.create(client);
    return this.clientRepository.save(newClient);
  }

  getClients(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async getClient(id: number): Promise<Client | HttpException> {
    const clientFound = await this.clientRepository.findOne({
      where: {
            id
      }
    });

    if (!clientFound) {
        return new HttpException('Client not found.', HttpStatus.NOT_FOUND)
    }

    return clientFound;
  }

  async deleteClient(id: number) {
    const result = await this.clientRepository.delete({ id });

        if (result.affected === 0) {
            return new HttpException("Client not found.", HttpStatus.NOT_FOUND);
        }

        return result;
  }

  async updateClient(id: number, client: UpdateClientDto) {
    const clientFound = await this.clientRepository.findOne({
        where: {
            id
        }
    });

    if (!clientFound) {
        return new HttpException('Client not found.', HttpStatus.NOT_FOUND)
    }

    const updatedClient = Object.assign(clientFound, client);

    return this.clientRepository.save(updatedClient);
  }

}
