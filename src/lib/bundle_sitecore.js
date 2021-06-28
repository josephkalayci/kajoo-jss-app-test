import React from 'react';
import { Text as Text$1, Image, Link } from '@sitecore-jss/sitecore-jss-react';
import 'react-rating';
import 'react-datepicker';

var style$h = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  fontSize: "0.8em",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  borderRadius: "3px",
  border: "1px solid #666666",
  backgroundColor: "#d9d9d9"
};

const react$j = props => {
  return /*#__PURE__*/React.createElement("button", {
    style: style$h,
    className: props.className
  }, /*#__PURE__*/React.createElement(Text$1, {
    field: props.field
  }));
};

const style$g = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00"
};

const react$i = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: style$g,
    className: props.className
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: "true"
  }));
};

const react$h = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: props.style
  });
};

const style$f = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  fontSize: "larger"
};

const react$g = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: style$f
  });
};

const style$e = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  fontSize: "larger"
};

const react$f = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: style$e,
    className: props.className
  }, /*#__PURE__*/React.createElement(Text$1, {
    field: props.field,
    tag: "h2"
  }));
};

const style$d = {
  innerStyle: {
    WebkitUserDrag: "none"
  },
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "3px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00"
};

const react$e = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: style$d
  });
};

const react$d = props => {
  const style = {
    innerStyle: {
      WebkitUserDrag: "none"
    },
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: "3px",
    border: "1px solid #666666",
    backgroundColor: "#d9d9d9"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: props.className
  }, /*#__PURE__*/React.createElement(Image, {
    media: props.media,
    style: style.innerStyle
  }));
};

const style$c = {
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  fontSize: "0.8em",
  alignItems: "left",
  paddingLeft: "5px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  alignSelf: "flex-start"
};

const react$c = (props, styles, uid) => {
  return /*#__PURE__*/React.createElement("div", {
    style: style$c,
    className: props.className
  }, /*#__PURE__*/React.createElement(Link, {
    field: props.fields
  }));
};

const style$b = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00"
};

const react$b = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: style$b
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "radio"
  }));
};

const style$a = {
  fontSize: "0.8em",
  overflow: "hidden",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  alignItems: "left",
  paddingLeft: "5px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00"
};

const react$a = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: style$a,
    className: props.className
  }, /*#__PURE__*/React.createElement(Text$1, {
    field: props.field,
    tag: "span"
  }));
};

const style$9 = {
  fontSize: "0.8em",
  alignItems: "left",
  paddingLeft: "5px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00"
};

const react$9 = props => {
  return /*#__PURE__*/React.createElement("textarea", {
    className: props.className,
    value: "Text area",
    style: style$9
  });
};

const style$8 = {
  border: "1px solid rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  fontSize: "0.8em",
  alignItems: "left",
  paddingLeft: "5px"
};

const react$8 = props => {
  return /*#__PURE__*/React.createElement("input", {
    className: props.className,
    type: "text",
    value: "Text Input",
    style: style$8
  });
};

const style$7 = {
  innerStyle: {},
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "5px",
  border: "1px solid #666666",
  backgroundColor: "#d9d9d9",
  WebkitUserDrag: "none"
};

const react$7 = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: style$7
  });
};

const style$6 = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00"
};

const react$6 = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: style$6,
    className: props.className
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      width: "100%"
    }
  }));
};

const style$5 = {
  innerStyle: {
    WebkitUserDrag: "none"
  },
  overflow: "hidden",
  borderRadius: "3px",
  border: "1px solid #666666",
  backgroundColor: "#d9d9d9"
};

const react$5 = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: style$5
  }, " ");
};

const style$4 = {
  display: "flex",
  maxHeight: "100%",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  fontSize: "larger"
};

const react$4 = props => {
  const bgcolor = "orange";
  const completed = 45;
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  };
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right"
  };
  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: { ...style$4,
      containerStyles
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: fillerStyles
  }, /*#__PURE__*/React.createElement("span", {
    style: labelStyles
  }, `${completed}%`)));
};

const style$3 = {
  overflow: "hidden",
  fontSize: "0.8em",
  flexDirection: "column",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  borderRadius: "5px",
  WebkitUserDrag: "none",
  alignItems: "left",
  paddingLeft: "3px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00"
};

const react$3 = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: style$3,
    className: props.className
  }, /*#__PURE__*/React.createElement(Text$1, {
    field: props.field,
    tag: "p"
  }));
};

const style$2 = {
  padding: "0px",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  WebkitUserDrag: "none",
  borderRadius: "3px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00"
};

const react$2 = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: style$2,
    className: props.className
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      padding: "0px"
    },
    type: "range",
    min: "1",
    max: "100",
    value: "50",
    class: "slider",
    id: "myRange"
  }));
};

const style$1 = {
  alignItems: "center",
  display: "flex",
  borderRadius: "3px",
  border: "1px solid #666666",
  backgroundColor: "#d9d9d9"
};

const react$1 = props => {
  return /*#__PURE__*/React.createElement("div", {
    style: style$1,
    className: props.className
  }, /*#__PURE__*/React.createElement("select", {
    style: { ...style$1,
      marginRight: "10px",
      position: "relative",
      left: "-1px"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "Dropdown"
  }, "Dropdown")), /*#__PURE__*/React.createElement("i", {
    style: {
      border: "solid #666666",
      width: "5px",
      borderWidth: "0 3 3 0",
      display: "inline-block",
      padding: "3px",
      marginRight: "20px",
      transform: "rotate(45deg)",
      WebkitTransform: "rotate(45deg)"
    }
  }, " "));
};

const style = {
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxHeight: "100%",
  overflow: "hidden",
  fontSize: "0.8em",
  borderRadius: "3px",
  WebkitUserDrag: "none",
  alignItems: "left",
  paddingLeft: "5px",
  border: "1px dashed rgb(187, 187, 187)",
  backgroundColor: "#FFFFFF00"
};

const react = props => {
  return /*#__PURE__*/React.createElement("ul", {
    style: style,
    className: props.className
  }, /*#__PURE__*/React.createElement(Text, {
    field: props.field,
    tag: "li"
  }));
};

export { react$j as Button, react$i as Checkbox, react$h as Container, react$5 as Datepicker, react$1 as Dropdown, react$f as Header, react$d as Image, react$a as Label, react$6 as Linebreak, react$c as Link, react as List, react$3 as Paragraph, react$4 as Progressbar, react$b as Radiobutton, react$g as Rating, react$2 as Slider, react$9 as Textarea, react$8 as Textinput, react$e as Toggle, react$7 as Video };
