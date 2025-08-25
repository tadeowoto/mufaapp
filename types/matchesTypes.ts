
export type match = {
    homeTeam: string,
    awayTeam: string,
    homeTeamScore: number,
    awayTeamScore: number,
    date: string,
    stadium: string,
    dateTime: string,
    defeat: boolean
}

export type stats = {
    matchesCount: number,
    favouriteTeam: string,
    mufaPercentage: number,
    victoryCount: number,
    victoryPercentage: number,
    defeatCount: number,
    defeatPercentage: number,
    drawCount: number,
    drawPercentage: number,
    goalsFor: number,
    goalsAgainst: number,
    allMatches: number
}