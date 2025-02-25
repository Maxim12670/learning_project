import { use } from "react";

interface IUserCard {
  name: string;
  gender: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserCard = ({ user }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const context: any = use(user);
  return (
    <>
      <h2>name: {context}</h2>
    </>
  );
};

export default UserCard;
