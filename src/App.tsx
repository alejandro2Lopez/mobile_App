import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Dish from './pages/Dishes/Dish';
import AddToCar from './pages/AddToCars/AddToCar';
import Home from './pages/home/Home';
import Principal from './pages/principal/Principal'
import FirstTime from './components/login/LogIn'
import Again from './components/singup/SingUp'

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/Home" />
            </Route>

            <Route path="/Dishes" component={Dish} exact={true}></Route>
            <Route path="/home" component={Home} exact={true}></Route>
            <Route path="/principal" component={Principal} exact={true}></Route>
            <Route path="/login" component={FirstTime} ></Route>
            <Route path="/singup" component={Again} exact={true} ></Route>
            <Route path="/Orders" component={AddToCar} exact={true}></Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
