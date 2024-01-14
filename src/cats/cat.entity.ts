import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { Exclude } from 'class-transformer';
@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    @Exclude()
    weight: number;

    // @Column({ type: 'datetime' })
    // createDate: Date;
    // @BeforeInsert()
    // updateCreateDate() {
    //     this.createDate = new Date();
    // }
    // @Column({ type: 'datetime' })
    // updateDate: Date;
    // @BeforeInsert()
    // updateUpdateDate() {
    //     this.updateDate = new Date();
    // }
    @Column({ default: true })
    isActive: boolean;
}