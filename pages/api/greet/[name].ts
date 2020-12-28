import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { failReturn } from '../../../helpers/utilityFunctions';
import { IApiResponse } from '../../../interfaces/api';

const handler = (_req: NextApiRequest, res: NextApiResponse<IApiResponse<string>>): void => {
  const {
    query: { name },
  } = _req;

  try {
    if (typeof name !== 'string') {
      throw new Error('Please specify a name as text');
    }

    const response = {
      success: true,
      message: `Successfully generated greeting for ${name}`,
      data: `Hello, ${name}.`,
    };

    res.status(StatusCodes.OK).json(response);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(failReturn('Something went wrong! crying_cat_face.'));
  }
};

export default handler;
