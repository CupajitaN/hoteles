import logoImg from '../assets/logo.png'; // Ajustá la ruta si cambiaste carpetas

const Logo = () => (
  <div className="logo">
    <img src={logoImg} alt="Hotel Logo" style={{ width: '200px' }} />
  </div>
);

export default Logo;
