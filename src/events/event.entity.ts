import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Attendee } from './attendee.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  when: Date;

  @Column()
  address: string;

  @OneToMany(() => Attendee, (attendee) => attendee.event)
  attendees: Attendee[];

  atendeeCount?: number;
  attendeeRjected?: number;
  attendeeMaybe?: number;
  attendeeAccepted?: number;
}
