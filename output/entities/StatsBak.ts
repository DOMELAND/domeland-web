import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CharacterBak } from "./CharacterBak";

@Entity("_stats_bak")
export class StatsBak {
  @Column("int", { primary: true, name: "character_id", unique: true })
  characterId: number;

  @Column("int", { name: "level", default: () => "1" })
  level: number;

  @Column("int", { name: "exp", default: () => "0" })
  exp: number;

  @Column("int", { name: "endurance", default: () => "0" })
  endurance: number;

  @Column("int", { name: "fitness", default: () => "0" })
  fitness: number;

  @Column("int", { name: "willpower", default: () => "0" })
  willpower: number;

  @Column("text", { name: "skills", nullable: true })
  skills: string | null;

  @OneToOne(() => CharacterBak, (characterBak) => characterBak.statsBak, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "character_id", referencedColumnName: "id" }])
  character: CharacterBak;
}
