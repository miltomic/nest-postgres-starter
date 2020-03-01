import { FooDto } from './foo.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FooService {
  getFoos() {
    return [new FooDto('A foo')];
  }
}
