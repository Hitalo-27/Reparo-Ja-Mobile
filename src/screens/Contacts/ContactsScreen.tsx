import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ContactListItem from '../../components/ContactListItem';

import users from '../../data/Users';
import { Container } from '../Login/styles';

export default function ContactsScreen() {
  return (
    <Container style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
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
