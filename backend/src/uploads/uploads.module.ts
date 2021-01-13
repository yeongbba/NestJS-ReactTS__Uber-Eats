import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigService],
  controllers: [UploadsController],
})
export class UploadsModule {}
