import { Participant } from './Participant';
import { Team } from './Team';

// Find the team with the lowest total rating
export function findTeamWithLowestTotalRating(teams: Team[]): Team {
  let minTeamIndex = 0;
  let minTeamRating = teams[0].rating;

  for (let i = 0; i < teams.length; i += 1) {
    const teamRating = teams[i].rating;
    if (teamRating < minTeamRating) {
      minTeamIndex = i;
      minTeamRating = teamRating;
    }
  }

  return teams[minTeamIndex];
}

export function createTeams(
  participants: Participant[],
  numTeams: number
): Array<Team> {
  // Sort participants by their ratings in descending order
  const participantsByRating = participants
    .slice()
    .sort((a, b) => b.rating - a.rating);

  // Initialize an array to store the teams
  const teams: Array<Team> = [];
  for (let i = 0; i < numTeams; i += 1) {
    teams.push(new Team(String.fromCharCode(65 + i)));
  }

  // Iterate through the participants and assign each one to the team
  // with the lowest total rating
  participantsByRating.forEach((participant) => {
    // Find the team with the lowest total rating
    const minTeam = findTeamWithLowestTotalRating(teams);

    // Assign the participant to the team with the lowest total rating
    minTeam.add(participant);
  });

  return teams;
}
