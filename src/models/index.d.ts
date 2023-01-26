import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellidos?: string | null;
  readonly correo?: string | null;
  readonly tipoUsuario?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellidos?: string | null;
  readonly correo?: string | null;
  readonly tipoUsuario?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerPruebasFisicas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PruebasFisicas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly resultado: string;
  readonly AtletasPrueba?: Atletas | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pruebasFisicasAtletasPruebaId?: string | null;
}

type LazyPruebasFisicas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PruebasFisicas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly resultado: string;
  readonly AtletasPrueba: AsyncItem<Atletas | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pruebasFisicasAtletasPruebaId?: string | null;
}

export declare type PruebasFisicas = LazyLoading extends LazyLoadingDisabled ? EagerPruebasFisicas : LazyPruebasFisicas

export declare const PruebasFisicas: (new (init: ModelInit<PruebasFisicas>) => PruebasFisicas) & {
  copyOf(source: PruebasFisicas, mutator: (draft: MutableModel<PruebasFisicas>) => MutableModel<PruebasFisicas> | void): PruebasFisicas;
}

type EagerAtletas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Atletas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellidos: string;
  readonly fechaNacimiento: string;
  readonly cinta: string;
  readonly peso: number;
  readonly id_categoria: string;
  readonly correo: string;
  readonly comentarios?: string | null;
  readonly foto?: string | null;
  readonly categoriaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAtletas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Atletas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellidos: string;
  readonly fechaNacimiento: string;
  readonly cinta: string;
  readonly peso: number;
  readonly id_categoria: string;
  readonly correo: string;
  readonly comentarios?: string | null;
  readonly foto?: string | null;
  readonly categoriaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Atletas = LazyLoading extends LazyLoadingDisabled ? EagerAtletas : LazyAtletas

export declare const Atletas: (new (init: ModelInit<Atletas>) => Atletas) & {
  copyOf(source: Atletas, mutator: (draft: MutableModel<Atletas>) => MutableModel<Atletas> | void): Atletas;
}

type EagerCategoria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly peso_max?: number | null;
  readonly peso_min?: number | null;
  readonly AtletasCategoria?: (Atletas | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategoria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly peso_max?: number | null;
  readonly peso_min?: number | null;
  readonly AtletasCategoria: AsyncCollection<Atletas>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categoria = LazyLoading extends LazyLoadingDisabled ? EagerCategoria : LazyCategoria

export declare const Categoria: (new (init: ModelInit<Categoria>) => Categoria) & {
  copyOf(source: Categoria, mutator: (draft: MutableModel<Categoria>) => MutableModel<Categoria> | void): Categoria;
}

type EagerNoticias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Noticias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo: string;
  readonly contenido: string;
  readonly imagen?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNoticias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Noticias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo: string;
  readonly contenido: string;
  readonly imagen?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Noticias = LazyLoading extends LazyLoadingDisabled ? EagerNoticias : LazyNoticias

export declare const Noticias: (new (init: ModelInit<Noticias>) => Noticias) & {
  copyOf(source: Noticias, mutator: (draft: MutableModel<Noticias>) => MutableModel<Noticias> | void): Noticias;
}

type EagerEntrenador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entrenador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellidos: string;
  readonly correo: string;
  readonly foto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEntrenador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entrenador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellidos: string;
  readonly correo: string;
  readonly foto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Entrenador = LazyLoading extends LazyLoadingDisabled ? EagerEntrenador : LazyEntrenador

export declare const Entrenador: (new (init: ModelInit<Entrenador>) => Entrenador) & {
  copyOf(source: Entrenador, mutator: (draft: MutableModel<Entrenador>) => MutableModel<Entrenador> | void): Entrenador;
}