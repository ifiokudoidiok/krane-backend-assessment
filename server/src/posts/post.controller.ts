import { Controller, Get, Body, Post } from '@nestjs/common';
import { IPost } from 'src/interfaces';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('api/post')
  async getAllPosts(): Promise<IPost[]> {
    return this.postService.getPosts();
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
}
