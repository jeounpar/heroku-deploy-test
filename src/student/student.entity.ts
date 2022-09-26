import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Students {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  studentId: string;

  @Column()
  email: string;

  @Column()
  major: string;

  @Column()
  phoneNumber: string;
}
