import { create } from "zustand";
import type {  stats, match } from "@/types/matchesTypes";


interface State {
    matches: match[];
    setMatches: (match: match) => void;
    userStats: stats;
    setUserStats: (stats: stats) => void;
}

export const useStats = create<State> ((set) => ({
    matches: [],
    setMatches: (match: match) => {
        set({ matches: [match] })
    },
    userStats: {
        matchesCount: 0,
        favouriteTeam: "",
        mufaPercentage: 0,
        victoryCount: 0,
        victoryPercentage: 0,
        defeatCount: 0,
        defeatPercentage: 0,
        drawCount: 0,
        drawPercentage: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        allMatches: 0,
    },
    setUserStats: (stats: stats) => {
        set({ userStats: stats })
    }
}))