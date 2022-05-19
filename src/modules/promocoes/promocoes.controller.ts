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
  create(@Body() createPromocoeDto: CreatePromocaoDto) {
    return this.promocoesService.create(createPromocoeDto);
  }

  @Get()
  findAll() {
    return this.promocoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Uuid) {
    return this.promocoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Uuid, @Body() updatePromocoeDto: UpdatePromocaoDto) {
    return this.promocoesService.update(id, updatePromocoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Uuid) {
    return this.promocoesService.remove(id);
  }
}
