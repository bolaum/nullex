import { Controller, Post, Body, Logger, HttpCode } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiBody,
} from '@nestjs/swagger';

import { EmptyRequestDto } from 'src/common/requests.dto';

const log = new Logger('Controller:Wallets');

@Controller('auth/r/wallets')
export class WalletsControllerR {
  @ApiOperation({ summary: 'Balance' })
  @ApiBody({ description: 'Must be empty', type: EmptyRequestDto })
  @ApiOkResponse({
    description:
      '```json\n\n' +
      '[\n\n' +
      '  [\n\n' +
      '    WALLET_TYPE,\n\n' +
      '    CURRENCY,\n\n' +
      '    BALANCE,\n\n' +
      '    UNSETTLED_INTEREST\n\n' +
      '    BALANCE_AVAILABLE\n\n' +
      '    ...\n\n' +
      '  ]\n\n' +
      '  ...\n\n' +
      ']\n\n' +
      '```',
    schema: {
      type: 'array',
      items: {
        type: 'array',
        items: { oneOf: [{ type: 'number' }, { type: 'string' }] },
      },
      example: [
        ['exchange', 'USD', 50.0, 0, 50.0, null, null],
        ['exchange', 'BTC', 0.00185409, 0, 0.00185409, null, null],
      ],
    },
  })
  @ApiBadRequestResponse()
  @Post()
  @HttpCode(200)
  getBalance(@Body() body: EmptyRequestDto): Array<Array<number | string>> {
    log.debug(body);
    return [];
  }
}
