import { Users } from '@prisma/client';

export class UserEntity implements Users {
  name: string;
  id: string;
  email: string;
  password: string;
  phone: string;
  profile_image_path: string;
  role_id: string;
  created_at: Date;
  updated_at: Date;
}
