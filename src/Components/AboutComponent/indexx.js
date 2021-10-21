import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
export const AboutComponent = () => (
  <div>
    <Link to="/login">
      <div className="Link">
        <BsArrowLeft />
      </div>
    </Link>
    <div className="text">
      <div className="pointText">
        <h1>About Easy Habit</h1>A plataforma foi desenvolvida para você se
        organizar e melhorar sua saúde física e mental. Junte-se a um grupo que
        combine mais com o seu perfil, pratique suas metas e atividades, evolua
        junto com milhares de pessoas em toda a parte do mundo.
      </div>
    </div>
  </div>
);
