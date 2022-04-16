import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Entity } from "./Entity";

@Entity("skill_group")
export class SkillGroup {
  @Column("integer", { primary: true, name: "entity_id" })
  entityId: number;

  @Column("text", { primary: true, name: "skill_group_kind" })
  skillGroupKind: string;

  @Column("integer", { name: "earned_exp" })
  earnedExp: number;

  @Column("integer", { name: "spent_exp" })
  spentExp: number;

  @Column("text", { name: "skills" })
  skills: string;

  @Column("blob", { name: "hash_val" })
  hashVal: Buffer;

  @ManyToOne(() => Entity, (entity) => entity.skillGroups)
  @JoinColumn([{ name: "entity_id", referencedColumnName: "entityId" }])
  entity: Entity;
}
