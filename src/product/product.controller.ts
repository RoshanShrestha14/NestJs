import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {

    constructor(private readonly productsService: ProductService){}
    @Get()
    @UseGuards(AuthGuard)
    getAllProducts() {
          return this.productsService.getAllProducts();
        // Logic to get all products
    }
    @Get(':id')
    getProductById(@Param('id') id: string) {
      return this.productsService.getProductById(Number(id));
    }
}
