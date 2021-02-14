import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
const Routes = () => {

  return (
    <Switch>
      <Route path='/' render={() => <Home/> } />
      {/* <Route path='/' render={() => <div></div>} />
      <Route path='/' render={() => <div></div>} />
      <Route path='/' render={() => <div></div>} /> */}
    </Switch>
  )

}

export default Routes