import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class SensoreAria {

    @PrimaryGeneratedColumn()
    id;

    @Column()
    macAddress;

    @Column()
    co2;

    @Column()
    bool;

    @Column()
    nomeSens;

    @Column()
    timeStamp;
}
