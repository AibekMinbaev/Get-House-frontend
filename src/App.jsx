import React from 'react' 
import Property from './components/Property.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import "./App.css"

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://aibekminbaev.pythonanywhere.com/api/properties/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ 
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <Header></Header>
        <section id="sub-main">
            {items?.map(item => (
                <Property {...item}></Property>
              ))}
        </section>
        <Footer></Footer>
        </>
      );
    }
  }
}

export default App;
