import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './posts/post.controller';
import { PostService } from './posts/post.service';
import { PrismaService } from './prisma.service';
@Module({
  imports: [],
  controllers: [AppController, PostController],
  providers: [AppService, PostService, PrismaService],
})
export class AppModule {}
