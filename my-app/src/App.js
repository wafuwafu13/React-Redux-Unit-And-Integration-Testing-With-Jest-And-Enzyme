import React, { Component } from 'react';
import Header from './component/header/index'
import Headline from './component/headline/index'
import SharedButton from './component/button/index'
import ListItem from './component/listItem/index'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'
import './app.scss'

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'wafu@gmail.com',
  age: 24,
  onlineStatus: true
}]

class App extends Component {

  constructor(props){
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  fetch(){
    this.props.fetchPosts()
  }


  render() {

    const { posts } = this.props

    const configButton = {
      buttonText: 'Get Posts!',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post
                const configListItem = {
                  title,
                  desc: body
                }
                return(
                  <ListItem key={index} {...configListItem} />
                )
              })
              }
            </div>
          }
        </section>
      </div>
    );

  }
  
}

const mapStateToProps = state => {
   return {
     posts: state.posts
   }
}

export default connect(mapStateToProps, {fetchPosts})(App);
