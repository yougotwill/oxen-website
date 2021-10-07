interface Props {
  children: string;
}

export function SectionTitle(props: Props) {
  const { children } = props;

  return (
    <div className="flex justify-center mb-3 text-xl text-primary">
      {children}
      <div className="absolute w-10 h-1 mt-8 rounded-full bg-secondary"></div>
    </div>
  );
}
