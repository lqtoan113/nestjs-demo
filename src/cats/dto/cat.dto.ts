import { IsNotEmpty, IsNumber,IsDate } from 'class-validator';
export class CreateCatDTO {
    @IsNotEmpty()
    name: string;
    @IsNumber()
    weight: number;
    // @IsDate()
    // createDate: Date;
    // @IsDate()
    // updateDate: Date;
    isActive: boolean;
    // Tạo tất cả thuột tính trong table
}
export class UpdateCatDTO {
    @IsNotEmpty()
    name: string;
    @IsNumber()
    weight: number;
    // @IsDate()
    // updateDate: Date;
    isActive: boolean;
    // Chỉ sửa 1 vài thuột tính
}

