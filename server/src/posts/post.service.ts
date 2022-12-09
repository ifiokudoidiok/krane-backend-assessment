import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostService {
  constructor(private dbService: PrismaService) {}

  async getPosts(): Promise<any | Post> {
    return this.dbService.post.findMany();
  }

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.dbService.post.create({ data });
  }
}
