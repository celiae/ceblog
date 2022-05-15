import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex pt1">
      <Image
        src={picture}
        className=""
        alt={name}
        width={40}
        height={40}
        objectFit="cover"
        quality={100}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
