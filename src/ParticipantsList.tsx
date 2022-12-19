import React, { useState } from 'react';
import { createTeams } from './teams-generator';
import { Team } from './Team';
import { Participant } from './Participant';

export const ParticipantsList = ({
  participants,
}: {
  participants: Participant[];
}) => {
  const [selectedParticipants, setSelectedParticipants] =
    useState(participants);

  const [teams, setTeams] = useState<Team[]>([]);
  const [numberOfTeams, setNumberOfTeams] = useState(2);

  function handleSelectedParticipantChange(participant: Participant) {
    // Add or remove the participant from the list of selected participants,
    // depending on whether they are already in the list
    if (selectedParticipants.includes(participant)) {
      setSelectedParticipants(
        selectedParticipants.filter((p) => p !== participant)
      );
    } else {
      setSelectedParticipants([...selectedParticipants, participant]);
    }
  }

  function handleNumberOfTeamsChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const selectedNumerofTeams = Number(event.target.value);
    setNumberOfTeams(selectedNumerofTeams);
    setTeams(createTeams(selectedParticipants, selectedNumerofTeams));
  }

  function handleGenerateTeamsButtonClick() {
    setTeams(createTeams(selectedParticipants, numberOfTeams));
  }

  return (
    <div>
      <div>
        <ul>
          {participants.map((participant) => (
            <li key={participant.name}>
              <input
                type="checkbox"
                checked={selectedParticipants.includes(participant)}
                onChange={() => handleSelectedParticipantChange(participant)}
              />
              {participant.name} ({participant.rating})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <div>Number of teams:</div>
          <span>
            <select value={numberOfTeams} onChange={handleNumberOfTeamsChange}>
              {/* Generate options for the dropdown */}
              {Array.from(Array(20).keys()).map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </span>
        </div>
        <button type="button" onClick={handleGenerateTeamsButtonClick}>
          Generate teams
        </button>
      </div>
      <div>
        {teams && (
          <ul>
            {teams.map((team, index) => (
              <div>
                <li key={team.id}>
                  <div>Team {index + 1}</div>
                  <div>
                    Tot. rating:{' '}
                    {team.participants.reduce(
                      (total, p) => total + p.rating,
                      0
                    )}
                  </div>
                  <div>
                    Number of participants:
                    {` ${team.participants.length.toString()}`}
                  </div>
                </li>
                <ul>
                  {team.participants.map((p) => (
                    <li key={p.name}>
                      {p.name} ({p.rating})
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
