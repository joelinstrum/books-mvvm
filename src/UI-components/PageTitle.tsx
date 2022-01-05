type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default PageTitle;
