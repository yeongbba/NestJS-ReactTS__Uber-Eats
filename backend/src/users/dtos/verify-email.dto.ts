import { Verification } from './../entities/verification.entity';
import { CoreOutput } from './../../common/dtos/output.dto';
import { ObjectType, InputType, PickType } from '@nestjs/graphql';

@ObjectType()
export class VerifyEmailOutput extends CoreOutput {}

@InputType()
export class VerifyEmailInput extends PickType(Verification, ['code']) {}
