import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, ParseIntPipe } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) { }

  @Post()
  createClient(@Body() client: CreateClientDto): Promise<Client | HttpException> {
    return this.clientsService.createClient(client);
  }

  @Get()
  getClients(): Promise<Client[]> {
    return this.clientsService.getClients();
  }

  @Get(':id')
  getClient(@Param('id', ParseIntPipe) id: number): Promise<Client | HttpException> {
    return this.clientsService.getClient(id);
  }

  @Delete(':id')
  deleteClient(@Param('id', ParseIntPipe) id: number) {
    return this.clientsService.deleteClient(id);
  }

  @Patch(':id')
  updateClient(@Param('id', ParseIntPipe) id: number, @Body() client: UpdateClientDto) {
    return this.clientsService.updateClient(id, client);
  }
}
