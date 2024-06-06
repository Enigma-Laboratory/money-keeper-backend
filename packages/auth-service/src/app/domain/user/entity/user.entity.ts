import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 255, select: true, unique: true })
  public email!: string;

  @Column({ type: 'varchar', length: 500 })
  public password!: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  public lastName!: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  public firstName!: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  public name!: string;

  @Column({ type: 'varchar', nullable: true, select: false })
  public refreshToken!: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  public pictureUrl!: string;

  @Column({ type: 'varchar', nullable: true })
  public permissions!: string;

  @Column({ type: 'jsonb', default: null })
  public passwordReset!: any;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: true,
  })
  public createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    select: true,
  })
  public updatedAt!: Date;
}
