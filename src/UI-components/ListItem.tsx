type Props = {
  title: string;
  id: string | number;
  pageCount: string | number;
  subtitle?: string | number;
  handleClick?: () => void;
};

const ListItem = ({ title, id, subtitle, pageCount, handleClick }: Props) => {
  return (
    <tr onClick={handleClick} style={{ cursor: "pointer", marginBottom: 14 }}>
      <td>{id}</td>
      <td>
        {title} {subtitle && <p className="book__list_subtitle">{subtitle}</p>}
      </td>
      <td>{pageCount}</td>
    </tr>
  );
};

export default ListItem;
