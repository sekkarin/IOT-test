import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Res,
  InternalServerErrorException,
  ForbiddenException,
} from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Webhooks')
@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post()
  create(@Body() createWebhookDto: CreateWebhookDto) {
    return this.webhooksService.create(createWebhookDto);
  }

  @Get()
  findAll() {
    return this.webhooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webhooksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebhookDto: UpdateWebhookDto) {
    return this.webhooksService.update(+id, updateWebhookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webhooksService.remove(+id);
  }
  @Post('publish')
  public(@Body() body) {
    console.log(body);

    // return {};
    throw new InternalServerErrorException({
      result: 'ignore', // options: "allow" | "deny" | "ignore"
      is_superuser: false,
    });
  }
  @HttpCode(200)
  @Post('/connection')
  connection(@Body() body) {
    console.log(body);
    
    return {};
  }


  @HttpCode(200)
  @Post('auth')
  auth(@Body() body) {
    console.log(body);
    if (body.username == 'user1' || body.username == 'user2') {
      return {
        result: 'allow', // options: "allow" | "deny" | "ignore"
        is_superuser: true, // options: true | fals, default value: false
      };
    } else {
      throw new InternalServerErrorException({
        result: 'ignore', // options: "allow" | "deny" | "ignore"
        is_superuser: false,
      });
    }
  }
  
  @HttpCode(200)
  @Post('authorization')
  authorization(@Body() body) {
    console.log("authorization call");
    
    console.log(body);
    if (body.username == 'user1' || body.username == 'user2') {
      throw new ForbiddenException({
        result: 'deny',
      });
      // return {
      //   result: 'ignore', // options: "allow" | "deny" | "ignore"
      // };
    }
  }
}
