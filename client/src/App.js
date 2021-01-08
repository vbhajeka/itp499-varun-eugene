import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './index.css';

import { TestComp } from './components/TestComp';
import ConfirmPage from './components/ConfirmPage';
import QuestionBlock from './components/QuestionBlock';
import ReviewBlock from './components/ReviewBlock';
import { ImgComp } from './components/ImgComp';

import { Segment, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
    case 'img':
      visible_comp = <ImgComp />;
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
        <Link to='/start'>
          <Segment
            inverted
            color={'orange'}
            style={{ float: 'left', width: '15%', textAlign: 'center' }}
          >
            Logout
          </Segment>
        </Link>
        <Segment
          inverted
          color={'blue'}
          style={{
            float: 'right',
            width: '15%',
            verticalAlign: 'middle',
            textAlign: 'center',
            marginTop: 0,
          }}
        >
          <Image
            style={{
              float: 'left',
              height: '2em',
              width: '2em',
              textAlign: 'center',
              verticalAlign: 'middle',
              marginTop: 0,
            }}
            src='https://ortho.stanford.edu/sports-medicine/marc-safran-profile/_jcr_content/main/panel_builder/panel_1/image.img.320.high.jpg/marc-safran.jpg'
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
