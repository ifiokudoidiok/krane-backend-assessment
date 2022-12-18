import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostService {
  constructor(private dbService: PrismaService) {}

  async getPosts(): Promise<any | Post> {
    return this.dbService.post.findMany();
  }
  async getPostById(id: Prisma.PostWhereUniqueInput): Promise<any | Post> {
    return this.dbService.post.findUnique({ where: id });
  }

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.dbService.post.create({ data });
  }

  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    const { where, data } = params;
    return this.dbService.post.update({ data, where });
  }

  async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.dbService.post.delete({ where });
  }
}
