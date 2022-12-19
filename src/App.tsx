import React from 'react';
import { ParticipantsList } from './ParticipantsList';
import { Participant } from './Participant';

export default function App() {
  const participants: Participant[] = [
    new Participant('Alberte', 3),
    new Participant('Auscher', 3),
    new Participant('Dinsen', 2),
    new Participant('Carla', 2),
    new Participant('Ida-Marie', 1),
    new Participant('Frellsen', 3),
    new Participant('Krogh', 5),
    new Participant('Lucca', 1),
    new Participant('Mathilde', 3),
    new Participant('Dupont', 5),
    new Participant('Noelle', 1),
    new Participant('Sille', 2),
    new Participant('Strehlau', 4),
    new Participant('Jæger', 5),
    new Participant('Lundin', 2),
    new Participant('Caroline', 4),
    new Participant('Emma', 5),
    new Participant('Isabella', 2),
    new Participant('Andreasen', 3),
    new Participant('Mille', 3),
    new Participant('Mina', 3),
    new Participant('Mira', 4),
    new Participant('Mynte', 3),
    new Participant('Regina', 5),
    new Participant('Silje', 5),
    new Participant('Skytte', 1),
  ];

  // Sort the participants by name
  const sortedParticipants: Participant[] = participants.sort((a, b) =>
    // Use the localeCompare method to compare the names
    // in a case-insensitive manner
    a.name.localeCompare(b.name, undefined, { sensitivity: 'accent' })
  );

  return (
    <div className="App">
      <ParticipantsList participants={sortedParticipants} />
    </div>
  );
}
