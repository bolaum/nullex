import { Controller, Get, Query, Logger, Param } from '@nestjs/common';
import { ApiOperation, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

import { SymbolPrecisionRequestDto } from '../common/requests.dto';

const log = new Logger('Controller:Book');

@Controller('book')
export class BookController {
  @ApiOperation({
    summary: 'Book',
    description: 'Get orderbook',
    operationId: 'getOrderbook',
  })
  @ApiOkResponse({
    description:
      '```json\n\n' +
      '// on trading pairs (ex. tBTCUSD)\n\n' +
      '[\n\n' +
      '  [\n\n' +
      '    PRICE\n\n' +
      '    COUNT,\n\n' +
      '    AMOUNT,\n\n' +
      '  ]\n\n' +
      '  ...\n\n' +
      ']\n\n\n\n' +
      '// on raw books (precision of R0)\n\n' +
      '// on trading currencies:\n\n' +
      '[\n\n' +
      '  [\n\n' +
      '    ORDER_ID,\n\n' +
      '    PRICE\n\n' +
      '    AMOUNT,\n\n' +
      '  ]\n\n' +
      '  ...\n\n' +
      ']\n\n' +
      '```',
  })
  @ApiBadRequestResponse()
  @Get(':symbol/:precision')
  getOrderbook(@Param() params: SymbolPrecisionRequestDto): Array<Array<number>> {
    log.debug(params);

    return [];
  }
}
