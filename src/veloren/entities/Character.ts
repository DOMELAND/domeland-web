import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Item } from './Item';
import { Pet } from './Pet';
import { AbilitySet } from './AbilitySet';
import { Body } from './Body';

@Entity('character')
export class Character {
  @Column('int', { primary: true, name: 'character_id', unique: true })
  characterId: number;

  @Column('text', { name: 'player_uuid' })
  playerUuid: string;

  @Column('text', { name: 'alias' })
  alias: string;

  @Column('text', { name: 'waypoint', nullable: true })
  waypoint: string | null;

  @OneToOne(() => Item, (item) => item.character)
  @JoinColumn([{ name: 'character_id', referencedColumnName: 'itemId' }])
  character: Item;

  @OneToOne(() => Body, (body) => body.character)
  @JoinColumn([{ name: 'character_id', referencedColumnName: 'bodyId' }])
  character_2: Body;

  @OneToMany(() => Pet, (pet) => pet.character)
  pets: Pet[];

  @OneToOne(() => AbilitySet, (abilitySet) => abilitySet.entity)
  abilitySet: AbilitySet;
}
