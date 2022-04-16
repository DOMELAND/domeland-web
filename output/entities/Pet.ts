import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Character } from "./Character";
import { Entity } from "./Entity";

@Entity("pet")
export class Pet {
  @Column("int", { primary: true, name: "pet_id", unique: true })
  petId: number;

  @Column("text", { name: "name" })
  name: string;

  @ManyToOne(() => Character, (character) => character.pets)
  @JoinColumn([{ name: "character_id", referencedColumnName: "characterId" }])
  character: Character;

  @OneToOne(() => Entity, (entity) => entity.pet)
  @JoinColumn([{ name: "pet_id", referencedColumnName: "entityId" }])
  pet: Entity;
}
