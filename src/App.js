import "./App.css";

const api = {
  key : "6e9c6667a6257f375fb4cca660dcb2e1",
  base: "api.openweathermap.org/data/2.5/",
};

var today = new Date();
var date  = 
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function App() {
  return (
    <div className="App">
      <main>
        <div className="card">
          <div className="wrapper">
            <div className = "search-box">
              <input
                type        = "text"
                className   = "search-bar"
                placeholder = "Search..."
              />
            </div>
            <div className="information">
              <div className = "name">Pune</div>
              <div className = "temp">29°c</div>
              <div className = "date">{date}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
