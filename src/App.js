import Header from "./components/header.jsx";
import Services from "./components/services.jsx";
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid container item md={6}>
          <Services />
        </Grid>
        <Grid container item md={6}>
          <h1>yoo</h1>
        </Grid>
        
      </Grid>       
      
    </div>
  );
}

export default App;
