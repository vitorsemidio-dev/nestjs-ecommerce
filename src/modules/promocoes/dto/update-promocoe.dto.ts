import { PartialType } from '@nestjs/mapped-types';
import { CreatePromocaoDto } from './create-promocoe.dto';

export class UpdatePromocaoDto extends PartialType(CreatePromocaoDto) {}
