interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function CenteredContent(props: Props) {
  return (
    <div className='relative w-full'>
      <div
        className={`mx-auto w-full max-w-[1320px] px-5 md:px-10 ${
          props.className || ''
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
