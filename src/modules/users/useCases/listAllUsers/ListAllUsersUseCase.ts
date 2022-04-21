import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.findById(user_id);

    if (!users || users.admin === false) {
      throw new Error("User does not exists or user is not an admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
