/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Entrenador } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EntrenadorUpdateFormInputValues = {
    nombre?: string;
    apellidos?: string;
    correo?: string;
    foto?: string;
};
export declare type EntrenadorUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellidos?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EntrenadorUpdateFormOverridesProps = {
    EntrenadorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellidos?: PrimitiveOverrideProps<TextFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EntrenadorUpdateFormProps = React.PropsWithChildren<{
    overrides?: EntrenadorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    entrenador?: Entrenador;
    onSubmit?: (fields: EntrenadorUpdateFormInputValues) => EntrenadorUpdateFormInputValues;
    onSuccess?: (fields: EntrenadorUpdateFormInputValues) => void;
    onError?: (fields: EntrenadorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EntrenadorUpdateFormInputValues) => EntrenadorUpdateFormInputValues;
    onValidate?: EntrenadorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EntrenadorUpdateForm(props: EntrenadorUpdateFormProps): React.ReactElement;
