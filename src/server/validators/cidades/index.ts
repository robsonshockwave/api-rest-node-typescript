import * as yup from "yup";
import { ICidade } from "../../dtos/cidades";

export const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});
