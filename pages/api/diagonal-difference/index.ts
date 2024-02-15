import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const input = [[3], [-60, 2, 3], [4, 5, 6], [9, 8, 9]];
  const [len, ...rest] = input;

  let firstDiagonalTotal = 0;
  let secondDiagonalTotal = 0;

  let countFirst = 0;
  let countSecond = len[0] - 1;
  for (let i = 0; i < rest.length; i++) {
    const firstDiagonalValue = rest[i][countFirst];
    const secondDiagonalValue = rest[i][countSecond];
    firstDiagonalTotal += firstDiagonalValue;
    secondDiagonalTotal += secondDiagonalValue;
    countFirst++;
    countSecond--;
  }

  return res.status(200).json({
    firstDiagonal: firstDiagonalTotal,
    secondDiagonal: secondDiagonalTotal,
    difference: Math.abs(firstDiagonalTotal - secondDiagonalTotal),
  });
}
