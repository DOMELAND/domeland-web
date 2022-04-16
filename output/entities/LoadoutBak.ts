import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CharacterBak } from "./CharacterBak";

@Entity("_loadout_bak")
export class LoadoutBak {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("text", { name: "items" })
  items: string;

  @ManyToOne(() => CharacterBak, (characterBak) => characterBak.loadoutBaks, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "character_id", referencedColumnName: "id" }])
  character: CharacterBak;
}
