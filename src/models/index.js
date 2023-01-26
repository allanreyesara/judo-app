// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, PruebasFisicas, Atletas, Categoria, Noticias, Entrenador } = initSchema(schema);

export {
  Users,
  PruebasFisicas,
  Atletas,
  Categoria,
  Noticias,
  Entrenador
};