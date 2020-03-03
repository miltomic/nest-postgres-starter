import { getConnection, MigrationInterface, QueryRunner } from 'typeorm';
import { FooEntity } from '../../../../foo/persistance/foo.entity';

export class ImportFooValues1583256323187 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(FooEntity)
      .values([
        {
          name: 'A foo',
          isFoo: true,
        },
      ])
      .execute();

  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(FooEntity)
      .execute();
  }

}
