import { IsString, IsIn, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { AVAILABLE_SYMBOLS, PRECISION } from './constants';

export class SymbolRequestDto {
  @ApiProperty({ enum: AVAILABLE_SYMBOLS })
  @IsString()
  @IsIn(AVAILABLE_SYMBOLS)
  readonly symbol: string;
}

export class SymbolPrecisionRequestDto extends SymbolRequestDto {
  @ApiProperty({ enum: PRECISION })
  @IsString()
  @IsEnum(PRECISION)
  readonly precision: PRECISION;
}

export class EmptyRequestDto {}
