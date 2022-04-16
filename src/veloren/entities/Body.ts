import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import DEntity from './Entity';
import { Character } from './Character';

@Entity('body')
export class Body {
  @Column('integer', { primary: true, name: 'body_id' })
  bodyId: number;

  @Column('text', { name: 'variant' })
  variant: string;

  @Column('text', { name: 'body_data' })
  bodyData: string;

  @ManyToOne(() => DEntity, (entity) => entity.bodies)
  @JoinColumn([{ name: 'body_id', referencedColumnName: 'entityId' }])
  body: DEntity;

  @OneToOne(() => Character, (character) => character.character_2)
  character: Character;
}
