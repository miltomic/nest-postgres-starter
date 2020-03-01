import { ApiProperty } from '@nestjs/swagger';
import { callModuleBootstrapHook } from '@nestjs/core/hooks';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class FooDto {
  @ApiProperty({
    type: String,
    description: 'Name of the foo',
    required: true
  })
  name: string;
  @ApiProperty({
    type: Boolean,
    description: 'Dummy optional property',
    required: false,
    default: true
  })
  isFoo: boolean;

  constructor(name: string, isFoo = true) {
    this.name = name;
    this.isFoo = isFoo;
  }
}
