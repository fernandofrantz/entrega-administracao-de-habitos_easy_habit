import { useContext} from "react";
import { ActivityContext } from "../../Providers/Activity";
import { FormPageActivity } from "../FormActivities/styles";
import { IoMdArrowRoundBack } from "react-icons/io";

const FormActivities = ({ idGroup, idActivity, type }) => {

    const { title, 
            realizationTime, 
            setTitle, 
            setRealizationTime, 
            createActivity, 
            editActivity } = useContext(ActivityContext)
    
    return (
        <FormPageActivity>
            <div className="iconContainer">
                <IoMdArrowRoundBack />   
            </div>
            <section>
                <div className="effect"></div>
                {
                    type === "register" &&
                            <div className="inputContainer">
                                <input
                                    placeholder="Ttile"
                                    value={title}
                                    type="text"
                                    onChange={e => setTitle(e.target.value)}
                                    required
                                />
                                <input
                                    placeholder="Period of realization"
                                    value={realizationTime}
                                    type="datetime-local"
                                    onChange={e => setRealizationTime(e.target.value)}
                                    required
                                />
                                <button onClick={() => createActivity(idGroup)}> Create new activity </button>
                            </div>
                }

                {
                    type === "edit" &&
                        <div className="inputContainer">
                            <input
                                placeholder="Título da atividade"
                                value={title}
                                type="text"
                                onChange={e => setTitle(e.target.value)}
                            />
                            <input
                                placeholder="Tempo de realização"
                                value={realizationTime}
                                type="datetime-local"
                                onChange={e => setRealizationTime(e.target.value)}
                            />
                            <button onClick={() => editActivity(idActivity)} > Edit </button>   
                        </div>
                        
                }
            </section>
        </FormPageActivity>
    
    )
}

export default FormActivities;