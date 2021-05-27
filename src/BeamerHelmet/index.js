import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import { beamerInitialize } from "../";

const BeamerHelmet = ({ id, url, args }) => (
  <Helmet>{beamerInitialize(id, url, args)}</Helmet>
);

BeamerHelmet.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  args: PropTypes.object.isRequired,
};

BeamerHelmet.defaultProps = {
  url: "https://app.getbeamer.com/js/beamer-embed.js",
  args: {},
};

export default BeamerHelmet;
