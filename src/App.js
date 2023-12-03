import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Items from "./Items";
import Categories from "./Categories";
import ShowFullItem from "./ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Радіо Panasonic',
          img: 'panasonic.jpg',
          desc: 'Lorem ipsum',
          category: 'radio',
          price: '49.99',

        },
        {
          id: 2,
          title: 'Радіоприймач REAL-EL X-700.',
          img: 'real-ex.jpg',
          desc: 'Lorem ipsum',
          category: 'radio-priymach',
          price: '40.99',


        },
        {
          id: 3,
          title: 'Портативна акустика JBL Tuner 2 FM Black.',
          img: 'jbl-tuner.jpg',
          desc: 'Lorem ipsum',
          category: 'radio-portative',
          price: '55.99',
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />} 
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })

  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true

    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
