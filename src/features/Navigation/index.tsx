import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './index.scss';

const Navigation: React.FC = () => (
  <nav className="navigation">
    <IconButton>
      <ArrowBackIcon />
    </IconButton>
  </nav>
);

export default Navigation;
