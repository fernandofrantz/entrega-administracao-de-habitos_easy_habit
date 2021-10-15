import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services/api";
import { useHistory } from "react-router";

const FormActivities = () => {

    // VAI RECERBE O ID DO GRUPO VIA CONTEXT OU VIA PROPS
    // RECEBER O TIPO SE É DE CRIAÇÃO OU DE EDIÇÃO
    const history = useHistory()

    const formSchema = yup.object().shape({
        title: yup.string().required(),
        realization_time: yup.string().required(),
        group: yup.string().required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const createActivity = (data) => {
        api
            .post("/activities/", data)
            .then(res => res)
            .catch(error => console.log(error))
    }

    const editActivity = (data) => {
        api
            .patch(`/activities/${IDDOGRUPO}`)
            .then(res => {
                history("/detalhesdo grupo")
            })
    }

    return (
        <>
        {/* TIPO CRIAÇÃO */}
            <form onSubmit={handleSubmit(createActivity)}>
                <input
                    placeholder="Título"
                    {...register("title")}
                />
                <input
                    placeholder="Tempo de realização"
                    {...register("realization_time")}
                />
                <input
                    placeholder="Id do grupo"
                    value={ID DO GRUPO}
                    {...register("group")}
                />
                <button type="submit" > Criar </button>
            </form>

            {/* TIPO EDIÇÃO */}
            <form onSubmit={handleSubmit(editActivity)}>
                <input
                    placeholder="Título"
                    {...register("title")}
                />
                <button type="submit" > Criar </button>
            </form>     
        </>
    )
}

export default FormActivities;