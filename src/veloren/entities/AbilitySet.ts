import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Character } from './Character';

@Entity('ability_set')
export class AbilitySet {
  @Column('int', { primary: true, name: 'entity_id', unique: true })
  entityId: number;

  @Column('text', { name: 'ability_sets' })
  abilitySets: string;

  @OneToOne(() => Character, (character) => character.abilitySet)
  @JoinColumn([{ name: 'entity_id', referencedColumnName: 'characterId' }])
  entity: Character;
}
