import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { throwError } from 'rxjs';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.prisma.users.create({
      data: createUserDto,
    });

    return {
      ...user,
      password: undefined,
    };
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.users.findMany();
  }

  async findOne(id: string): Promise<UserEntity> {
    return await this.prisma.users.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const existingUser = await this.prisma.users.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    const userUpdated = await this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });

    return userUpdated;
  }

  async remove(id: string) {
    const existingUser = await this.prisma.users.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    return await this.prisma.users.delete({
      where: { id },
    });
  }
}
