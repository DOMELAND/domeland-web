import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { StatsBak } from "./StatsBak";
import { BodyBak } from "./BodyBak";
import { InventoryBak } from "./InventoryBak";
import { LoadoutBak } from "./LoadoutBak";

@Entity("_character_bak")
export class CharacterBak {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("text", { name: "player_uuid" })
  playerUuid: string;

  @Column("text", { name: "alias" })
  alias: string;

  @Column("text", { name: "tool", nullable: true })
  tool: string | null;

  @OneToOne(() => StatsBak, (statsBak) => statsBak.character)
  statsBak: StatsBak;

  @OneToOne(() => BodyBak, (bodyBak) => bodyBak.character)
  bodyBak: BodyBak;

  @OneToMany(() => InventoryBak, (inventoryBak) => inventoryBak.character)
  inventoryBaks: InventoryBak[];

  @OneToMany(() => LoadoutBak, (loadoutBak) => loadoutBak.character)
  loadoutBaks: LoadoutBak[];
}
