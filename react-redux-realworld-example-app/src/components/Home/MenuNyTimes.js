import React from "react";
import { Image, Divider, Menu, Input } from "semantic-ui-react";
import ListOfArticles from "./ListOfArticles";
class NyTimes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArticles: [],
      activeItem: "Recent",
    };
  }

  componentDidMount() {
    this.loadArticles(this.state.activeItem);
  }
  /**
   *
   * @param {*} category type de l'articles
   * @returns String, le lien de l'api vers le NY Times selon le type de l'article
   */
  makeApiLink = (category) => {
    this.setState({ activeItem: category });
    switch (category) {
      case "Popular":
        return (
          "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=" +
          process.env.REACT_APP_API_KEY
        );
      case "Recent":
        return (
          "https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=" +
          process.env.REACT_APP_API_KEY
        );
      case "Polemic":
        return (
          "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=" +
          process.env.REACT_APP_API_KEY
        );

      default:
        console.log("makeApiLink() => Unknow category");
        return "Oopsy";
    }
  };
  /**
   * Execute une requête vers les BDD de NY Times et récupère les données dans state
   * @param {*} category type de l'article
   */
  loadArticles = (category) => {
    let link = this.makeApiLink(category);
    fetch(link)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          listArticles: result.results,
        });
      });
  };

  render() {
    const { listArticles, activeItem } = this.state;
    return (
      <Menu fluid vertical>
        <Menu.Header>
          <Image
            src={require("../asset/LogoNYTimes.png")}
            size="tiny"
            verticalAlign="middle"
          />

          <span
            style={{
              fontFamily: "Helvatica",
              fontSize: "250%",
              textAlign: "center",
            }}
          >
            NY Times
          </span>
        </Menu.Header>
        <Menu.Item />
        <div style={{ textAlign: "center" }}>
          <Menu size="massive" pointing compact>
            <Menu.Item
              name="Recent"
              active={activeItem === "Recent"}
              onClick={() => this.loadArticles("Recent")}
            />
            <Menu.Item
              name="Popular"
              active={activeItem === "Popular"}
              onClick={() => this.loadArticles("Popular")}
            />
            <Menu.Item
              name="Polemic"
              active={activeItem === "Polemic"}
              onClick={() => this.loadArticles("Polemic")}
            />
          </Menu>
        </div>

        <Divider />
        <ListOfArticles listOfArticles={listArticles} activeItem={activeItem} />
      </Menu>
    );
  }
}
export default NyTimes;
