import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import file index images
import {
  PicHowToFight,
  PicManagerKim,
  PicLookism,
  PicOmniscientReader,
  PicTowerOfGod,
  PicQuestism,
  PicWindBreaker,
  PicGodOfHighSchool,
  PicMaybeMeantToBe,
  PicMistake,
  PicNoblesse,
  PicSoloLeveling,
  PicTheSecretOfAngel,
} from './../assets/images/';

const HomeScreen = ({navigation}) => {
  const [isProfileMenuVisible, setProfileMenuVisible] = useState(false);

  const genres = [
    {id: 'action', title: 'Action'},
    {id: 'romance', title: 'Romance'},
    {id: 'fantasy', title: 'Fantasy'},
  ];

  // Dummy data for Manhwa
  const dummyManhwaData = {
    action: [
      {id: 1, name: 'Lookism', image: PicLookism},
      {id: 2, name: 'Wind Breaker', image: PicWindBreaker},
      {id: 3, name: 'Questism', image: PicQuestism},
      {id: 4, name: 'Manager Kim', image: PicManagerKim},
      {id: 5, name: 'How To Fight', image: PicHowToFight},
    ],
    romance: [
      {id: 6, name: 'Mistake', image: PicMistake},
      {id: 7, name: 'Maybe Meant To Be', image: PicMaybeMeantToBe},
      {id: 8, name: 'The Secret Of Angel', image: PicTheSecretOfAngel},
    ],
    fantasy: [
      {id: 9, name: 'Omniscient Reader', image: PicOmniscientReader},
      {id: 10, name: 'Tower Of God', image: PicTowerOfGod},
      {id: 11, name: 'Solo Leveling', image: PicSoloLeveling},
      {id: 12, name: 'The God of HighSchool', image: PicGodOfHighSchool},
      {id: 13, name: 'Noblesse', image: PicNoblesse},
    ],
  };

  const toggleProfileMenu = () => {
    setProfileMenuVisible(!isProfileMenuVisible);
  };

  const navigateTo = screen => {
    setProfileMenuVisible(false);
    if (screen === 'Logout') {
      navigation.navigate('AuthStack');
    } else {
      navigation.navigate(screen);
    }
  };

  const renderProfileMenu = () => {
    if (!isProfileMenuVisible) {
      return null;
    }

    const profileOptions = [
      {name: 'History', icon: 'history', screen: 'History'},
      {name: 'Help', icon: 'question-circle', screen: 'Help'},
      {name: 'Logout', icon: 'sign-out'},
    ];

    return (
      <View style={styles.profileMenu}>
        {profileOptions.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => navigateTo(option.name)}>
            <View style={styles.profileMenuItem}>
              <Icon
                name={option.icon}
                size={20}
                color="#000"
                style={styles.profileMenuIcon}
              />
              <Text style={styles.profileMenuText}>{option.name}</Text>
            </View>
            {/* Tambahkan garis pemisah */}
            {index < profileOptions.length - 1 && (
              <View style={styles.separatorLine} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderManhwaItem = ({item}) => (
    <View style={styles.manhwaItemContainer}>
      {/* Menggunakan nama gambar yang sesuai dengan yang diimpor */}
      <Image source={item.image} style={styles.manhwaImage} />
      <Text style={styles.manhwaName}>{item.name}</Text>
    </View>
  );

  const renderSeparator = () => <View style={styles.separatorLine} />;

  const renderGenreItem = ({item, index}) => (
    <View style={styles.genreContainer}>
      <Text style={styles.genreTitle}>{item.title}</Text>
      <FlatList
        data={dummyManhwaData[item.id]}
        renderItem={renderManhwaItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={renderSeparator} // Menambahkan pemisah antar item
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {/* Tambahkan garis pemisah antar genre */}
      {index < genres.length - 1 && <View style={styles.separatorLine} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.headerTitle}
          onPress={() => navigation.navigate('Home')}>
          Manhwa Reader
        </Text>
        {/* Tambahkan garis pemisah antara header dan view */}
        <View style={styles.separatorLine} />
        <TouchableOpacity onPress={toggleProfileMenu}>
          <Icon
            name="ellipsis-v"
            size={30}
            color="#000"
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
      {renderProfileMenu()}
      <FlatList
        data={genres}
        renderItem={renderGenreItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#355a9c',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileIcon: {
    marginRight: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerTitle: {
    fontSize: 24,
    marginLeft: 5,
    color: '#fff',
    fontFamily: 'Satisfy-Regular',
  },
  profileMenu: {
    position: 'absolute',
    width: 250,
    top: 60,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    zIndex: 1,
  },
  profileMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileMenuIcon: {
    marginRight: 10,
  },
  profileMenuText: {
    fontSize: 16,
    fontFamily: 'DidactGothic-Regular',
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  genreContainer: {
    marginTop: 20,
  },
  genreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  manhwaItemContainer: {
    marginRight: 10,
  },
  manhwaImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  manhwaName: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
