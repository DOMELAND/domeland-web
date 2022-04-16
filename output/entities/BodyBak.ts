import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CharacterBak } from "./CharacterBak";

@Entity("_body_bak")
export class BodyBak {
  @Column("int", { primary: true, name: "character_id", unique: true })
  characterId: number;

  @Column("smallint", { name: "species" })
  species: number;

  @Column("smallint", { name: "body_type" })
  bodyType: number;

  @Column("smallint", { name: "hair_style" })
  hairStyle: number;

  @Column("smallint", { name: "beard" })
  beard: number;

  @Column("smallint", { name: "eyes" })
  eyes: number;

  @Column("smallint", { name: "accessory" })
  accessory: number;

  @Column("smallint", { name: "hair_color" })
  hairColor: number;

  @Column("smallint", { name: "skin" })
  skin: number;

  @Column("smallint", { name: "eye_color" })
  eyeColor: number;

  @OneToOne(() => CharacterBak, (characterBak) => characterBak.bodyBak, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "character_id", referencedColumnName: "id" }])
  character: CharacterBak;
}
