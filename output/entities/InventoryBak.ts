import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CharacterBak } from "./CharacterBak";

@Entity("_inventory_bak")
export class InventoryBak {
  @Column("integer", { primary: true, name: "character_id" })
  characterId: number;

  @Column("text", { name: "items" })
  items: string;

  @ManyToOne(() => CharacterBak, (characterBak) => characterBak.inventoryBaks, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "character_id", referencedColumnName: "id" }])
  character: CharacterBak;
}
