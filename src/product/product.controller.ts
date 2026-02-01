import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productsService: ProductService){}
    @Get()
    getAllProducts() {
          return this.productsService.getAllProducts();
        // Logic to get all products
    }
    @Get(':id')
    getProductById(@Param('id') id: string) {
      return this.productsService.getProductById(Number(id));
    }
}
