import { Controller, Get, Logger, Param } from '@nestjs/common';
import { ApiOperation, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

import { SymbolRequestDto } from '../common/requests.dto';

const log = new Logger('Controller:Ticker');

@Controller('ticker')
export class TickerController {
  @ApiOperation({
    summary: 'Ticker',
    description: 'Get ticker data',
    operationId: 'getTicker',
  })
  @ApiOkResponse({
    description:
      '```json\n\n' +
      '// on trading pairs (ex. tBTCUSD)\n\n' +
      '[\n\n' +
      '  BID,\n\n' +
      '  BID_SIZE,\n\n' +
      '  ASK,\n\n' +
      '  ASK_SIZE,\n\n' +
      '  DAILY_CHANGE,\n\n' +
      '  DAILY_CHANGE_RELATIVE,\n\n' +
      '  LAST_PRICE,\n\n' +
      '  VOLUME,\n\n' +
      '  HIGH,\n\n' +
      '  LOW\n\n' +
      ']\n\n' +
      '```',
  })
  @ApiBadRequestResponse()
  @Get(':symbol')
  getTicker(@Param() params: SymbolRequestDto): Array<number> {
    log.debug(params);

    return [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
  }
}
