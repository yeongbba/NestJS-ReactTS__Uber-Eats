import { JwtModuleOptions } from './jwt.interfaces';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTIONS } from './jwt.constants';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {}
  sign(userId: number): string {
    return jwt.sign({ id: userId }, this.options.privateKey);
  }
}