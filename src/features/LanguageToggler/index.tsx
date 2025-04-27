import ToggleButton from '@mui/material/ToggleButton';

import './index.scss';

const LanguageToggler: React.FC = () => (
  <div className="language-toggler">
    <ToggleButton value="ukr">Укр</ToggleButton>
  </div>
);

export default LanguageToggler;
