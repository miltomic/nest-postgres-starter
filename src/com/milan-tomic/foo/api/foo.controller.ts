import { Controller, Get } from '@nestjs/common';
import { FooService } from '../service/foo.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FooDto } from '../service/foo.dto';
import { constants } from 'http2';

@ApiTags("foos")
@Controller('foos')
export class FooController {
  constructor(private readonly fooService: FooService) {
  }

  @ApiOperation({
    summary: 'Fetches Foos',
  })
  @ApiResponse({
    status: constants.HTTP_STATUS_OK,
    description: "List of foos",
    isArray: true,
    type: FooDto
  })
  @Get()
  getFoos(): Array<FooDto> {
    return this.fooService.getFoos();
  }
}
