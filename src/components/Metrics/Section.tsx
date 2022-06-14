import clsxm from '@/lib/clsxm';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function Section(props: Props) {
  return (
    <article
      className={clsxm(
        props.className,
        'text-left',
        'sm:text-center',
        'md:text-center'
        // Re-enable once we can display integrations
        // 'xl:text-left'
      )}
    >
      {props.children}
    </article>
  );
}
