import type { IUserBloack } from "@/types/user/user";

interface IProps {
  user: IUserBloack;
}
const UserBlock = ({ user }: IProps) => {
  const { uid, displayName, description } = user;
  return (
    <section className="section pb-0!">
      <div className="container ">
        <div className="grid gap-6 justify-items-center text-center tablet:flex tablet:items-center tablet:text-start desktop:w-147.5! desktop:justify-items-start">
          <img
            src={`https://res.cloudinary.com/dizg6rj7g/image/upload/v1769524892/${uid}`}
            alt={displayName}
            className="aspect-square w-50 rounded-full"
          />
          <div className="">
            <h3 className="font-heading text-gray-900 text-xl font-bold desktop:text-[32px]">
              {displayName}
            </h3>
            {description && (
              <p className="mt-2 font-main tablet:m-0 desktop:text-lg">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBlock;
