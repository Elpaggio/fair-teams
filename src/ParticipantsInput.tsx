import React, { useRef, useState } from 'react';
import { Participant } from './Participant';
import { ParticipantsList } from './ParticipantsList';

function parseParticipants(input: string): Participant[] {
  // Split the input text into lines
  const lines = input.split('\n');

  // Parse each line as a participant
  const participants = lines.map((line) => {
    const [name, rating] = line.split(',');
    return new Participant(name.trim(), Number(rating.trim()));
  });

  return participants;
}

export const ParticipantsInput = () => {
  const [parsedParticipants, setParsedParticipants] = useState<
    Participant[] | null
  >(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  function handleSetParticipantsButtonClick() {
    if (!inputRef.current) {
      throw Error('No input');
    }

    const newParticipants = parseParticipants(inputRef.current.value);
    setParsedParticipants(newParticipants);
  }

  return (
    <div className="flex flex-col justify-center sm:max-w-2xl p-4 rounded-lg text-ochre-100 w-full text-ochre-900 space-y-4">
      <div className="flex-col bg-green-200 p-4 rounded-lg w-full space-y-4 drop-shadow-lg">
        <div className="">
          <textarea
            placeholder="Enter participants here as comma separated values [Name, Rating]"
            ref={inputRef}
            id="participants-input"
            rows={5}
            className="block w-full p-2 bg-teal-200 rounded-lg p-2 focus:ring focus:ring-teal-300 transition ease-in-out drop-shadow-lg"
          />
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={handleSetParticipantsButtonClick}
            className="bg-teal-500 rounded inline-block px-3 py-1.5 hover:bg-teal-400 hover:shadow-lg font-bold text-white ring-2 ring-white drop-shadow-lg"
          >
            Set participants
          </button>
        </div>
      </div>

      {parsedParticipants && (
        <div className="bg-teal-200 p-4 rounded-lg w-full space-y-4 drop-shadow-lg">
          <ParticipantsList participants={parsedParticipants} />
        </div>
      )}
    </div>
  );
};
