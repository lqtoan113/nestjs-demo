import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ROLES } from 'src/enum/role.enum';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column()
    @Exclude()
    password: string;
    @Column({ default: true })
    isActive: boolean;
    @Column({default: 'USER'})
    @Exclude()
    role: ROLES ;
}