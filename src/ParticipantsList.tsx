import React, { useEffect, useState } from 'react';
import { createTeams } from './teams-generator';
import { Team } from './Team';
import { Participant } from './Participant';

export const ParticipantsList = ({
  participants,
}: {
  participants: Participant[];
}) => {
  const [selectedParticipants, setSelectedParticipants] = useState<
    Participant[]
  >([]);

  const [teams, setTeams] = useState<Team[]>([]);
  const [numberOfTeams, setNumberOfTeams] = useState(2);

  function handleSelectedParticipantChange(participant: Participant) {
    // Add or remove the participant from the list of selected participants,
    // depending on whether they are already in the list
    if (selectedParticipants.includes(participant)) {
      setSelectedParticipants(
        selectedParticipants.filter((p) => p.name !== participant.name)
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

  useEffect(() => {
    setSelectedParticipants(participants);
  }, [participants]);

  return (
    <div className="flex-col space-y-4">
      <div className="flex-col bg-teal-400 rounded shadow-lg p-4">
        <div>
          Number of participants selected: {selectedParticipants.length}
        </div>
        <ul>
          {participants.map((participant) => (
            <li key={participant.name}>
              <input
                type="checkbox"
                checked={
                  selectedParticipants.find(
                    (e) => e.name === participant.name
                  ) != null
                }
                onChange={() => handleSelectedParticipantChange(participant)}
              />
              <div className="inline-block ml-2">
                {participant.name} ({participant.rating})
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex-col">
          <label className="block" htmlFor="numberOfTeams">
            Number of teams:
          </label>
          <select
            id="numberOfTeams"
            value={numberOfTeams}
            onChange={handleNumberOfTeamsChange}
            className="leading-tight"
          >
            {/* Generate options for the dropdown */}
            {Array.from(Array(20).keys()).map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={handleGenerateTeamsButtonClick}
          className="bg-teal-500 mt-2 rounded inline-block px-3 py-1.5 hover:bg-teal-400 hover:shadow-lg font-bold text-white ring-2 ring-teal-200 drop-shadow-lg"
        >
          Generate teams
        </button>
      </div>
      <div>
        {teams && (
          <ul>
            {teams.map((team, index) => (
              <div className="bg-green-200 rounded shadow-lg p-2">
                <div className="bg-teal-300 space-y-2 rounded shadow-lg">
                  <li
                    key={team.id}
                    className="bg-teal-300 rounded shadow-lg p-2"
                  >
                    <div className="text-lg font-bold">
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
                    </div>
                  </li>
                  <ul>
                    {team.participants.map((p) => (
                      <li key={p.name} className="pl-2">
                        {p.name} ({p.rating})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
