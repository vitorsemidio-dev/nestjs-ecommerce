import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PromocoesService } from './promocoes.service';
import { CreatePromocaoDto } from './dto/create-promocoe.dto';
import { UpdatePromocaoDto } from './dto/update-promocoe.dto';

@Controller('promocoes')
export class PromocoesController {
  constructor(private readonly promocoesService: PromocoesService) {}

  @Post()
  async create(@Body() createPromocoeDto: CreatePromocaoDto) {
    return await this.promocoesService.create(createPromocoeDto);
  }

  @Get()
  async findAll() {
    return await this.promocoesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Uuid) {
    return await this.promocoesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: Uuid,
    @Body() updatePromocoeDto: UpdatePromocaoDto,
  ) {
    return await this.promocoesService.update(id, updatePromocoeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Uuid) {
    return await this.promocoesService.remove(id);
  }
}
