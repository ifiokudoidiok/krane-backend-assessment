import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

const PORT = 7777;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const dbService: PrismaService = app.get(PrismaService);
  await app.listen(PORT);
  dbService.enableShutdownHooks(app);
  console.log('listening on', PORT);
}
bootstrap();
