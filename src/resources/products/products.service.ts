import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CountriesService } from '../countries/countries.service';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private countriesService: CountriesService
  ) {
  }

  async createProduct(product: CreateProductDto): Promise<Product | HttpException> {
    const newProduct = this.productRepository.create(product);
    return this.productRepository.save(newProduct);
  }

  getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProduct(id: number): Promise<Product | HttpException> {
    const productFound = await this.productRepository.findOne({
      where: {
        id
      }
    });

    if (!productFound) {
      return new HttpException('Product not found.', HttpStatus.NOT_FOUND)
    }

    return productFound;
  }

  async deleteProduct(id: number) {
    const result = await this.productRepository.delete({ id });

    if (result.affected === 0) {
      return new HttpException("Product not found.", HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async updateProduct(id: number, product: UpdateProductDto) {
    const productFound = await this.productRepository.findOne({
      where: {
        id
      }
    });

    if (!productFound) {
      return new HttpException('Product not found.', HttpStatus.NOT_FOUND)
    }

    const updatedProduct = Object.assign(productFound, product);

    return this.productRepository.save(updatedProduct);
  }

}
