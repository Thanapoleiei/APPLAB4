import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Home from './Home';
import Select from './Select';
import A from './A';
import B from './B';
import C from './C';
import D from './D';
import E from './E';
import F from './F';
import G from './G';
import Am from './Am';
import Bm from './Bm';
import Cm from './Cm';
import Dm from './Dm';
import Em from './Em';
import Fm from './Fm';
import Gm from './Gm';

const Test = createStackNavigator({

  Home: { screen: Home },
  Select: { screen: Select },
  A: { screen: A},
  B: { screen: B},
  C: { screen : C},
  D: { screen : D},
  E: { screen : E},
  F: { screen : F},
  G: { screen : G},
  Am: { screen : Am},
  Bm: { screen : Bm},
  Cm: { screen : Cm},
  Dm: { screen : Dm},
  Em: { screen : Em},
  Fm: { screen : Fm},
  Gm: { screen : Gm},
});

const App = createAppContainer(Test);


export default App;