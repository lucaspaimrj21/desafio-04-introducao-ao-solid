import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userAdmin = this.usersRepository.findById(user_id);

    if (!userAdmin) {
      throw new Error("User does not exists!");
    }

    this.usersRepository.turnAdmin(userAdmin);
    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
