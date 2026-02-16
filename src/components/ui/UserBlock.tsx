import type { IUser } from "@/types/user/user";

interface IProps {
  user: IUser;
}
const UserBlock = ({ user }: IProps) => {
  const { imageUrl, displayName, description } = user;
  return (
    <section className="section pb-0!">
      <div className="m-auto mobile:w-77.75 tablet:w-176 desktop:w-328">
        <div className="grid gap-6 justify-items-center text-center tablet:flex tablet:items-center tablet:text-start desktop:w-147.5! desktop:justify-items-start">
          <img
            src={imageUrl}
            alt={displayName}
            className="aspect-square w-50 rounded-full object-cover"
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
