import React, { Component } from "react";
import { setLang } from "../middleware/lang";
import { Link } from "react-router-dom";
const footer_items = {
  "Acerca de nosotros": {
    text: ["Nuestra Historia", "Carreras", "Opiniones", "Visítanos"]
  },
  "Lo Demás": {
    text: ["Términos y Condiciones", "Política de Privacidad"]
  }
};
class Footer extends Component {
  chLang() {
    setLang();
  }
  render() {
    return (
      <footer className="footer">
        <div className="container footer-info">
          <div className="row items-cont">
            <FooterItems />
            <div className="col-md-3 small text-uppercase mb-4 mb-md-0">
              <h3>Síguenos en</h3>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function FooterItems(type) {
  return (
    <React.Fragment>
      {Object.keys(footer_items).map(function(key, index) {
        return (
          <div
            className="col-md-3 col-lg-2 small text-uppercase mb-4 mb-md-0"
            key={`ul_${key}`}
          >
            <h3>{key}</h3>
            <ul>
              <FooterItem items={footer_items[key]} />
            </ul>
          </div>
        );
      })}
    </React.Fragment>
  );
}

function FooterItem(props) {
  let { items } = props;
  return (
    <React.Fragment>
      {Object.keys(items).map(function(key, index) {
        let item = items[key];
        let x = 0;

        let emelent = item.map(ft_item => {
          x++;
          return (
            <li className="my-2" key={`li_text${x}`}>
              <Link className="" to="/our-story/3617">
                {ft_item}
              </Link>
            </li>
          );
        });
        return emelent;
      })}
    </React.Fragment>
  );
}

export default Footer;
