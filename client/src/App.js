import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import { TestComp } from './components/TestComp';
import ConfirmPage from './components/ConfirmPage';
import QuestionBlock from './components/QuestionBlock';
import ReviewBlock from './components/ReviewBlock';

import { Segment, Image, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';

function App({ comp, ping }) {
  let visible_comp;

  console.log(comp);

  switch (comp) {
    case 'start':
      visible_comp = <TestComp></TestComp>;
      break;
    case 'confirm':
      visible_comp = <ConfirmPage></ConfirmPage>;
      break;
    case 'review':
      visible_comp = <ReviewBlock />;
      break;
    default:
      visible_comp = <QuestionBlock />;
  }

  return (
    <div className='App'>
      <div id='artificial-background'>
        <Segment style={{ width: '100%' }} id='topBar' className='bars'>
          <Header style={{ color: 'white' }} size={'large'}>
            <Image
              src='https://i.pinimg.com/originals/db/a9/cf/dba9cfe0c637d9a2427893359233d261.jpg'
              avatar
            ></Image>
            HIPPO Survey
          </Header>
        </Segment>
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
          {visible_comp}
        </div>
      </div>
      <Segment style={{ width: '100%' }} id='bottomBar' className='bars'>
        <Segment inverted color={'orange'} style={{ float: 'right' }}>
          <Image
            src='https://static.onecms.io/wp-content/uploads/sites/6/2019/11/revenge-of-the-sith-2000.jpg'
            avatar
          ></Image>
          Dr. Marc Safran
        </Segment>
      </Segment>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ping: state.blocks.ping,
  };
};

export default connect(mapStateToProps, {})(App);
