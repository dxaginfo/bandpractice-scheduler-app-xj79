import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface JwtPayload {
  id: string;
}

// Extend the Request interface to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

      // Get user from the token
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: { id: true },
      });

      if (!user) {
        res.status(401);
        throw new Error('Not authorized, user not found');
      }

      req.user = { id: user.id };
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
};

export const isBandMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bandId = req.params.bandId || req.body.bandId;
    
    if (!bandId) {
      res.status(400);
      throw new Error('Band ID is required');
    }

    // Check if user is a member of the band
    const membership = await prisma.bandMember.findFirst({
      where: {
        bandId,
        userId: req.user?.id,
      },
    });

    if (!membership) {
      res.status(403);
      throw new Error('Not authorized, not a band member');
    }

    next();
  } catch (error) {
    next(error);
  }
};

export const isBandAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bandId = req.params.bandId || req.body.bandId;
    
    if (!bandId) {
      res.status(400);
      throw new Error('Band ID is required');
    }

    // Check if user is an admin or leader of the band
    const membership = await prisma.bandMember.findFirst({
      where: {
        bandId,
        userId: req.user?.id,
        role: { in: ['admin', 'leader'] },
      },
    });

    if (!membership) {
      res.status(403);
      throw new Error('Not authorized, admin privileges required');
    }

    next();
  } catch (error) {
    next(error);
  }
};