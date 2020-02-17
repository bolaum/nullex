import { IsString, IsIn, IsEnum, IsNumberString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { applyMixins } from '../common/utils';
import { SymbolRequestDto } from '../common/requests.dto';

export enum ORDER_TYPE {
  LIMIT = 'LIMIT',
};

export class SubmitOrderDto extends SymbolRequestDto {
  @ApiProperty({ enum: ORDER_TYPE })
  @IsString()
  @IsEnum(ORDER_TYPE)
  readonly type: ORDER_TYPE;

  @ApiProperty()
  @IsNumberString()
  readonly price: string;

  @ApiProperty()
  @IsNumberString()
  readonly amount: string;
}

export class UpdateOrderDto  {
  @ApiProperty()
  @IsInt()
  readonly id: number;

  @ApiProperty()
  @IsNumberString()
  readonly price?: string;

  @ApiProperty()
  @IsNumberString()
  readonly amount?: string;
}

export class CancelOrderDto  {
  @ApiProperty()
  @IsInt()
  readonly id: number;
}
