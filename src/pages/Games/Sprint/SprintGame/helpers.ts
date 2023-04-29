import { ISprintResult, SprintGameAnswer, SprintGamePoints } from '@/types';

export const getResult = (
  answers: SprintGameAnswer[],
  gamePoints: SprintGamePoints[]
): ISprintResult[] => {
  return answers.map((item, index) => ({
    ...item,
    points: gamePoints[index],
  }));
};
