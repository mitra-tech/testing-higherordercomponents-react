import React from 'react';
import {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import * as actions from 'actions';


class App extends Component {

renderButton() {
 if (this.props.auth) {
   return <button onClick={() => {this.props.changeAuth(false)}}>sign out</button>
  } else {
   return <button onClick={() => {this.props.changeAuth(true)}}>sign in</button>
 }
}

renderHeader() {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='post'>post a comment</Link>
      </li>
      <li>{this.renderButton()}</li>
    </ul>
  )
}

   render() {
        return (
            <div>
              {this.renderHeader()}
          <Route path='/post' component={CommentBox}  />
          <Route path='/' exact component= {CommentList} />
            </div>
        )
        }
}

function mapStateToProps(state){
  return {auth : state.auth}
}


export default connect(mapStateToProps, actions)(App);