/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Categoria } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CategoriaUpdateFormInputValues = {
    nombre?: string;
    peso_max?: number;
    peso_min?: number;
};
export declare type CategoriaUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    peso_max?: ValidationFunction<number>;
    peso_min?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriaUpdateFormOverridesProps = {
    CategoriaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    peso_max?: PrimitiveOverrideProps<TextFieldProps>;
    peso_min?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoriaUpdateFormProps = React.PropsWithChildren<{
    overrides?: CategoriaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    categoria?: Categoria;
    onSubmit?: (fields: CategoriaUpdateFormInputValues) => CategoriaUpdateFormInputValues;
    onSuccess?: (fields: CategoriaUpdateFormInputValues) => void;
    onError?: (fields: CategoriaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoriaUpdateFormInputValues) => CategoriaUpdateFormInputValues;
    onValidate?: CategoriaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CategoriaUpdateForm(props: CategoriaUpdateFormProps): React.ReactElement;
