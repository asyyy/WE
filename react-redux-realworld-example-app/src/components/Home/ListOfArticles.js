import React from "react";
import { Image, Divider, List, Container } from "semantic-ui-react";

class ListOfArticles extends React.Component {
  /**
   * Vu que selon le type de l'article, la structure de l'objet est différent,
   * obligé de faire au cas par cas pour chaque type.
   *
   * @param {*} element Objet d'un article, peut être différent selon le type de requête vers l'API
   * @returns <Image ...> Une balise image contenant une image de element
   */
  rightPathToImage = (element) => {
    switch (this.props.activeItem) {
      case "Recent":
        if (element.multimedia && element.multimedia[0]) {
          return <Image avatar src={element.multimedia[0].url} />;
        } else {
          return <Image avatar src={require("../asset/image-not-found.jpg")} />;
        }
      case "Popular": //fall-through
      case "Polemic":
        if (element.media && element.media[0]) {
          return (
            <Image avatar src={element["media"][0]["media-metadata"][0].url} />
          );
        } else {
          return <Image avatar src={require("../asset/image-not-found.jpg")} />;
        }
      default:
        console.log("rightPathToImage() => can't read props");
        return "Oopsy";
    }
  };
  render() {
    const listArticles = this.props.listOfArticles;
    return (
      <Container style={{ maxHeight: 400, overflow: "auto" }}>
        <List>
          {listArticles.map((element, index) => (
            <List.Item key={index}>
              <a href={element["url"]}>
                <List.Content>
                  <List.Header>
                    {this.rightPathToImage(element)}
                    {element.title}
                  </List.Header>
                  <List.Description>
                    {element.abstract ? (
                      element.abstract
                    ) : (
                      <i>No description</i>
                    )}
                  </List.Description>
                </List.Content>
              </a>
              <Divider />
            </List.Item>
          ))}
        </List>
      </Container>
    );
  }
}
export default ListOfArticles;
