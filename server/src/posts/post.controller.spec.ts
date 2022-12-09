import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './post.service';

const mockData = {
  id: 1,
  title: 'Test title',
  textBody: 'Test textBody',
  created: new Date().toDateString(),
};

const mockPostService = {
  createPost: jest.fn(() => mockData),
  getPosts: jest.fn(() => [mockData]),
};

describe('PostController', () => {
  let postController: PostController;

  beforeEach(async () => {
    const post: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService],
    })
      .overrideProvider(PostService)
      .useValue(mockPostService)
      .compile();

    postController = post.get<PostController>(PostController);
  });

  describe('Post Controller', () => {
    it('should be defined', () => {
      expect(postController).toBeDefined();
    });
    it('should create new post', async () => {
      expect(await postController.createPost(mockData)).toEqual(mockData);
    });
    it('should get all posts', async () => {
      expect(await postController.getAllPosts()).toEqual([mockData]);
    });
  });
});
