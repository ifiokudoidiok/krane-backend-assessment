import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { IPost } from 'src/interfaces';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('api/post')
  async getAllPosts(): Promise<IPost[]> {
    return this.postService.getPosts();
  }

  @Get('api/post/:id')
  async getPostById(@Param('id') id: string): Promise<IPost> {
    return this.postService.getPostById({ id: Number(id) });
  }

  @Post('api/post')
  async createPost(
    @Body() postData: { title: string; textBody: string },
  ): Promise<IPost> {
    const { title, textBody } = postData;
    return this.postService.createPost({
      title,
      textBody,
    });
  }

  @Put('api/post/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() postData: { title: string; textBody: string },
  ): Promise<IPost> {
    const { title, textBody } = postData;
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: {
        title,
        textBody,
      },
    });
  }

  @Delete('api/post/:id')
  async deletePost(@Param('id') id: string): Promise<IPost> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
