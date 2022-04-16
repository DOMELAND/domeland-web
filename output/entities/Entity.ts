import { Entity , OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./Item";
import { Body } from "./Body";
import { Pet } from "./Pet";
import { SkillGroup } from "./SkillGroup";

@TypeORMEntity("entity")
export class Entity {
  @PrimaryGeneratedColumn({
    type: "integer",
    name: "entity_id",
    default: () => "NULL",
  })
  entityId: number;

  @OneToMany(() => Item, (item) => item.item)
  items: Item[];

  @OneToMany(() => Body, (body) => body.body)
  bodies: Body[];

  @OneToOne(() => Pet, (pet) => pet.pet)
  pet: Pet;

  @OneToMany(() => SkillGroup, (skillGroup) => skillGroup.entity)
  skillGroups: SkillGroup[];
}
