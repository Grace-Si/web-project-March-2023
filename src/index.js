import './index.css';
import { renderLogo, renderProfile, renderCards } from './js/render';

window.onload = async () => {
    await renderLogo();
    await renderProfile();
    await renderCards();
};

