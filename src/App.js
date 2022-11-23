import './App.scss';

function App() {
	
  return (
       <>
         <div className="header">
            <h3>MealBuddy</h3>
            <span>--logo options to be placed here--</span>
            
         </div>
      <div className="App">
        <div className="sidebar">
          <p className="sidebar-text">Menu</p>
          <br />
          <p className="sidebar-text">Grocery List</p>
          <br />
          <p className="sidebar-text">Settings</p>

        </div>
        <div className="mainpage">
          <h1>Home Page "/"</h1>
          <p>Welcome to the Visual Playground. Currently all items render in this one page (just scroll down). Feel free to add any mock-ups for styling of any component you're working on. Please add new component mock-ups in the App.js file in the return section with a label. Please add all styling to App.css</p>
        </div>
      </div> 

      <section className="sign-up">
        <h1>Sign-up</h1>
  
      </section>

      <section className="sign-in">
        <h1>Sign-in</h1>
      </section>

      <section className="logged-in-view">
        <h1>User logged in view to replace log-in sign-up once user is signed-in</h1>
        <p>Welcome Back, Username!</p>
      </section>

      <section className="menu-table">
        <h1>Menu - full Table</h1>
          <p>Table with all recipes</p>
          <table>
        <tr>
          <th>{ /* empty on purpose - DAYS ROW */ } </th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
        <td>Breakfast</td>
          <td>Bfast1</td>
          <td>Bfast2</td>
          <td>Bfast3</td>
          <td>Bfast4</td>
          <td>Bfast5</td>
          <td>Bfast6</td>
          <td>Bfast7</td>
        </tr>
        <tr>
        <td>Snack</td>
          <td>Snk1</td>
          <td>Snk2</td>
          <td>Snk3</td>
          <td>Snk4</td>
          <td>Snk5</td>
          <td>Snk6</td>
          <td>Snk7</td>
        </tr>
        <tr>
          <td>Lunch</td>
          <td>lnch1</td>
          <td>lnch2</td>          
          <td>lnch3</td>
          <td>lnch4</td>
          <td>lnch5</td>
          <td>lnch6</td>
          <td>lnch7</td>
        </tr>
        <tr>
          <td>Supper</td>
          <td>spr1</td>          
          <td>spr2</td>
          <td>spr3</td>
          <td>spr4</td>
          <td>spr5</td>
          <td>spr6</td>
          <td>spr7</td>
        </tr>
      </table>
      </section>

      <section className="groc-list">
        <h1>Grocery List</h1>
          <>
          <br />
          <br />
          </>

      </section>
      <section className="pop-up-prompt">
        <h1>Grocery List pop-up prompt upon 'save' to text user custom list</h1>
          <>
            <br />
            <br />
          </>
      </section>
      <section className="settings-page">
        <h1>Settings - account and dietary settings</h1>

          <>
            <br />
            <br />
          </>
      </section>

      <section className="next-comp0">
        <h1>next component</h1>

        <>
            <br />
            <br />
          </>

      </section>

      <section className="next-comp1">
        <h1>next component</h1>

        <>
            <br />
            <br />
          </>

      </section>

      <section className="next-comp2">
        <h1>next component</h1>
        <>
            <br />
            <br />
          </>
      </section>

    </>
  );
}


export default App;


