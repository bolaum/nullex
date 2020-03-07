import {
  Controller,
  Post,
  Param,
  Body,
  Logger,
  HttpCode,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { SymbolRequestDto, EmptyRequestDto } from '../common/requests.dto';
import { SubmitOrderDto, UpdateOrderDto, CancelOrderDto } from './orders.dto';

const log = new Logger('Controller:Orders');

@Controller('auth/r')
export class OrdersControllerR {
  @ApiOperation({ summary: 'Active orders' })
  @ApiOkResponse()
  @Post('orders/:symbol')
  @HttpCode(200)
  getActiveOrders(
    @Param() params: SymbolRequestDto,
    @Body() body: EmptyRequestDto,
  ): Array<Array<number | string>> {
    log.debug(params);
    log.debug(body);
    return [];
  }

  @ApiOperation({ summary: 'User trades' })
  @ApiOkResponse()
  @Post('trades/:symbol/hist')
  @HttpCode(200)
  getUserTrades(
    @Param() params: SymbolRequestDto,
    @Body() body: EmptyRequestDto,
  ): Array<Array<number | string>> {
    log.debug(params);
    log.debug(body);
    return [];
  }
}

@Controller('auth/w')
export class OrdersControllerW {
  @ApiOperation({ summary: 'Submit order' })
  @ApiOkResponse()
  @Post('order/submit')
  @HttpCode(200)
  submitOrder(@Body() body: SubmitOrderDto): Array<Array<number | string>> {
    log.debug(body);
    return [];
  }

  @ApiOperation({ summary: 'Update order' })
  @ApiOkResponse()
  @Post('order/update')
  @HttpCode(200)
  updateOrder(@Body() body: UpdateOrderDto): Array<Array<number | string>> {
    log.debug(body);
    return [];
  }

  @ApiOperation({ summary: 'Cancel order' })
  @ApiOkResponse()
  @Post('order/cancel')
  @HttpCode(200)
  cancelOrder(@Body() body: CancelOrderDto): Array<Array<number | string>> {
    log.debug(body);
    return [];
  }
}
