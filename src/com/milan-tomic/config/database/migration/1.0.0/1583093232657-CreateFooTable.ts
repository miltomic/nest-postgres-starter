import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFooTable1583093232657 implements MigrationInterface {

  private readonly tableName = 'foo';

  public async up(queryRunner: QueryRunner): Promise<any> {

    await queryRunner.createTable(new Table({
      name: this.tableName,
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'is_foo',
          type: 'boolean',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.tableName);
  }

}
