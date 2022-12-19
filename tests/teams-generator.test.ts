import { Participant } from '../src/Participant';
import { Team } from '../src/Team';
import { findTeamWithLowestTotalRating } from '../src/teams-generator';

describe('findTeamWithLowestTotalRating', () => {
  it('should return the team with the lowest total rating', () => {
    const team1 = new Team(0);
    team1.add(new Participant('Alice', 3));

    const team2 = new Team(1);
    team2.add(new Participant('Bob', 5));

    const team3 = new Team(2);
    team3.add(new Participant('Charlie', 1));

    const team4 = new Team(3);
    team4.add(new Participant('Dave', 4));

    const teams = [team1, team2, team3, team4];

    const minTeam = findTeamWithLowestTotalRating(teams);
    expect(minTeam).toEqual(teams[2]);
  });
});
