import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { repeat } from 'lodash';
import { failReturn } from '../../../../helpers/utilityFunctions';
import { IApiResponse } from '../../../../interfaces/api';

const handler = (_req: NextApiRequest, res: NextApiResponse<IApiResponse<string>>): void => {
  const {
    query: { name, count },
  } = _req;

  try {
    if (typeof name !== 'string') {
      throw new Error('Please specify a name as text');
    }

    const repeatCount = parseInt(count as string, 10);

    const response = {
      success: true,
      message: `Successfully generated greeting for ${name}`,
      data: repeat(`Hello, ${name}. `, repeatCount),
    };

    res.status(StatusCodes.OK).json(response);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(failReturn('Something went wrong! crying_cat_face.'));
  }
};

export default handler;
