import Card from "./components/Card";
import Button from "./components/Button";
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";

function App(){
  return (
    <div className="app">
      <h1>Team Members</h1>

      <Card>
        <Avatar name="Keertana" />
        <h2>Keertana</h2>
        <Badge text="Developer" />
        <p>Learning React</p>
        <Button text="View Profile" />
      </Card>
    </div>
  );
}
export default App;
