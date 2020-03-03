import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'foo'
})
export class FooEntity {
  @PrimaryGeneratedColumn()
  @PrimaryColumn({
    name: 'id',
  })
  id: number

  @Column({
    name: 'name'
  })
  name: string

  @Column({
    name: 'is_foo'
  })
  isFoo: boolean
}