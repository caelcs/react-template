import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "./homeCategories.css";

export default class HomeCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:8080/api/categories")
      .then(res => res.data)
      .then(categories => this.setState({ categories }));
  }
  render() {
    const { categories } = this.state;
    return (
      <div className="categoriesContainer">
        <div className="categoriesContent">
          {categories &&
            categories.map(category => (
              <div className="categoryCard" key={category._id}>
                <div className="categoryTitle"> {category.description} </div>
                <Link to="/categories">
                  <div className="categoryLink">View All →</div>
                </Link>
                <img
                  src={require(`./assets/${category.image}`)}
                  alt="img"
                  className="categoryImage"
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
