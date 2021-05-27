
import styled from 'styled-components'
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import moment from 'moment';

function Message({ user, message }) {

  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;

  return (
    <Container>
      <TypeOfMessage>{message.message}
      <Timestamp>{message.timestamp ? moment(message.timestamp).format('LT') : '...'}</Timestamp>
      </TypeOfMessage>
    </Container>
  )
}

export default Message

const Container = styled.div`
`;

const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;

  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
  -webkit-box-shadow: 0px 2px 6px #B2B2B2;
  background-color: #fff0a0;
    background-image: -webkit-linear-gradient(top, hsla(0,0%,100%,.5), hsla(0,0%,100%,0));
    background-image:    -moz-linear-gradient(top, hsla(0,0%,100%,.5), hsla(0,0%,100%,0));
    background-image:     -ms-linear-gradient(top, hsla(0,0%,100%,.5), hsla(0,0%,100%,0));
    background-image:      -o-linear-gradient(top, hsla(0,0%,100%,.5), hsla(0,0%,100%,0));
    background-image:         linear-gradient(top, hsla(0,0%,100%,.5), hsla(0,0%,100%,0));
    border-radius: 5px;
    box-shadow: inset 0 1px 1px hsla(0,0%,100%,.5),
                3px 3px 0 hsla(0,0%,0%,.1);
    text-shadow: 0 1px 1px hsla(0,0%,100%,.5);

  
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
  text-align: left;
`;

const Receiver = styled(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`

const Timestamp = styled.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;