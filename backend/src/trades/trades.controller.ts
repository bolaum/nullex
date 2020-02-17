import { Controller, Get, Logger, Param } from '@nestjs/common';
import { ApiOperation, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

import { SymbolRequestDto } from '../common/requests.dto';

const log = new Logger('Controller:Trades');

@Controller('trades')
export class TradesController {
  @ApiOperation({
    summary: 'Trades',
    description: 'Get trades history',
    operationId: 'getTrades',
  })
  @ApiOkResponse({
    description:
      '```json\n\n' +
      '// on trading pairs (ex. tBTCUSD)\n\n' +
      '[\n\n' +
      '  [\n\n' +
      '    ID,\n\n' +
      '    MTS,\n\n' +
      '    AMOUNT,\n\n' +
      '    PRICE\n\n' +
      '  ]\n\n' +
      '  ...\n\n' +
      ']\n\n' +
      '```',
  })
  @ApiBadRequestResponse()
  @Get(':symbol/hist')
  getTrades(@Param() params: SymbolRequestDto): Array<Array<number>> {
    log.debug(params);

    return [];
  }
}
