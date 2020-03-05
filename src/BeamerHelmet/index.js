import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { beamerInitialize } from '../';

const BeamerHelmet = ({ id, url }) => (
  <Helmet>
    { beamerInitialize(id, url) }
</Helmet>
);

BeamerHelmet.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

BeamerHelmet.defaultProps = {
  url: 'https://app.getbeamer.com/js/beamer-embed.js'
};

export default BeamerHelmet;
