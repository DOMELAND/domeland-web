import { Column, Entity } from 'typeorm';

@Entity('refinery_schema_history')
export class RefinerySchemaHistory {
  @Column('int4', {
    primary: true,
    name: 'version',
    nullable: true,
    unique: true,
  })
  version: NonNullable<unknown> | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'applied_on', nullable: true, length: 255 })
  appliedOn: string | null;

  @Column('varchar', { name: 'checksum', nullable: true, length: 255 })
  checksum: string | null;
}
