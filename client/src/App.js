import './App.css';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import QuestionGrid from './components/QuestionGrid';
import { TestComp } from './components/TestComp';
import ConfirmPage from './components/ConfirmPage';

import { Segment, Image } from 'semantic-ui-react';

import { connect } from 'react-redux';

function App({ comp }) {
  let temp;

  console.log(comp);

  switch (comp) {
    case 'start':
      console.log('asdfasdfasdf');
      temp = <TestComp></TestComp>;
      break;
    case 'confirm':
      temp = <ConfirmPage></ConfirmPage>;
      break;
    default:
      temp = <QuestionGrid />;
  }

  return (
    <div className='App'>
      <div id='artificial-background'>
        <div
          id='middle'
          className='center'
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {temp}
          <div id='placeholder'>
            <p>
              asdfasdfasdfa a a a a a a a a a a a a aa a a a a a
              aaaaaaaaaaasdfasdfasdfasfsfsfdsafsdfsfasfd"
            </p>
          </div>
          <Segment id='bottomBar'>
            <Image
              src='https://static.onecms.io/wp-content/uploads/sites/6/2019/11/revenge-of-the-sith-2000.jpg'
              avatar
            ></Image>
            Dr. Obi-wan Kenobi
          </Segment>
        </div>
      </div>
    </div>
  );
}
export default connect(null, null)(App);
