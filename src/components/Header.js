import Button from './Button';
const Header = ({ onClick }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Add" onClick={onClick}></Button>
    </header>
  );
};
export default Header;
