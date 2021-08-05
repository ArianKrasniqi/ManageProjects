interface IUser {
  id: number
  name: string
  email: string
}

type UsersState = {
  users: IUser[]
}

type UserAction = {
  type: string
  user: IUser
}

type UserDispatchType = (args: UserAction) => UserAction
