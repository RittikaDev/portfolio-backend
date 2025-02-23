import { Request, Response } from 'express';

import httpStatus from 'http-status-codes';
const notFound = (req: Request, res: Response) => {
  const message = 'Not Found';
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: httpStatus.NOT_FOUND,
    message,
  });
};

export default notFound;
