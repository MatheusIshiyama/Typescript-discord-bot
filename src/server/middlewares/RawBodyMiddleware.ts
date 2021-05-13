import { Request, Response, NextFunction} from 'express';

export const RawBodyMiddleware = (request: Request, response: Response, next: NextFunction) => {
    request.rawBody = '';
    request.setEncoding('utf-8');

    request.on('data', (chunck) => request.rawBody += chunck);

    request.on('end', () => next());
}