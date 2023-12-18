import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
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
  PicGirlsWorld,
  PicGoodBadFortune,
  PicSistersWar,
  PicUndercoverChaebol,
} from './../assets/images/';

const HomeScreen = ({navigation}) => {
  const [isProfileMenuVisible, setProfileMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genres = [
    {id: 'action', title: 'Action'},
    {id: 'romance', title: 'Romance'},
    {id: 'fantasy', title: 'Fantasy'},
    {id: 'drama', title: 'Drama'},
  ];

  const dummyManhwaData = {
    action: [
      {id: 1, name: 'Lookism', image: PicLookism, sinopsis: 'Sinopsis Lookism'},
      {
        id: 2,
        name: 'Wind Breaker',
        image: PicWindBreaker,
        sinopsis: 'Sinopsis Wind Breaker',
      },
      {
        id: 3,
        name: 'Questism',
        image: PicQuestism,
        sinopsis: 'Sinopsis Questism',
      },
      {
        id: 4,
        name: 'Manager Kim',
        image: PicManagerKim,
        sinopsis: 'Sinopsis Manager Kim',
      },
      {
        id: 5,
        name: 'How To Fight',
        image: PicHowToFight,
        sinopsis: 'Sinopsis How To Fight',
      },
    ],
    romance: [
      {id: 6, name: 'Mistake', image: PicMistake, sinopsis: 'Sinopsis Mistake'},
      {
        id: 7,
        name: 'Maybe Meant To Be',
        image: PicMaybeMeantToBe,
        sinopsis: 'Sinopsis Maybe Meant To Be',
      },
      {
        id: 8,
        name: 'The Secret Of Angel',
        image: PicTheSecretOfAngel,
        sinopsis: 'Sinopsis The Secret Of Angel',
      },
    ],
    fantasy: [
      {
        id: 9,
        name: 'Omniscient Reader',
        image: PicOmniscientReader,
        sinopsis: 'Sinopsis Omniscient Reader',
      },
      {
        id: 10,
        name: 'Tower Of God',
        image: PicTowerOfGod,
        sinopsis: 'Sinopsis Tower Of God',
      },
      {
        id: 11,
        name: 'Solo Leveling',
        image: PicSoloLeveling,
        sinopsis: 'Sinopsis Solo Leveling',
      },
      {
        id: 12,
        name: 'The God of HighSchool',
        image: PicGodOfHighSchool,
        sinopsis: 'Sinopsis The God of HighSchool',
      },
      {
        id: 13,
        name: 'Noblesse',
        image: PicNoblesse,
        sinopsis: 'Sinopsis Noblesse',
      },
    ],
    drama: [
      {
        id: 14,
        name: "Girl's World",
        image: PicGirlsWorld,
        sinopsis: "Sinopsis Girl's World",
      },
      {
        id: 15,
        name: 'Undercover...',
        image: PicUndercoverChaebol,
        sinopsis: 'Sinopsis Undercover...',
      },
      {
        id: 16,
        name: 'Sisters at War',
        image: PicSistersWar,
        sinopsis: 'Sinopsis Sisters at War',
      },
      {
        id: 17,
        name: 'GOOD/BAD FORTUNE',
        image: PicGoodBadFortune,
        sinopsis: 'Sinopsis GOOD/BAD FORTUNE',
      },
    ],
  };

  const toggleProfileMenu = () => {
    setProfileMenuVisible(!isProfileMenuVisible);
  };

  const navigateTo = screen => {
    setProfileMenuVisible(false);
    if (screen === 'Logout') {
      navigation.navigate('Login');
    } else {
      navigation.navigate(screen);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);

    if (!query) {
      // Jika query kosong, tampilkan semua genre
      setSelectedGenre(null);
      setSearchResults([]);
      return;
    }

    const results = genres.reduce((acc, genre) => {
      const genreData = dummyManhwaData[genre.id] || [];
      const genreResults = genreData.filter(manhwa =>
        manhwa.name.toLowerCase().includes(query.toLowerCase()),
      );

      if (genreResults.length > 0) {
        setSelectedGenre(genre.id);
        return genreResults;
      }

      return acc;
    }, []);

    setSearchResults(results);
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
            {index < profileOptions.length - 1 && (
              <View style={styles.separatorLine} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderManhwaItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {manhwa: item})}>
      <View style={styles.manhwaItemContainer}>
        <Image source={item.image} style={styles.manhwaImage} />
        <Text style={styles.manhwaName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={styles.separatorLine} />;

  const renderGenreItem = ({item, index}) => {
    if (selectedGenre && item.id !== selectedGenre) {
      return null;
    }

    return (
      <View style={styles.genreContainer}>
        <Text style={styles.genreTitle}>{item.title}</Text>
        <FlatList
          data={
            searchResults.length > 0
              ? searchResults
              : dummyManhwaData[item.id] || []
          }
          renderItem={renderManhwaItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={renderSeparator}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {index < genres.length - 1 && <View style={styles.separatorLine} />}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, {flex: 1}]}>Manhwa Reader</Text>
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

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={text => handleSearch(text)}
          value={searchQuery}
        />
      </View>

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
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 10,
  },
  profileIconContainer: {
    alignSelf: 'flex-end',
  },
  profileIcon: {
    width: 10,
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
  searchContainer: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default HomeScreen;
