import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import { theme } from '../../global/styles/theme';
import { Container } from '../Login/styles';
import { styles } from './styles';

// Interface
interface IMessage {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
}

export default function ChatRoomScren() {
  // Onde armazena as mensagens
  const [messages, setMessages] = useState<IMessage[]>([]);

  // Onde vai ser feito o armazenamento das mensagens
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Eae mano',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bruno',
          avatar: 'https://github.com/E3ND.png',
        },
      },
    ]);
  }, []);

  console.log(messages);

  // Callback quando estiver enviando a mensagem
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <Container>
      <GiftedChat
        placeholder="Digite a Mensagem"
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </Container>
  );
}