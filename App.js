import React from 'react';
import reactCSS from 'reactcss'
class App extends React.Component {
 constructor() {
  super();
  this.state = {
   name : "Find People",
  }
 }
changeInput(e){
  this.setState({
    name : e.target.value
  })
 }

render() {

  const styles = reactCSS({
    'default': {
      inputContainer: {
        background: 'none',
      },
      input: {
        position: 'relative',
        textAlign: 'center',
        fontSize: '30px',
        fontFamily: 'Avenir',
        fontWeight: '500',
        color: '#B4B4B4',
        display: 'block',
        margin: 'auto',
        minWidth: '100%',
        WebkitAppearance: 'none',
        appearance: 'none',
        border: 'none',
        outline: 'none',
        background: 'none',
        zIndex: 2,
      },
      img: {
        position: 'absolute',
        float: 'left',
        width: 30,
        height: 30,
        marginTop: 5,
        marginRight: 25,
        marginLeft: -35,
      },
      inputSpanCenter: {
        position: 'relative',
        left: '50%',
        float: 'left',
        fontSize: '30px',
        fontFamily: 'Avenir',
        fontWeight: '500',
        zIndex: 1,
        marginTop: -55,
      },
      inputSpan: {
        display: 'inline-block',
        position: 'relative',
        background: 'none',
        padding: '10px',
        left: '-50%',
        float: 'left',
        color: 'rgba(0,0,0,0)',
      },
    },
  });

 return (
  <div style={ styles.inputContainer }>
   <input style={ styles.input } type="text" placeholder={this.state.name} onChange={this.changeInput.bind(this)}/>
   <div style={ styles.inputSpanCenter }>
    <span style={ styles.inputSpan }>
      <img style={ styles.img } src={'./img/search.svg'}></img>
      {this.state.name}</span>
   </div>
 </div>
 );
 }
}
export default App
