import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'foo'
})
export class Foo {
  @PrimaryGeneratedColumn()
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