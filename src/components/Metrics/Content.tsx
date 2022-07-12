import clsxm from '@/lib/clsxm';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function Content(props: Props) {
  return (
    <article
      className={clsxm(
        props.className,
        'flex',
        'items-center',
        'justify-start',
        'sm:justify-center'
        // 'xl:justify-start'
      )}
    >
      {props.children}
    </article>
  );
}
