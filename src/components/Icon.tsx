interface Props {
  img: string;
  className?: string;
  alt?: string;
}

const Icon = ({ img, className, alt }: Props) => {
  return (
    <img
      src={`/icons/${img}.png`}
      className={className}
      width={16}
      height={16}
      alt={alt}
    />
  );
};

export default Icon;
