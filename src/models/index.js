// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Calendario, Users, PruebasFisicas, Atletas, Categoria, Noticias, Entrenador } = initSchema(schema);

export {
  Calendario,
  Users,
  PruebasFisicas,
  Atletas,
  Categoria,
  Noticias,
  Entrenador
};