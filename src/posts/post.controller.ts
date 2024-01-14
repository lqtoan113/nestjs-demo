import { Controller, UseInterceptors, ClassSerializerInterceptor } from "@nestjs/common";

@Controller('/post')
@UseInterceptors(ClassSerializerInterceptor)
export class PostController{
    
}