const processCss = (attributes) => {
  const { fontsizeDesktop, fontsizeTablet, fontsizeMobile } = attributes;

  const selectors = {};
  const tabletSelectors = {};
  const mobileSelectors = {};

  let cssfull = "";

  selectors[".umar-eg-com"] = {
    "font-size": fontsizeDesktop + "px",
  };

  tabletSelectors[".umar-eg-com"] = {
    "font-size": fontsizeTablet + "px",
  };

  mobileSelectors[".umar-eg-com"] = {
    "font-size": fontsizeMobile + "px",
  };
  const genCss = (selectorsObj, base = "", responsiveType) => {
    let gen_styling_css = "";
    const id = "umar-eg";
    for (const selector in selectorsObj) {
      const cssProps = selectorsObj[selector];
      let css = "";

      for (const property in cssProps) {
        if (
          typeof cssProps[property] === "undefined" ||
          cssProps[property] === null ||
          cssProps[property]?.length === 0
        ) {
          continue;
        }

        const propertyValue = cssProps[property];

        if ("font-family" === property && "Default" === propertyValue) {
          continue;
        }

        if ("font-family" === property) {
          css += property + ": " + "'" + propertyValue + "'" + ";";
        } else {
          css += property + ": " + propertyValue + ";";
        }
      }

      if (css.length !== 0) {
        if (responsiveType === "tablet") {
          gen_styling_css +=
            "@media only screen and (max-width: " + 976 + "px) {";
          gen_styling_css += selector + "{";
          gen_styling_css += css;
          gen_styling_css += "}}";
        } else if (responsiveType === "mobile") {
          gen_styling_css +=
            "@media only screen and (max-width: " + 767 + "px) {";
          gen_styling_css += selector + "{";
          gen_styling_css += css;
          gen_styling_css += "}}";
        } else {
          gen_styling_css += selector + "{";
          gen_styling_css += css;
          gen_styling_css += "}";
        }
      }
    }

    return gen_styling_css;
  };

  cssfull = genCss(selectors, "", "desktop");
  cssfull += genCss(tabletSelectors, "", "tablet");
  cssfull += genCss(mobileSelectors, "", "mobile");

  return cssfull;
};

export default processCss;
