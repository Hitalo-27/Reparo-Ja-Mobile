import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ChatListItem from '../../components/ChatListItem';

import chatRooms from '../../data/ChatRooms';
import NewMessageButton from '../../components/NewMessageButton';
import { Container } from '../Login/styles';

export default function ChatsScreen() {
  return (
    <Container style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
