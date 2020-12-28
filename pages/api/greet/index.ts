import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import failReturn from '../../../helpers/utilityFunctions';
import { IApiResponse } from '../../../interfaces/api';
import sampleUserData from '../../../utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse<IApiResponse<string>>): void => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data');
    }

    const response = {
      success: true,
      message: 'supply a name: GET /api/greet/:name',
      data: 'Nothing to see here',
    };

    res.status(StatusCodes.OK).json(response);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(failReturn('Something went wrong! crying_cat_face.'));
  }
};

export default handler;
