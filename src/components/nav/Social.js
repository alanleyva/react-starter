import React from "react";
const socialLinks = [
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/cedentalchihuahua/"
  },
  {
    name: "Facebook",
    icon: "fab fa-facebook-square",
    link: "https://www.facebook.com/CEDentalChihuahua/"
  }
];
const Social = () => (
  <div>
    {socialLinks.map(el => (
      <a
        href={el.link}
        className="btn text-white text-left p-2 mr-2"
        target="_blank"
        key={el.name}
      >
        <i className={`${el.icon} fa-2x`}></i>
      </a>
    ))}
  </div>
);

export default Social;
