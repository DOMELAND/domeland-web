import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Entity } from "./Entity";
import { Character } from "./Character";

@Index("idx_item_definition_id", ["itemDefinitionId"], {})
@Index(
  "idx_parent_container_item_id_position",
  ["parentContainerItemId", "position"],
  { unique: true }
)
@Entity("item")
export class Item {
  @Column("integer", { primary: true, name: "item_id" })
  itemId: number;

  @Column("integer", { name: "parent_container_item_id" })
  parentContainerItemId: number;

  @Column("text", { name: "item_definition_id" })
  itemDefinitionId: string;

  @Column("integer", { name: "stack_size" })
  stackSize: number;

  @Column("text", { name: "position" })
  position: string;

  @ManyToOne(() => Item, (item) => item.items)
  @JoinColumn([
    { name: "parent_container_item_id", referencedColumnName: "itemId" },
  ])
  parentContainerItem: Item;

  @OneToMany(() => Item, (item) => item.parentContainerItem)
  items: Item[];

  @ManyToOne(() => Entity, (entity) => entity.items)
  @JoinColumn([{ name: "item_id", referencedColumnName: "entityId" }])
  item: Entity;

  @OneToOne(() => Character, (character) => character.character)
  character: Character;
}
