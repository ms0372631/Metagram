import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      searchWord: '',
      searchShown: []
    });
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchWord != this.state.searchWord && this.state.searchWord != '') {
      let searchW = this.state.searchWord;
      let searchS = [];
      for (let i = 0; i < this.props.users.length; ++i) {
        if (searchW.length > this.props.users[i].username.length)
          continue;
        let j = 0, k = 0;
        while (j < searchW.length) {
          if (j === searchW.length - 1 && searchW[j] === this.props.users[i].username[k]) {
            searchS.push(this.props.users[i]);
            this.setState({
              searchShown: searchS
            })
            break;
          }
          if (searchW[j] !== this.props.users[i].username[k]) {
            break;
          }
          else {
            ++j;
            ++k;
          }
        }
      }
      console.log(searchS);
    }
  }

  cheackMatch() {
    let searchW = this.state.searchWord;
    let searchS = [];
    for (let i = 0; i < this.props.users.length; ++i) {
      if (searchW.length > this.props.users[i].username.length)
        continue;
      let j = 0, k = 0;
      while (j < searchW.length) {
        if (j === searchW.length - 1 && searchW[j] === this.props.users[i].username[k]) {
          searchS.push(this.props.users[i]);
          console.log(searchS);
          break;
        }
        if (searchW[j] !== this.props.users[i].username[k]) {
          break;
        }
        else {
          ++j;
          ++k;
        }
      }
    }
  }


  updateSearchWord() {
    return e => this.setState({
      searchWord: e.currentTarget.value
    })
  }

  render() {
    return (
      <>  
        <input type="text" style={{textTransform: 'lowercase'}} className="search-box" placeholder="search" onChange={this.updateSearchWord()}/>
      </>
    )
  }

}

export default SearchBar;