import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    creator: string

    @Column()
    likes: string

    @Column()
    comments: string

}