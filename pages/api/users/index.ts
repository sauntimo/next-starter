import { NextApiRequest, NextApiResponse } from 'next';
import StatusCodes from 'http-status-codes';
import failReturn from '../../../helpers/utilityFunctions';
import { User } from '../../../interfaces';
import { IApiResponse } from '../../../interfaces/api';
import sampleUserData from '../../../utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse<IApiResponse<User[]>>): void => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data');
    }

    const response = {
      success: true,
      message: `retrieved ${sampleUserData.length} users`,
      data: sampleUserData,
    };

    res.status(StatusCodes.OK).json(response);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(failReturn('Unable to return users'));
  }
};

export default handler;
