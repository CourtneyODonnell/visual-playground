import './App.scss';

const thumbnail = <img className="photo" src="https://iili.io/H2kPjtt.png" alt="thumbnail" />;

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
          
          <p className="sidebar-text">Grocery List</p>
          
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
        <img className="photo" src="https://iili.io/H2kPXAN.png" alt="Screen Shot 2022 11 23 at 7.01.55 PM" border="0" hei></img>
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
        <td className="meal-title">Breakfast</td>
          <td>
            <p>Bfast1</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast2</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast3</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast4</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast5</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast6</p>
            {thumbnail}
          </td>
          <td>
            <p>Bfast7</p>
            {thumbnail}
          </td>

        </tr>
        <tr>
        <td className="meal-title">Snack</td>
          <td>
            <p>Snack1</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack2</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack3</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack4</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack5</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack6</p>
            {thumbnail}
          </td>
          <td>
            <p>Snack7</p>
            {thumbnail}
          </td>

        </tr>
        <tr>
          <td className="meal-title">Lunch</td>
          <td>
            <p>lunch1</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch2</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch3</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch4</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch5</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch6</p>
            {thumbnail}
          </td>
          <td>
            <p>lunch7</p>
            {thumbnail}
          </td>

        </tr>
        <tr>
          <td className="meal-title">Supper</td>
          <td>
            <p>supper1</p>
            {thumbnail}
          </td>          
          <td>
            <p>supper2</p>
            {thumbnail}
          </td>
          <td>
            <p>supper3</p>
            {thumbnail}
          </td>
          <td>
            <p>supper4</p>
            {thumbnail}
          </td>
          <td>
            <p>supper5</p>
            {thumbnail}
          </td>
          <td>
            <p>supper6</p>
            {thumbnail}
          </td>
          <td>
            <p>supper7</p>
            {thumbnail}
          </td>
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


